import React from 'react'
import styles from './Header.module.css'
import {connect} from 'react-redux'
import {deleteCompletedTodos} from '../../redux/actions/index'

const Header = props => {

    const onDeleteCompletedTodos = () => {
        props.deleteCompletedTodos()
    }

    return (
        <div className={styles.header}>
            <div className="title">TODO list</div>
            <img src={require('../../media/bin.svg')} alt="delete" onClick={onDeleteCompletedTodos}/>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteCompletedTodos: () => dispatch(deleteCompletedTodos())
})

export default connect(null, mapDispatchToProps)(Header)