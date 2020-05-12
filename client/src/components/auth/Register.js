import React from 'react'

const Register = () => {
    return (
        <div class="auth">
            <div class="form">
                <i class="fab fa-twitter"></i>
                <h2>Create your account</h2>
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <div class="form-group">
                        <label for="password2">Confirm Password</label>
                        <input type="password" name="password2" />
                    </div>
                    <input type="submit" value="Log in" class="btn btn-link btn-l" />
                </form>
            </div>
        </div>
    )
}

export default Register;
