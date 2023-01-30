import styles from './AddBar.module.css';
import { PlusCircle } from 'phosphor-react'

export function AddBar(){
    return (
        <div className={styles.addBar}>
            <input placeholder='Adicione uma nova tarefa.' />
            <button>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    )
}