const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://maryys78_db_user:NtjcaylDgSaGFVUh@cluster0.4zpqaky.mongodb.net/Turnos';

const conectarDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('[DB] Conexión exitosa a MongoDB Atlas');
    } catch (error) {
        console.error('[DB] Error de conexión:', error.message);
        process.exit(1);
    }
};

module.exports = conectarDB;