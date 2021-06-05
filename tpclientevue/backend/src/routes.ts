import { instrumentosControlador } from './controlador/instrumentosControlador';
import {Router} from 'express';

const router = Router();

router.get('/instrumentos', instrumentosControlador.getInstrumentos);
router.get('/instrumentos/:id', instrumentosControlador.getInstrumento);
router.post('/insertar', instrumentosControlador.crearInstrumento);
router.put('/update/:id', instrumentosControlador.actualizarInstrumento);
router.delete('/delete/:id', instrumentosControlador.deleteInstrumento);


export default router;