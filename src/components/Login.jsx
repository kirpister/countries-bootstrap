import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logInWithEmailAndPassword } from '../auth/firebase';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect( () => {
        if(loading) return;
        if(user) navigate('/countries');
    },[user, loading, navigate]);

    return (
        <div className='register-box'>

            <input type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value) }
                placeholder='Email' 
            /> 

            <input type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value) }
                placeholder='Password' 
            /> 

            <Button onClick={() => logInWithEmailAndPassword(email, password)}>Login</Button>
            <div className='no-account'>
            <p>Create an account?</p>
            <Link to='/register'>Register</Link>
            </div>
            
        </div>

    );
};

export default Login;