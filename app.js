// ----- INSTALAR -----
// Necessário:
// npm install pg-listen
// npm install pg --save

// ----- REFERÊNCIA -----
//ref: https://github.com/andywer/pg-listen


// ----- NODE PURO EXEMPLO DA DOC DELES -----
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// --------------------
// ----- POSTGRES -----
// --------------------

// ----- Criar client -----
// Usando client (não sei a diferença dele pro pool zz)
const { Client } = require('pg')
const client = new Client({
    'user': 'postgres',
    'host': 'localhost',
    'database': 'rottassim',
    'password': '1234abcd',
    'port': 5432
});

// ----- Conectar client -----
// subscribe conforme https://arctype.com/blog/postgres-notify-for-real-time-dashboards/
// WATCH V2
client.connect(function (err, client){
    // ----- Escutar notificações específicas para atualização em posição -----
    query = client.query('LISTEN tc_pos_event');
    //No client.on:
    //se for "tc_pos_event" no lugar de "notification" não atualiza, ok!
    client.on('notification', (data)=>{
        console.log('TC POS NOTIFICATION', data)
        console.log(data.payload)
        console.log(JSON.parse(data.payload))
    });
});






// Usando pool:

// const Pool = require('pg').Pool
// const pool = new Pool(
//     {
//         'user':'master_role',
//         'host':'localhost',
//         'database':'rottassim',
//         'password':'1234abcd',
//         'port':5432
//     }
// )

// const getPositions = (request, response) => {
//     pool.query(
//         "SELECT * FROM public.tc_positions ORDER BY deviceid ASC, servertime ASC "
//     )
// }

// getPositions();

