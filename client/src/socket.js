import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');
export let socketID = '';
socket.on('connect', () => {
    socketID = socket.id
})

// React içinde socket.io sürekli sürekli id değiştirdiği için React dışında servera bağlanıp socket ve socketID'yi export ettim.
