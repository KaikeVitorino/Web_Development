import React from 'react';
import './LoginForm.css';

function LoginForm() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Usuário</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;