import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthService from '../service/auth';
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import { Input } from '../ui';
import { ValidationError } from './allComponents';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const { isLoading, loggedIn } = useSelector(state => state.auth)
    const navigate = useNavigate()

    const submitLoginHandler = async (e) => {
        e.preventDefault()
        const user = { email, password }
        dispatch(signUserStart())
        try {
            const res = await AuthService.userLogin(user)
            dispatch(signUserSuccess(res.user))
            navigate('/')
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors))
        }
    }
    useEffect(() => {
        if(loggedIn){
            navigate('/')
        }
    }, []);
    return (
        <div className='text-center container mt-5'>
            <main className="form-sign-in w-25 m-auto">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please Login</h1>
                    <ValidationError />
                    <Input label={"Email address"} state={email} setState={setEmail} />
                    <Input label={"Password"} type={'password'} state={password} setState={setPassword} />

                    <button
                        className="btn btn-primary w-100 py-2"
                        type="submit"
                        onClick={submitLoginHandler}
                        disabled={isLoading}
                    >
                        {
                            isLoading ?
                                <div className="text-center">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                :
                                "Login"
                        }

                    </button>
                    <p className="mt-5 mb-3 text-body-secondary">© Kamol Juraev productions</p>
                </form>
            </main>
        </div>
    );
}

export default Login;
