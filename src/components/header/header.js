import React from 'react';
import './header.scss';
import firebase from 'firebase';

const Header = () => {
    
    return (
        <div className = 'header'>
            <div className = 'header__todo-list'>ToDo-list</div>
            <div className = 'header__user-name'>test@test.com</div>
            <div className = 'header__log-out'
                onClick = {() => firebase.auth().signOut()}
            >
                Выйти
            </div>
        </div>
    )
}

export default Header;