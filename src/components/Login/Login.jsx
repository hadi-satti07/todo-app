import React, { useState } from 'react'
import { ContextAPI } from '../../utils/ContextAPI';
import classes from './Login.module.css'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import { auth, fP } from '../../utils/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {gP} from "../../utils/firebase"
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
    const { theme } = useContext(ContextAPI);
    const [cardname, setcardName] = useState('Login')
    const [inputData, setinputData] = useState({ email: "", password: "" })
    const onChangeInput = (e, key) => {
        setinputData({ ...inputData, [key]: e.target.value })
    }
    const navigate = useNavigate()
    const handlecardvalue = (value) => {
        setcardName(value)
    }
    const handleRegister = async () => {
        try {
            const userData = await createUserWithEmailAndPassword(auth, inputData.email, inputData.password);
            l
            navigate('/dashboard');
        } catch (err) {
            alert(err.message)
        }
    }
    const handleLogin = async () => {
        try {
            const userData = await signInWithEmailAndPassword(auth, inputData.email, inputData.password);
            
            navigate('/dashboard');
        } catch (err) {
            alert(err.message)
        }
    }
    const handleBtnClick = () => {
        if (cardname === "Login") {
            handleLogin();
        } else {
            handleRegister();
        }

    }
    const loginbtn = async () => {
        try {
            const userData = await signInWithPopup(auth, gP);
            localStorage.setItem('user', JSON.stringify(userData));
            navigate('/dashboard');
            
        } catch (err) {
            alert(err.message)
        }
    }
    // const facebookLogin = async()=>{
    //     try {
    //         const userData = await signInWithPopup(auth, fP);
    //         localStorage.setItem('user', JSON.stringify(userData));
    //         navigate('/dashboard');
            
    //     } catch (err) {
    //         alert(err.message)
    //     }
    // }
    return (
        <div className={classes.login}>
            <div className={[classes.card, theme === 'light' ? classes.cardlight : classes.carddark].join(' ')}>
                <h2>{cardname}</h2>
                <div className={classes.inputbox}>
                    <input value={inputData.email} onChange={(e) => onChangeInput(e, "email")} className={classes.inputField} type='text' placeholder='Email Id' />
                </div>
                <div className={classes.inputbox}>
                    <input value={inputData.password} onChange={(e) => onChangeInput(e, "password")} className={classes.inputField} type='password' placeholder='Password' />
                </div>
                <div onClick={handleBtnClick} className={[classes.btncard, theme === 'light' ? classes.btncardlight : classes.btncarddark].join(' ')}>
                    {cardname}
                </div>
                 {
                    cardname === "Login" && <div onClick={loginbtn} className={[classes.btncard, theme === 'light' ? classes.btncardlight : classes.btncarddark].join(' ')}>
                    <GoogleIcon sx={{color:"red"}}/> Login
                    
                </div>
                }
                {
                    cardname === "Login" && <div  className={[classes.btncard, theme === 'light' ? classes.btncardlight : classes.btncarddark].join(' ')}>
                    <FacebookSharpIcon sx={{color:"red"}}/> Login
                    
                </div>
                }
                {
                    cardname === 'Login'
                        ? <div onClick={() => handlecardvalue('Register')}>Not Registered Yet? Register Now!</div>
                        : <div onClick={() => handlecardvalue('Login')}>Already have an Account? Login</div>
                }
            </div>
        </div>
    )
}

export default Login;