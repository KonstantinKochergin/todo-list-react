import React from 'react'
import styles from './TodoItem.module.css'

const TodoItem = props => {

    return (
        <label className={styles.container}>
            <input type="checkbox" onChange={() => {props.onClick(props.id)}}/>
            <div className={styles.checkmark}></div>
            <img src={require('../../media/tick.svg')} alt='done' className={styles.tick}/>
            <div className={styles.text}>{props.todoText}</div>
        </label>
    )
}

export default TodoItem