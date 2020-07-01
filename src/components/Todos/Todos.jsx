import React from 'react'
import styles from './Todos.module.css'
import TodoItem from '../TodoItem/TodoItem'
import {connect} from 'react-redux'
import {toggleTodo} from '../../redux/actions/index'

const Todos = props => {

    const todoOnClick = id => {
        props.toggleTodo(id)
    }

    return (
        <div className={styles.container}>
            {
                props.todos !== undefined ?
                    props.todos.map((todo, index) => (
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

const mapStateToProps = state => ({
    todos: state
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)