import {Request, Response} from 'express';
import {conexionMysql} from '../mysqldb';

export const instrumentosControlador = {
    'getInstrumentos' : (req: Request, resp: Response) => new Promise((resolve, reject)=>{
        conexionMysql.getConnection((error, connection)=>{
            if (error){
                console.error(error);
                resp.send(error);
                return;
            }
            console.log('Mysql connection: ', connection.threadId);
            connection.query('SELECT * FROM instrumento', (err, results)=>{
                if (err) console.log(err);
                resp.send(results)
            });
        })
    }),
    'getInstrumento' : (req: Request, resp: Response)=> new Promise((resolve, reject) =>{
        const idInstrumento = parseInt(req.params.id);
        conexionMysql.getConnection((err, connection)=>{
            if(err) {
                console.error(err);
                resp.send(err);
                return;
            }
            connection.query('SELECT * FROM instrumento WHERE id=?', [idInstrumento], (error, resultado)=>{
                if(error) console.log(error);
                resp.send(resultado);
            })
        })
    }),
    'crearInstrumento': (req:Request, resp:Response) => new Promise ((resolve, reject) => {
        const {instrumento, marca, modelo, imagen, precio, costo_envio, cantidad_vendida, descripcion} = req.body;
        const valores = [instrumento, marca, modelo, imagen, precio, costo_envio, cantidad_vendida, descripcion];
        conexionMysql.getConnection((error, conecction) => {
            if (error) {
                console.error(error);
                resp.send(error);
                return;
            } else {
                let cadenaSql:string = 'INSERT INTO instrumento(instrumento, marca, modelo, imagen, precio, costo_envio, cantidad_vendida, descripcion) VALUES(?, ?, ?, ?, ?, ?, ?, ?)';
                conecction.query(cadenaSql, valores, (err, resultado)=>{
                    if(err){
                        console.log(err);
                        resp.json({message:'Error al trata de crear nuevo instrumento'})
                    } else {
                        resp.json({message : 'Exito al crear un nuevo instruento!!'})
                    }
                })
            }
        })
    }),
    'actualizarInstrumento': (req: Request, resp: Response) => new Promise((resolve, reject)=>{
        const {instrumento, marca, modelo, imagen, precio, costo_envio, cantidad_vendida, descripcion} = req.body;
        const id = req.params.id;
        const valores = [instrumento, marca, modelo, imagen, precio, costo_envio, cantidad_vendida, descripcion, id];
        console.log(valores);
        conexionMysql.getConnection((error, conexion)=>{
            if(error){
                console.error(error);
                resp.send(error);
                return;
            } else {
                const cadenaSql = "UPDATE instrumento SET instrumento=?, marca=?, modelo=?, imagen=?, precio=?, costo_envio=?, cantidad_vendida =?, descripcion =? WHERE id=?";
                conexion.query(cadenaSql, valores, (err, resultado)=>{
                    if (err){
                        console.log(err);
                        resp.json({message : 'Error al actualizar un instrumento!!'});
                    } else {
                        resp.json({message : 'Exito al actualizar un isntruento!!'});
                    }
                })
            }
        })
    }),
    'deleteInstrumento' : (req: Request, resp: Response) => new Promise((resolve, reject)=>{
        const idInstrumento = parseInt(req.params.id);
        console.log(idInstrumento);
        conexionMysql.getConnection((error, connecction)=>{
            if (error){
                console.error(error);
                resp.send(error);
                return;
            } else {
                const cadenaSql = "DELETE FROM instrumento WHERE id=?";
                connecction.query(cadenaSql, [idInstrumento], (err, resultado)=>{
                    if (err){
                        console.log(err);
                        resp.json({message : 'Error al eliminar un instrumento ' + err});
                    } else {
                        resp.json({message : 'Exito al eliminar un instrumento!!'});
                    }
                })
            }
        })
    })
}
