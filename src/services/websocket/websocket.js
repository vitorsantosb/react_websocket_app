import { io } from 'socket.io-client';

let socket = null;

export function ConnectSocket() {
  if (!socket) {
    socket = io('http://localhost:5000');
  }
  return socket;
}

export function DisconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}

export function HandleSocketEvents(socket) {
  if (socket) {
    socket.on('connect', () => {
      console.log('Connected to socket server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
    });
  }
}

// Exportando default (opcional)
export default {
  ConnectSocket,
  DisconnectSocket,
  HandleSocketEvents,
};