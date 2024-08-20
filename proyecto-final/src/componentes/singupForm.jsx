import React, { useState } from 'react';
import './singupform.css';

function SignupPage() {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        if (!newUsername || !newPassword) {
            setError('Todos los campos son obligatorios');
            return;
        }

        localStorage.setItem('newUser', JSON.stringify({ username: newUsername, password: newPassword }));

        window.location.href = '/login';
    };

    return (
        <div className="signup-container">
            <h2>Crear Cuenta</h2>
            <input
                type="text"
                placeholder="Nombre de Usuario"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                className="signup-input"
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="signup-input"
            />
            <button onClick={handleSignup} className="signup-button">Registrarse</button>
            {error && <p className="signup-error">{error}</p>}
        </div>
    );
}

export default SignupPage;

