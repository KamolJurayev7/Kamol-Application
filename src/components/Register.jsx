import React, { useState } from 'react';
import { Input } from '../ui'
const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='text-center container mt-5'>
            <main className="form-sign-in w-25 m-auto">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

                    <Input label={"Username"} state={username} setState={setUsername} />
                    <Input label={"Email address"} state={email} setState={setEmail} />
                    <Input label={"Password"} type={'password'} state={password} setState={setPassword} />

                    <button className="btn btn-primary w-100 py-2" type="submit">Register</button>
                    <p className="mt-5 mb-3 text-body-secondary">© Kamol Juraev productions</p>
                </form>
            </main>
        </div>
    );
}

export default Register;
