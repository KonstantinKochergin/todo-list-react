import React, {useEffect, useState} from 'react'
import styles from './AddTodo.module.css'
import {connect} from 'react-redux'
import {addTodo} from '../../redux/actions/index'

const AddTodo = props => {

    const [isError, changeErrorStatus] = useState(false)

    const addTodo = () => {
        const todoInput = document.querySelector(`.${styles.todoInput}`)
        const todoText = todoInput.value
        const lettersCount = todoText.split('').reduce((accumulator, current) => {
            if (current !== ' ') {
                return accumulator += 1
            }
            return accumulator
        }, 0)
        if (lettersCount >= 3) {
            props.addTodo(todoText)
            todoInput.value = ''
            changeErrorStatus(false)
        }
        else {
            changeErrorStatus(true)
        }
    }

    const handleKeyup = event => {
        if (event.code === 'Enter') {
            addTodo()
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', handleKeyup)
        return () => {
            document.removeEventListener('keyup', handleKeyup)
        }
    })

    return (
        <div className={styles.container}>
            <img src={require('../../media/plus.svg')} alt="add" className={styles.plusButton} onClick={addTodo}/>
            <div className={styles.inputContainer}>
                <input type="text" className={styles.todoInput}/>
                <div className={isError ? [styles.error, styles.errorVisible].join(' ') : styles.error}>* Поле должно содержать не менее 3х символов</div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => dispatch(addTodo(text))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)