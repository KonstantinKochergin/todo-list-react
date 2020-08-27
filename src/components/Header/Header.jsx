import React from 'react'
import styles from './Header.module.css'
import {useDispatch} from 'react-redux'
import {deleteCompletedTodos} from '../../redux/actions/index'

const Header = props => {

    const dispatch = useDispatch()

    const onDeleteCompletedTodos = () => {
        dispatch(deleteCompletedTodos())
    }

    return (
        <div className={styles.header}>
            <div className="title">TODO list</div>
            <img src={require('../../media/bin.svg')} alt="delete" onClick={onDeleteCompletedTodos}/>
        </div>
    )
}

export default Header