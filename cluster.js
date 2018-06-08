const cluster = require('cluster');

if(cluster.isMaster) {
    const worker = cluster.fork();

    worker.on('message', (mensagem) => {
        console.log('Oi do Master jogando o job pro worker');
    });

    console.log('Oi do Master');

    worker.emit('message', 'Olá Morty');
    worker.emit('message', 'Olá Summer');
    
} else {
    // Is Worker;
    // console.log('Oi do Worker');
}