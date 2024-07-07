import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { registerUserStart } from '../slice/auth';
import { Input } from '../ui'
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.auth)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUserStart())
    }
    return (
        <div className='text-center container mt-5'>
            <main className="form-sign-in w-25 m-auto">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                    <Input label={"Username"} state={username} setState={setUsername} />
                    <Input label={"Email address"} state={email} setState={setEmail} />
                    <Input label={"Password"} type={'password'} state={password} setState={setPassword} />

                    <button disabled={isLoading} onClick={handleSubmit} className="btn btn-primary w-100 py-2" type="submit">
                        {
                            isLoading
                                ? 
                                <div class="text-center">
                                    <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                                :
                                'Register'
                        }
                    </button>
                    <p className="mt-5 mb-3 text-body-secondary">© Kamol Juraev productions</p>
                </form>
            </main>
        </div>
    );
}

export default Register;
