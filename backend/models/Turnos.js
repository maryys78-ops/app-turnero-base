const mongoose = require('mongoose');

// Definimos la estructura (esquema) que tendrán los documentos en MongoDB
const TurnoSchema = new mongoose.Schema({
  paciente: {
    type: String,
    required: [true, 'El nombre del paciente es obligatorio'],
    trim: true // Elimina espacios en blanco al inicio y final
  },
  medico: {
    type: String,
    required: [true, 'El nombre del médico es obligatorio'],
    trim: true
  },
  fecha: {
    type: String,
    required: [true, 'La fecha es obligatoria'],
    trim: true
  },
  hora: {
    type: String,
    required: [true, 'La hora es obligatoria'],
    trim: true
  },
  estado: {
    type: String,
    enum: ['pendiente', 'confirmado', 'cancelado'], // Valores permitidos
    default: "pendiente"
  }
}, {
  // Genera automáticamente los campos createdAt y updatedAt
  timestamps: true 
});

// Exportamos el modelo para usarlo en los controladores
module.exports = mongoose.model('Turno', TurnoSchema);