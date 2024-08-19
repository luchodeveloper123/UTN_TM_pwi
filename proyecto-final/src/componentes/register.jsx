import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();


const handleRegister = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
    setError('Los campos no pueden estar vacíos.');
    return;
    }

    if (username.length < 6 || password.length < 6) {
        setError('El nombre de usuario y la contraseña deben tener al menos 6 caracteres.');
        return;
    }

    const existingUser = localStorage.getItem(username);
    if (existingUser) {
    setError('Este usuario ya existe.');
    return;
    }

    const newUser = { username, password };
    localStorage.setItem(username, JSON.stringify(newUser));

    navigate('/authpage');
};


return (
    <div className="register-container">
    <form className="register-form" onSubmit={handleRegister}>
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
        <button type="submit">Crear Cuenta</button>
    </form>
    </div>
);
};

export default RegisterPage;



