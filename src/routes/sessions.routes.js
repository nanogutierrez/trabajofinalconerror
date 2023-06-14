import { Router } from "express";
import usersDao from "../daos/dbManager/users.dao.js";
import { comparePassword } from "../utils.js";
import jwt from "jsonwebtoken";

const router = Router();


router.post('/login', sessionController.login)

  // Sacar password
  const token = jwt.sign({ email, role: user.role }, 'coderSecret', { expiresIn: '10m' });
  res.cookie('coderCokieToken', token, { maxAge: 5000, httpOnly: false });
  res.json({ message: 'Login correcto', token });


export default router;