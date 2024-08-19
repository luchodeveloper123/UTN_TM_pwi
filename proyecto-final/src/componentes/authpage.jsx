import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username.trim() === '' || password.trim() === '') {
    setError('Los campos no pueden estar vacíos.');
    return;
    }

    const storedUser = localStorage.getItem(username);
    if (!storedUser) {
    setError('La cuenta no existe.');
    return;
    }

    const parsedUser = JSON.parse(storedUser);
    if (parsedUser.password !== password) {
    setError('Usuario o contraseña incorrectos.');
    return;
    }

    setError('');
    navigate('/listachats');
};

const handleCreateAccount = () => {
    navigate('/register');
};

return (
    <div className="auth-container">
    <form className="auth-form" onSubmit={handleSubmit}>
        <div className="input-group">
        <label htmlFor="username">Usuario</label>
        <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
        />
        </div>
        <div className="input-group">
        <label htmlFor="password">Contraseña</label>
        <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
        />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Iniciar Sesión</button>
        <button onClick={handleCreateAccount}>Crear Cuenta</button>
    </form>
    </div>
);
};

export default AuthPage;



