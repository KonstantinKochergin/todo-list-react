import React, {useState} from 'react'
import styles from './AddTodo.module.css'
import {useDispatch} from 'react-redux'
import {addTodo} from '../../redux/actions/index'

const AddTodo = props => {

    const [isError, changeErrorStatus] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const addTodoL = () => {
        if (inputValue.length >= 3) {
            dispatch(addTodo(inputValue))
            setInputValue('')
            changeErrorStatus(false)
        }
        else {
            changeErrorStatus(true)
        }
    }

    const handleKeyup = event => {
        if (event.keyCode === 13) {
            addTodoL()
        }
    }

    const inputChangeHandler = event => {
        setInputValue(event.target.value)
    }

    return (
        <div className={styles.container}>
            <img src={require('../../media/plus.svg')} alt="add" className={styles.plusButton} onClick={addTodoL}/>
            <div className={styles.inputContainer}>
                <input type="text" 
                    className={styles.todoInput} 
                    onKeyUp={handleKeyup} 
                    value={inputValue}
                    onChange={inputChangeHandler}/>
                <div className={isError ? [styles.error, styles.errorVisible].join(' ') : styles.error}>* Поле должно содержать не менее 3х символов</div>
            </div>
        </div>
    )
}

export default AddTodo