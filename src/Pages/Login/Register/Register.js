import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {

    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
    }
    return (
        <div className='register-form'>
            <h1>Please Register</h1>
            <form onSubmit={handleRegister} >
                <input type="text" name='Name' placeholder='Your Name' /> <br />
                <input type="email" name="Email" id="" placeholder='Your Email' required /> <br />
                <input type="password" name="Password" id="" placeholder='Your Password' required /> <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account ?
                <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link>
            </p>
        </div>
    );
};

export default Register;