import express from "express";
import Register from "../controllers/Register.controller.js";
import Login from "../controllers/Login.controller.js";

import { RegisterSchmea } from "../validationSchema/Registerschema.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";

const apiRoute=express.Router();

apiRoute.post('/register',RegisterSchmea,Register);
apiRoute.post('/login',LoginSchema,Login);


export default apiRoute;