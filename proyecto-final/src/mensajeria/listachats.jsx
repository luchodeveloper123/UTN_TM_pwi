import React from 'react';
import './listachats.css';
import { Link } from 'react-router-dom';
import homero from '../img/homero.jpg';
import flanders from '../img/flanders.jpg';
import lisa from '../img/lisa.jpg';
import marge from '../img/marge.jpg';

function Chat({ id, name, message, time, image }) {
return (
    <Link to={`/chat/${id}`} className="chat-link">
    <div className="chat">
        <img src={image} alt={name} className="profile-pic" />
        <div className="chat-info">
        <div className="chat-header">
            <span className="name">{name}</span>
            <span className="time">{time}</span>
        </div>
        <div className="message">{message}</div>
        </div>
    </div>
    </Link>
);
}

function ListaChats() {
const chats = [
    { id: 1, name: 'Lisa', message: '¿Ya terminaste la tarea?', time: '5 minutos', image: lisa },
    { id: 2, name: 'Homero', message: 'Mmm... rosquillas', time: '10 minutos', image: homero },
    { id: 3, name: 'Flanders', message: '¡Hola, vecino!', time: '2 días', image: flanders },
    { id: 4, name: 'Marge', message: 'Recuerda llevar el almuerzo.', time: '2 horas', image: marge }
];

return (
    <div className="chat-container">
    {chats.map((chat) => (
        <Chat 
        key={chat.id} 
        id={chat.id} 
        name={chat.name} 
        message={chat.message} 
        time={chat.time} 
        image={chat.image}
        />
    ))}
    </div>
);
}

export default ListaChats;



