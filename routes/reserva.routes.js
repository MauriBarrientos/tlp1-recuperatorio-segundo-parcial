// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores

const router = require('express').Router();
const {
    obtenerReservas,
    obtenerReserva,
    crearReserva,
    actualizarReserva,
    eliminarReserva
} = require('../controllers/reserva.controllers');


//Rutas para renderizas las vistas

//Listado de las reservas (Index)

router.get('/', (req, res) => {
    res.render('index');
});
// Formulario para actualizar una reserva
router.get('/reserva/editar/:id', (req, res) => {
    const reservaId = req.params.id;
    res.render('reserva/editar_reserva', { id: reservaId });
});

// Formulario para crear una reserva
router.get('/reserva/crear', (req, res) => {
    res.render('reserva/crear_reserva');
});


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/reservas', obtenerReservas);

//Obtener una sola reserva
router.get('/api/reserva/:id', obtenerReserva);
 
// Crear unareserva
router.post('/api/reserva', crearReserva);
 
// Actualizar o editar una reserva
router.put('/api/reserva/:id',actualizarReserva);
 
// Eliminar una reserva 
router.delete('/api/reserva/:id', eliminarReserva);
 
 module.exports = router;