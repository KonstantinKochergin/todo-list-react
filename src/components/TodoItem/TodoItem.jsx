import React from 'react'
import styles from './TodoItem.module.css'
import PropTypes from 'prop-types'

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

TodoItem.propTypes = {
    id: PropTypes.number,
    onClick: PropTypes.func,
    todoText: PropTypes.string,
}

export default TodoItem