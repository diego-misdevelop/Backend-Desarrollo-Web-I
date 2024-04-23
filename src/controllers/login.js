import mongoose from 'mongoose';
import { UsuarioSchema } from '../models/usuario.js';

const Usuarios = mongoose.model('Usuarios', UsuarioSchema);

export const login = async (req, res) => {
    const { usuario, contrasena } = req.body;
    try {
        const usuarioEncontrado = await Usuarios.findOne({ usuario, contrasena });
        if (!usuarioEncontrado) {
            return res.status(401).json({ message: '¡Cuidado, credenciales inválidas!' });
        }
        res.json({ message: 'Inicio de sesión exitoso', usuario: usuarioEncontrado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

