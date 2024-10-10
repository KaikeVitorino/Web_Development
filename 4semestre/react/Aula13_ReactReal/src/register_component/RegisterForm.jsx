import React from 'react';
import './RegisterForm.css';

function RegisterForm() {
    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Regi</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="nome">Nome completo</label>
                        <input type="text" id="nome" name="nome"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="numero">Numero de telefone</label>
                        <input type="text" id="numero" name="numero"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="endereco">Endereço</label>
                        <input type="text" id="endereco" name="endereco"/>
                    </div>
                </form>
            </div>

            <p className="arrow">→</p>

            <div className="register-box">
                <h2>stro</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirmar senha</label>
                        <input type="password" id="password" name="password"/>
                    </div>
                </form>
            </div>
            <button type="submit">Enviar</button>
        </div>
    );
}

export default RegisterForm;