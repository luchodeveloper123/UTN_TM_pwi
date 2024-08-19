import React, { useState } from 'react';

function SignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        if (!username || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        localStorage.setItem('user', JSON.stringify({ username, password }));

        window.location.href = '/login';
    };

    return (
        <div>
            <h2>Crear Cuenta</h2>
            <input
                type="text"
                placeholder="Nombre de Usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Registrarse</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default SignupPage;
