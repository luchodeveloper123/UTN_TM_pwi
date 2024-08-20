import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './authpage.css';

const AuthPage = () => {
    const [authUsername, setAuthUsername] = useState('');
    const [authPassword, setAuthPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (authUsername.trim() === '' || authPassword.trim() === '') {
            setAuthError('Los campos no pueden estar vacíos.');
            return;
        }

        const storedUser = localStorage.getItem(authUsername);
        if (!storedUser) {
            setAuthError('La cuenta no existe.');
            return;
        }

        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.password !== authPassword) {
            setAuthError('Usuario o contraseña incorrectos.');
            return;
        }

        setAuthError('');
        navigate('/listachats');
    };

    const handleCreateAccount = () => {
        navigate('/register');
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-input-group">
                    <label htmlFor="auth-username">Usuario</label>
                    <input 
                        type="text" 
                        id="auth-username" 
                        value={authUsername} 
                        onChange={(e) => setAuthUsername(e.target.value)} 
                        className="auth-input"
                    />
                </div>
                <div className="auth-input-group">
                    <label htmlFor="auth-password">Contraseña</label>
                    <input 
                        type="password" 
                        id="auth-password" 
                        value={authPassword} 
                        onChange={(e) => setAuthPassword(e.target.value)} 
                        className="auth-input"
                    />
                </div>
                {authError && <p className="auth-error">{authError}</p>}
                <button type="submit" className="auth-button">Iniciar Sesión</button>
                <button type="button" onClick={handleCreateAccount} className="auth-button auth-create-button">Crear Cuenta</button>
            </form>
        </div>
    );
};

export default AuthPage;




