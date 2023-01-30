import { AddBar } from './AddBar';
import styles from './Content.module.css';
import { NoTasks } from './NoTasks';
import { Resume } from './Resume';

export function Content(){
    const haveTasks = true;

    return (
        <div className={styles.content}>
            <AddBar />

            <div className={styles.tasks}>
                <Resume />

                <div className={styles.list}>
                    {haveTasks && <NoTasks />}
                </div>
            </div>
        </div>
    )
}