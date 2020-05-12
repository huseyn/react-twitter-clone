import React, { useState } from 'react'

const Register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log('Register submit');
    }

    return (
        <div className="auth">
            <div className="form">
                <i className="fab fa-twitter"></i>
                <h2>Create your account</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={name} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" name="password2" value={password2} onChange={onChange} />
                    </div>
                    <input type="submit" value="Log in" className="btn btn-link btn-l" />
                </form>
            </div>
        </div>
    )
}

export default Register;
