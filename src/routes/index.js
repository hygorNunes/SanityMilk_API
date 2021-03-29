import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const routes = Router();

const usuarioController = new UsuarioController();

/**
 * Função para realizar login no sistema
 * @route POST /login
 * @group Access
 * @param { object } body.body.required
 * @returns { object } 200 - Return JSON with token access
 * @returns { Error }  401 - Invalid Login!
 */
 routes.post("/login", usuarioController.login);
 routes.post("/trocaSenha", usuarioController.trocaSenha);
 routes.get("/bemVindo", (req, res) => {
     res.status(200).send({message: "Tamo aqui safado"})
 })

export default routes;