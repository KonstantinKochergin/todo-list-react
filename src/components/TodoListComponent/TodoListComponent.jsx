import React from 'react'
import styles from './TodoListComponent.module.css'
import Header from '../Header/Header'
import Todos from '../Todos/Todos'
import AddTodo from '../AddTodo/AddTodo'


const TodoListComponent = () => {

    return (
        <div className={styles.container}>
            <Header/>
            <Todos />
            <AddTodo/>
        </div>
    )
}

export default TodoListComponent