import  express  from "express";
import apiRoute, { apiProtected } from "./routes/api.js";
import AuthMiddleware from "./middlewares/AuthMiddleware.js";
import mongoose from "mongoose";
import { DB_CONNECT } from "./utils/constants.js";

const app = express();
mongoose.set('strictQuery', false);
mongoose.connect(DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (error) => {
    if (error) {
        console.error('Error connecting to MongoDB:', error);
    } else {
        console.log('Connected to MongoDB');
    }
});

const PORT=8000;

app.use(express.json());
app.use('/api/',apiRoute);
app.use('/api/',AuthMiddleware,apiProtected);


app.listen(PORT,()=>{
    console.log("server is running");
})