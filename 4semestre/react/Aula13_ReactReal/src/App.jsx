import React from 'react';
import LoginForm from './components/LoginForm.jsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav className="navbar">
                    <h1>Monitoria React</h1>
                    <a href="#contact">Contato</a>
                </nav>
            </header>
            <LoginForm />
        </div>
    );
}

export default App;
