import express from "express";
import { check } from "express-validator";
import Register from "../controllers/Register.controller.js";
import Login from "../controllers/Login.controller.js";

import { RegisterSchmea } from "../validationSchema/Registerschema.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { createTodo } from "../controllers/Todo.controller.js";
import { GetTodos } from "../controllers/TodoList.controller.js";
import { MarkTodo } from "../controllers/MarkTodo.controller.js";
import { RemoveTodo } from "../controllers/RemoveTodo.controller.js";

const apiRoute=express.Router();
export const apiProtected = express.Router();


apiRoute.post('/register',RegisterSchmea,Register);
apiRoute.post('/login',LoginSchema,Login);

// protected routes

apiProtected.post(
    "/createTodo",
    [check("desc","Todo desc is required").exists()],
    createTodo);

apiProtected.post(
    "/marktodo",
    [check("todo_id","Todo id is required").exists()],
     MarkTodo);    

apiProtected.post(
    "/removetodo",
    [check("todo_id","Todo id is required").exists()],
    RemoveTodo);    
    


apiProtected.get("/todolist", GetTodos);    

export default apiRoute;