import { useState } from 'react';
import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';
import { OneTaskProps } from './utils/interfaces';

interface TaskProps {
    task: OneTaskProps;
    handleCompleteTask: () => void;
    handleDeleteTask: () => void;
}

export function Task({task, handleCompleteTask, handleDeleteTask}: TaskProps) {
    const [checked, setChecked] = useState(task.done);

    function handleClickDone (){
        setChecked(!checked);
        handleCompleteTask();
    }

    return (
        <div id={task.id} className={styles.task}>
            <div
                className={styles.checkbox}
                onClick={handleClickDone}
            >
                {checked && <Check size={12} />}
                <input type="checkbox" checked={checked} />
            </div>
            <label className={checked ? styles.lineThrough : ''}>
                {task.text}
            </label>
            <button onClick={handleDeleteTask}>
                <Trash />
            </button>
        </div>
    )
}