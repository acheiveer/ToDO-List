import  express  from "express";
import apiRoute from "./routes/api.js";
import mongoose from "mongoose";
import { DB_CONNECT } from "./utils/constants.js";

const app = express();
mongoose.set('strictQuery', false);
mongoose.connect(DB_CONNECT,{},(error)=>console.log(error));

const PORT=8000;

app.use(express.json());
app.use('/api/',apiRoute);

app.listen(PORT,()=>{
    console.log("server is running");
})