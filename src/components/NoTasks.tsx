import clipboard from '../assets/clipboard.png';
import styles from './NoTasks.module.css';

export function NoTasks(){
    return (
        <div className={styles.noTasks}>
            <img src={clipboard} alt="imagem ilustratica de uma caderneta"/>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
)
}