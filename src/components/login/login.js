import React, {useEffect, useState} from 'react';
import './login.scss';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
import firebase from 'firebase';

const Login = ({getAuthorization, logOut}) => {
    
    const [login, handleChangeLogin] = useState('')
    const [password, handleChangePassword] = useState('')

    useEffect(() => {
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                getAuthorization()
            } else {
                logOut()
            }
        })
    }, [])

    const checkedLoginPassword = () => firebase.auth().signInWithEmailAndPassword(login, password).catch((e) =>alert("error" + e) )
    
        return (
            <div className = 'login' >
                <div className = 'login__window'>
                    <div className = 'login__block-title'>Авторизация</div>
                    <div className = 'login__main'>
                        <div className = 'login__container-input-login'>
                            <div className = 'login__person'><Person /></div>
                            <input 
                                className = 'login__input-login'
                                placeholder = 'test@test.com'
                                type='email' 
                                value={login} 
                                onChange={(e) => handleChangeLogin(e.target.value)}
                            />
                        </div>
                        <div className = 'login__container-input-password'>
                            <div className = 'login__lock'><Lock /></div>
                            <input 
                                className = 'login__input-password'
                                placeholder = '123456'
                                type='password' 
                                value={password} 
                                onChange={(e) => handleChangePassword(e.target.value)}
                            />
                        </div>
                        <div className = 'login__container-button-enter'>
                            <button 
                                className = 'login__button-enter'
                                onClick = {checkedLoginPassword}
                            >
                            Войти
                            </button>
                        </div>
                    </div>
                </div>
                
    
            </div>
        )
    
    
}

export default Login;