import React from 'react'
import styles from './Todos.module.css'
import TodoItem from '../TodoItem/TodoItem'
import {useSelector, useDispatch} from 'react-redux'
import {toggleTodo} from '../../redux/actions/index'

const Todos = props => {

    const todos = useSelector(state => state)
    const dispatch = useDispatch()

    const todoOnClick = id => {
        dispatch(toggleTodo(id))
    }

    return (
        <div className={styles.container}>
            {
                todos ?
                    todos.map(todo => (
                        <TodoItem todoText={todo.text}
                                        id={todo.id}
                                        onClick={id => todoOnClick(id)}
                                        key={todo.id}/>
                    ))
                    :
                    null
            }
        </div>
    )
}

export default Todos