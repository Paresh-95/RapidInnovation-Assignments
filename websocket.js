const WebSocket = require('ws');


let wss;
const createWebSocketServer = (server) => {
    wss = new WebSocket.Server({ server });

    
    wss.on('connection', (ws) => {
        console.log('A WebSocket client connected!');

        // Handle client disconnection
        ws.on('close', () => {
            console.log('A WebSocket client disconnected!');
        });
    });
};


const broadcastTaskUpdate = (updatedTask) => {
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(updatedTask));
        }
    });
};

module.exports = { createWebSocketServer, broadcastTaskUpdate };
