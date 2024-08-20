import React from 'react';
import './listachats.css';
import { Link } from 'react-router-dom';
import homeroImg from '../img/homero.jpg';
import flandersImg from '../img/flanders.jpg';
import lisaImg from '../img/lisa.jpg';
import margeImg from '../img/marge.jpg';

function ChatItem({ chatId, chatName, chatMessage, chatTime, chatImage }) {
    return (
        <Link to={`/chat/${chatId}`} className="chat-item-link">
            <div className="chat-item">
                <img src={chatImage} alt={chatName} className="chat-profile-pic" />
                <div className="chat-item-info">
                    <div className="chat-item-header">
                        <span className="chat-name">{chatName}</span>
                        <span className="chat-time">{chatTime}</span>
                    </div>
                    <div className="chat-message">{chatMessage}</div>
                </div>
            </div>
        </Link>
    );
}

function ListaChats() {
    const chatData = [
        { chatId: 1, chatName: 'Lisa', chatMessage: '¿Ya terminaste la tarea?', chatTime: '5 minutos', chatImage: lisaImg },
        { chatId: 2, chatName: 'Homero', chatMessage: 'Mmm... rosquillas', chatTime: '10 minutos', chatImage: homeroImg },
        { chatId: 3, chatName: 'Flanders', chatMessage: '¡Hola, vecino!', chatTime: '2 días', chatImage: flandersImg },
        { chatId: 4, chatName: 'Marge', chatMessage: 'Recuerda llevar el almuerzo.', chatTime: '2 horas', chatImage: margeImg }
    ];

    return (
        <div className="chat-list-container">
            {chatData.map((chat) => (
                <ChatItem 
                    key={chat.chatId} 
                    chatId={chat.chatId} 
                    chatName={chat.chatName} 
                    chatMessage={chat.chatMessage} 
                    chatTime={chat.chatTime} 
                    chatImage={chat.chatImage}
                />
            ))}
        </div>
    );
}

export default ListaChats;




