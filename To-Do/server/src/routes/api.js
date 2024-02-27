import express from "express";
import Register from "../controllers/Register.controller.js";
import { RegisterSchmea } from "../validationSchema/Registerschema.js";

const apiRoute=express.Router();

apiRoute.post('/register',RegisterSchmea,Register);

export default apiRoute;