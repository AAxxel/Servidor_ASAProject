const app = require('./src/app');
const server = require('http').createServer(app);
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

server.listen(port, () => { 
    console.log(`Server corriendo en la ruta http://localhost:${port}`);
});



