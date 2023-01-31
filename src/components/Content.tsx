import { useEffect, useState } from 'react';
import uuid from 'react-uuid';

import { AddBar } from './AddBar';
import { NoTasks } from './NoTasks';
import { Resume } from './Resume';
import { Task } from './Task';

import { OneTaskProps } from './utils/interfaces';

import styles from './Content.module.css';

export function Content(){
    const [tasks, setTasks] = useState<OneTaskProps[]>([]);
    const [done, setDone] = useState<OneTaskProps[]>([]);
    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask(task: string){
        const newTask = {
            id: uuid(),
            text: task,
            done: false,
        }

        setTasks([...tasks, newTask])
        setNewTaskText('');
    }

    function handleDeleteTask(taskId: string){
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task.id !== taskId;
        })

        setTasks(tasksWithoutDeleteOne);
    }

    function handleCompleteTask(taskId: string){
        setTasks(tasks.map(task => {
            if(task.id === taskId) {
                return task = {...task, done: true};
            } else {
                return task;
            }
        }))
    }

    useEffect(() => {
        const doneTasks = tasks.filter(task => task.done === true);
        setDone(doneTasks);
    }, [tasks])

    return (
        <div className={styles.content}>
            <AddBar
                onChange={
                    (e: React.FormEvent<HTMLInputElement>) =>
                    setNewTaskText(e.currentTarget.value)
                }
                onClick={() => handleCreateNewTask(newTaskText)}
                value={newTaskText}
            />

            <div className={styles.tasks}>
                <Resume done={done.length} total={tasks.length} />

                <div className={styles.list}>
                    {tasks.length === 0 ?
                        <NoTasks /> :
                        tasks.map(task =>
                            <Task
                                key={task.id}
                                task={task}
                                handleCompleteTask={() => handleCompleteTask(task.id)}
                                handleDeleteTask={() => handleDeleteTask(task.id)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}