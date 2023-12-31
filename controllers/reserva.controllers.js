const ctrlReserva = {};
const Reserva = require('../models/Reserva');

// Controlador para obtener todas las reservas
ctrlReserva.obtenerReservas = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true,
            }
        });

        if (!reservas || reservas.length === 0) {
            throw ({
                status: 404,
                message: 'No hay reservas registradas'
            })
        }
        console.log(reservas)

        return res.json(reservas);
    } catch (error) {
        console.log('Error de trycatch en obtener reservas')
        console.log(error)
        return res.status(error.status || 500).json({
            message: error.message || 'Error interno del servidor'
        });
    }
}

// Controlador para obtener una sola reserva
ctrlReserva.obtenerReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reserva = await Reserva.findOne({
            where: {
                id,
                estado: true
            }
        });

        if (!reserva) {
            throw ({
                status: 404,
                message: 'No existe la reserva'
            })
        }
    
        return res.json(reserva);

    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Controlador para crear una reserva
ctrlReserva.crearReserva = async (req, res) => {
    const { nombre,apellido, email, destino, fechaSalida, fechaRegreso} = req.body;
    
    try {
        const reserva = await Reserva.create({
            nombre,
            apellido,
            email,
            destino,
            fechaSalida,
            fechaRegreso
        });

        if (!reserva) {
            throw ({
                status: 400,
                message: 'No se pudo crear la reserva'
            })
        }

        return res.json(reserva);
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

// Controlador para actualizar o editar una reserva
ctrlReserva.actualizarReserva = async (req, res) => {
    const { id } = req.params;
    const { nombre,apellido, email, destino, fechaSalida, fechaRegreso } = req.body;
    
    try {
        const reservaActualizada = await Reserva.update({
            nombre,
            apellido,
            email,
            destino,
            fechaSalida,
            fechaRegreso,
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!reservaActualizada) {
            throw ({
                status: 400,
                message: 'No se pudo actualizar la reserva'
            })
        }

        return res.json({
            message: 'reserva actualizada correctamente',
            reservaActualizada
            
        });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}


// Controlador para eliminar una reserva.

ctrlReserva.eliminarReserva = async (req, res) => {
    const { id } = req.params;

    try {
        const reservaEliminada = await Reserva.update({
            estado: false
        }, {
            where: {
                id,
                estado: true
            }
        });

        if (!reservaEliminada) {
            throw ({
                status: 400,
                message: 'No se pudo eliminar la reserva'
            })
        }

        return res.json({reservaEliminada, message: 'reserva eliminada correctamente' });
    } catch (error) {
        return res.status(error.status || 500).json(error.message || 'Error interno del servidor');
    }
}

module.exports = ctrlReserva;