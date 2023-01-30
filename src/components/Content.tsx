import { AddBar } from './AddBar';
import styles from './Content.module.css';
import { NoTasks } from './NoTasks';
import { Resume } from './Resume';
import { Task } from './Task';

export function Content(){
    const haveNoTasks = false;

    return (
        <div className={styles.content}>
            <AddBar />

            <div className={styles.tasks}>
                <Resume />

                <div className={styles.list}>
                    {haveNoTasks ? <NoTasks /> : <Task />}
                </div>
            </div>
        </div>
    )
}