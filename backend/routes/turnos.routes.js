const express = require('express');
const router = express.Router();

// importar el controlador de turno con las funciones de metodo
const turnoController = require('../controllers/turnos.controllers');

// definir las rutas relativas
router.get('/', turnoController.ObtenerTurnos);
router.post('/', turnoController.CrearTurno);
router.put('/:id', turnoController.ActualizarTurno);
router.delete('/:id', turnoController.EliminarTurno);

module.exports = router;