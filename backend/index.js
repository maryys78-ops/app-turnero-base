const express = require('express');
const conectarDB = require('./config/db'); // Importas la conexión
const cors = require('cors'); // Importas la conexión
require('dotenv').config(); // Importas dotenv para variables de entorno
const app = express();
app.use(cors());
// 1. Conectar a la base de datos
conectarDB();

// 2. Middlewares
app.use(express.json());

// 3. Rutas
const turnoRoutes = require('./routes/turnos.routes');
app.use('/api/turnos', turnoRoutes);

app.get('/', (req, res) => {
    res.json({ message: "API funcionando correctamente", estado: "ok" });
});

// 4. Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`[SERVER] Escuchando en el puerto http://localhost:${PORT}`);
});
