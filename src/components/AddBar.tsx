import styles from './AddBar.module.css';
import { PlusCircle } from 'phosphor-react'

interface AddBarProps {
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    onClick: () => void;
    value: string;
}

export function AddBar({onChange, onClick, value}: AddBarProps){
    return (
        <div className={styles.addBar}>
            <input
                placeholder='Adicione uma nova tarefa.'
                onChange={onChange}
                value={value}
            />
            
            <button onClick={onClick}>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    )
}