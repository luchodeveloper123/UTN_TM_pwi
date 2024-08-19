import React, { useState } from 'react';

function LoginForm({ onLogin }) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

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
    onLogin(username, password);
};

return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Usuario</label>
        <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
    </div>
    <div>
        <label>Contraseña</label>
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
    </div>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <button type="submit">Iniciar Sesión</button>
    </form>
);
}

export default LoginForm;




