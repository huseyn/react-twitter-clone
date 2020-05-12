import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    useEffect(() => {

        if (isAuthenticated) {
            props.history.push('/');
        }

        if (error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setAlert('Please enter all fields', 'danger');
        } else if (password !== password2) {
            setAlert('Passwords dont match', 'danger');
        } else {
            register({
                name,
                email,
                password
            });
        }
    }

    return (
        <div className="auth">
            <div className="form">
                <i className="fab fa-twitter"></i>
                <h2>Create your account</h2>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" value={name} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={email} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onChange={onChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" name="password2" value={password2} onChange={onChange} required />
                    </div>
                    <input type="submit" value="Log in" className="btn btn-link btn-l" />
                </form>
            </div>
        </div>
    )
}

export default Register;
