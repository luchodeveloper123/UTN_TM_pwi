import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import'./chatdetails.css';
function ChatDetails() {
const { id } = useParams();
const [chatData, setChatData] = useState(null);
const [newMessage, setNewMessage] = useState('');

useEffect(() => {
    const fetchChatData = async () => {
    const chats = {
        1: {
        nombre: 'Lisa',
        mensajes: [
            { autor: 'Lisa', texto: '¿Ya terminaste la tarea?' },
            { autor: 'Tú', texto: 'no, y tu?' }
        ],
        },
        2: {
        nombre: 'Homero',
        mensajes: [
            { autor: 'Homero', texto: 'Mmm... rosquillas' },
            { autor: 'Tú', texto: 'Qué ricas' }
        ],
        },
        3: {
        nombre: 'Flanders',
        mensajes: [
            { autor: 'Flanders', texto: '¡Hola, vecino!' },
            { autor: 'Tú', texto: 'Hola, Flanders' }
        ],
        },
        4: {
        nombre: 'Marge',
        mensajes: [
            { autor: 'Marge', texto: 'Recuerda llevar el almuerzo.' },
            { autor: 'Tú', texto: 'gracias por recordarmelo' }
        ],
        },
    };

    const data = chats[id];
    setChatData(data);
    };

    fetchChatData();
}, [id]);

const handleSendMessage = (e) => {
    e.preventDefault();

    if (newMessage.trim() === '') return;

    const updatedMessages = [
    ...chatData.mensajes,
    { autor: 'Tú', texto: newMessage }
    ];

    setChatData((prevData) => ({
    ...prevData,
    mensajes: updatedMessages,
    }));

    setNewMessage('');
};

if (!chatData) {
    return <div>Cargando chat...</div>;
}

return (
    <div>
    <h2>Chat con {chatData.nombre}</h2>
    <div>
        {chatData.mensajes.map((mensaje, index) => (
        <div key={index}>
            <strong>{mensaje.autor}:</strong> {mensaje.texto}
        </div>
        ))}
    </div>
    <form onSubmit={handleSendMessage}>
        <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Escribe un mensaje..."
        />
        <button type="submit">Enviar</button>
    </form>
    </div>
);
}

export default ChatDetails;



