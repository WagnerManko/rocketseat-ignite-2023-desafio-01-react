import styles from './Resume.module.css';

interface ResumeProps {
    done: number;
    total: number;
}

export function Resume({done = 0, total = 0}: ResumeProps){
    return (
        <div className={styles.resume}>
            <p>
                Tarefas Criadas
                <span>{done}</span>
            </p>
            <p>
                Tarefas Concluídas
                <span>{total}</span>
            </p>
        </div>
    )
}