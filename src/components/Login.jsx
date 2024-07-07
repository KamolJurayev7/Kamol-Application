import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserStart } from '../slice/auth';
import { Input } from '../ui';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.auth)

    const submitLoginHandler = (e) => {
        e.preventDefault()
        dispatch(loginUserStart())
    }
    return (
        <div className='text-center container mt-5'>
            <main className="form-sign-in w-25 m-auto">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please Login</h1>

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
                                <div class="text-center">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
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
