import * as dotenv from "dotenv"
dotenv.config()
import express from 'express';
import router from "./api/routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.json())

app.use(cors())

app.get('/',(req,res)=>{
    res.send('Welcome to Accentiqa API')
})

app.use("/",router)


app.listen(process.env.PORT || 4000,()=>{
    console.log("server started");
})