import { Router } from 'express';
import usersDao from '../daos/dbManager/users.dao.js';
import userController from '../controllers/user.controller.js';
import { hashPassword } from '../utils.js';

const router = Router();

router.get("/", usersController.getUsers);

router.get("/:id", usersController.getUser);

router.post("/", usersController.createUser);

router.delete("/:id", usersController.deleteUser);

router.get('/recuperara-contraseña/:id', usersController.recuperarContraseña);
router.post('/restablecer-contraseña/', usersController.restablecerContraseña);

export default router;