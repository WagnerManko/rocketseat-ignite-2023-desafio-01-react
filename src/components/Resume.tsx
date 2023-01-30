import styles from './Resume.module.css';

export function Resume(){
    return (
        <div className={styles.resume}>
            <p>
                Tarefas Criadas
                <span>0</span>
            </p>
            <p>
                Tarefas Concluídas
                <span>0</span>
            </p>
        </div>
    )
}