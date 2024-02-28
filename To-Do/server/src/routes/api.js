import express from "express";
import { check } from "express-validator";
import Register from "../controllers/Register.controller.js";
import Login from "../controllers/Login.controller.js";

import { RegisterSchmea } from "../validationSchema/Registerschema.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { createTodo } from "../controllers/Todo.controller.js";
import { GetTodos } from "../controllers/TodoList.controller.js";

const apiRoute=express.Router();
export const apiProtected = express.Router();


apiRoute.post('/register',RegisterSchmea,Register);
apiRoute.post('/login',LoginSchema,Login);

// protected routes

apiProtected.post(
    "/createTodo",
    [check("desc","TOdo desc is required").exists()],
    createTodo);

apiProtected.get("/todolist", GetTodos);    

export default apiRoute;