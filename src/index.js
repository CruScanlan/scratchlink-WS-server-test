const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

const wait = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
}

wss.on('connection', async (ws) => {
    console.log(`New connection`);

    ws.on('message', (message) => {
        console.log('received message: %s', message);
    });

    while(true) {
        await wait(75);
        ws.send('{Ultras:[200,200]}');
        await wait(20);
        ws.send('{RGB0:[841,642,219,1473,161,1],RGB1:[583,453,173,1095,114,5],VA:[7.664,0.154],Wd:[0.0,0.0,0]}');
    }
});

wss.on('listening', () => {
    console.log('Websocket server litsening on port 8080');
})