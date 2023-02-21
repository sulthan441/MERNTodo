import express from "express";
import { addTodo ,getAllTodos } from "../controller/todo-controller.js";
const Routes = express.Router();

Routes.post('/todos',addTodo)
Routes.get('/todos',getAllTodos)

export default Routes ;