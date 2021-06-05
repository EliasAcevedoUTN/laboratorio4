import {createPool} from 'mysql';

export const conexionMysql = createPool ({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'instrumentosdb',
    connectionLimit: 100 //100 es el valor por defecto
})