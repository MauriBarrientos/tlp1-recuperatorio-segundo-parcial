// Imports
const cors = require('cors');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
require('dotenv').config();
const {sequelize} = require('./database');
require('ejs');

//Instancia de conexión con el puerto
const port = process.env.PORT || 4000;

//Instancia de conexion a la base de datos
sequelize.authenticate()
    .then(() => console.log('Conexión a base de datos exitosa'))
    .catch((error) => console.log('Error al conectar a base de datos', error));

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Archivos estáticos usando la librería path de NodeJS
app.use(express.static(path.join(__dirname, 'public')));

//Configuracion el motor de plantitllas de EJS
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Inicio del servidor 
app.listen(4000, () => console.log(`Servidor escuchando en el puerto ${port}`));