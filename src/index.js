import * as dotenv from "dotenv"
dotenv.config()
import express from 'express';
import router from "./api/routes.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(cors())
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send('Welcome to Accentiqa API')
})

app.use("/",router)


app.listen(process.env.PORT || 4000,()=>{
    // connectDB()
    console.log("server started");
})