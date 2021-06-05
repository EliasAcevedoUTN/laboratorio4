import express from "express";
import {Request, Response} from 'express';
const app = express();

import router from './routes';

app.use(express.json());//para transformar los datos a objetos json

app.use(express.urlencoded({extended:false}));//transformar los datos de un formulario html a objetos json 

app.use((req:Request, resp: Response, next: any)=>{
    resp.header("Access-Control-Allow-Origin", "*");
    resp.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(router);



app.listen(
    4000, () => { console.log("Servidor en puerto 4000", 4000); 
})