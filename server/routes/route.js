import express from "express";
import { addTodo } from "../controller/todo-controller.js";
const Routes = express.Router();

Routes.post('/todos',addTodo)

export default Routes ;