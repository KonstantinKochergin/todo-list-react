import React, {useEffect} from 'react'
import styles from './TodoListComponent.module.css'
import Header from '../Header/Header'
import Todos from '../Todos/Todos'
import AddTodo from '../AddTodo/AddTodo'
import {getTodosFromStorage} from '../../redux/actions/index'
import { useDispatch } from 'react-redux'

const TodoListComponent = props => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodosFromStorage())
    })
    
    return (
        <div className={styles.container}>
            <Header/>
            <Todos />
            <AddTodo/>
        </div>
    )
}

export default TodoListComponent