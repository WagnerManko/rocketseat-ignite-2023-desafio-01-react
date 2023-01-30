import { useState } from 'react';
import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
    const [checked, setChecked] = useState(false);

    return (
        <div className={styles.task}>
            <div className={styles.checkbox} onClick={() => setChecked(!checked)}>
                {checked && <Check size={12} />}
                <input type="checkbox" checked={checked} />
            </div>
            <label className={checked ? styles.lineThrough : ''}>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
            </label>
            <button>
                <Trash />
            </button>
        </div>
    )
}