import React from 'react';
import LoginForm from './login_component/LoginForm.jsx';
import './App.css';
import RegisterForm from "./register_component/RegisterForm.jsx";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="navbar">
                    <h1>Monitoria React</h1>
                    <a href="#contact">Contato</a>
                </nav>
            </header>
            <RegisterForm />
        </div>
    );
}

export default App;
