const app = require('./src/config/app');
const server = require('http').createServer(app);
const {sequelize} = require('./src/config/database');
const {router} = require('./src/interfaces/routes/router');
require('dotenv').config();

const port = process.env.PORT;

app.use('/api', router);

  const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        server.listen(port, () => { 
            console.log(`Server corriendo en la ruta http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
  }


startServer();


