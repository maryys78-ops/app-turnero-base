const Turnos = require('../models/Turnos');

// 1. GET: Obtener todos los turnos
exports.ObtenerTurnos = async (req, res) => {
    try {
        const turnos = await Turnos.find();
        res.status(200).json({
            ok: true,
            datos: turnos
        });
    } catch (error) {
        console.error("Error al obtener turnos:", error);
        res.status(500).json({
            ok: false,
            mensaje: "Error al obtener los turnos"
        });
    }
};

// 2. POST: Crear un nuevo turno
exports.CrearTurno = async (req, res) => {
    try {
        const nuevoTurno = new Turnos(req.body);
        await nuevoTurno.save();
        
        res.status(201).json({
            ok: true,
            mensaje: "Turno creado exitosamente",
            turno: nuevoTurno
        });
    } catch (error) {
        console.error("Error al agendar turno:", error);
        res.status(500).json({
            ok: false,
            mensaje: "Error al agendar el turno"
        });
    }
};

// 3. PUT: Actualizar un turno por su ID
exports.ActualizarTurno = async (req, res) => {
    try {
        const { id } = req.params;
        const turnoActualizado = await Turnos.findByIdAndUpdate(id, req.body, { new: true });

        if (!turnoActualizado) {
            return res.status(404).json({
                ok: false,
                mensaje: "El turno no existe"
            });
        }

        res.status(200).json({
            ok: true,
            mensaje: "Turno actualizado exitosamente",
            turno: turnoActualizado
        });
    } catch (error) {
        console.error("Error al actualizar turno:", error);
        res.status(500).json({
            ok: false,
            mensaje: "Error al actualizar el turno"
        });
    }
};

// 4. DELETE: Eliminar un turno por su ID
exports.EliminarTurno = async (req, res) => {
    try {
        const { id } = req.params;
        const turnoEliminado = await Turnos.findByIdAndDelete(id);

        if (!turnoEliminado) {
            return res.status(404).json({
                ok: false,
                mensaje: "El turno no existe"
            });
        }

        res.status(200).json({
            ok: true,
            mensaje: "Turno eliminado exitosamente"
        });
    } catch (error) {
        console.error("Error al eliminar turno:", error);
        res.status(500).json({
            ok: false,
            mensaje: "Error al eliminar el turno"
        });
    }
};