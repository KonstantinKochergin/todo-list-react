import React from 'react'
import styles from './Todos.module.css'
import TodoItem from '../TodoItem/TodoItem'

const Todos = props => {

    return (
        <div className={styles.container}>
            <TodoItem todoText='Покормить собаку'/>
        </div>
    )
}

export default Todos