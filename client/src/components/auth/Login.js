import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log('Login submit');
    }

    return (
        <div className="auth">
            <div className="form">
                <i className="fab fa-twitter"></i>
                <h2>Log in to Twitter</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={onChange} />
                    </div>
                    <input type="submit" value="Log in" className="btn btn-link btn-l" />
                </form>
            </div>
        </div>
    )
}

export default Login;
