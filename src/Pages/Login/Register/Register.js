import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {

    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword, user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate(`/login`)
    }

    if (updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log(user)
    }
    const handleRegister = async (event) => {
        event.preventDefault()
        const displayName = event.target.Name.value
        const email = event.target.Email.value
        const password = event.target.Password.value


        // const agree = event.target.terms.checked

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName });
        console.log('Updated profile');

        navigate('/home')


    }
    return (
        <div className='register-form'>
            <h1>Please Register</h1>
            <form onSubmit={handleRegister} >
                <input type="text" name='Name' placeholder='Your Name' /> <br />
                <input type="email" name="Email" id="" placeholder='Your Email' required /> <br />
                <input type="password" name="Password" id="" placeholder='Your Password' required /> <br />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}

                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>


                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p>Already have an account ?
                <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;