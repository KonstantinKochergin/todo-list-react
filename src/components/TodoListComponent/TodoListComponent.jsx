import React, {useEffect} from 'react'
import styles from './TodoListComponent.module.css'
import Header from '../Header/Header'
import Todos from '../Todos/Todos'
import AddTodo from '../AddTodo/AddTodo'
import {getTodosFromStorage} from '../../redux/actions/index'
import { connect } from 'react-redux'

const TodoListComponent = props => {
    
    useEffect(() => {
        props.getTodosFromStorage()
    })
    
    return (
        <div className={styles.container}>
            <Header/>
            <Todos />
            <AddTodo/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getTodosFromStorage: () => dispatch(getTodosFromStorage())
})

export default connect(null, mapDispatchToProps)(TodoListComponent)