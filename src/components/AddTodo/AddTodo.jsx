import React from 'react'
import styles from './AddTodo.module.css'

const AddTodo = props => {

    return (
        <div className={styles.container}>
            <img src={require('../../media/plus.svg')} alt="add" className={styles.plusButton}/>
            <input type="text" className={styles.todoInput}/>
        </div>
    )
}

export default AddTodo