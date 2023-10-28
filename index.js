import express from 'express';
import { config } from 'dotenv';
config();
import usuarioRoutes from './routes/usuario.routes.js';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use('/api/usuario', usuarioRoutes);

app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:' + PORT);
});
