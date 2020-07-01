import React from 'react'
import styles from './Header.module.css'

const Header = props => {

    return (
        <div className={styles.header}>
            <div className="title">TODO list</div>
            <img src={require('../../media/bin.svg')} alt="delete" onClick={props.onDeleteTodosClick}/>
        </div>
    )
}

export default Header