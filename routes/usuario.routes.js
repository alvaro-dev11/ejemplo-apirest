import { Router } from 'express';
import fs from 'fs'; // file system
import path from 'path';

const usuarioFile = path.join(process.cwd(), 'data', 'usuarios.json');
const router = Router();

router.get('/', (req, res) => {
    const usuarios = readFile();
    res.json(usuarios);
});

function readFile() {
    const result = fs.readFileSync(usuarioFile, 'utf-8');
    const json = JSON.parse(result);
    return json;
}

export default router;
