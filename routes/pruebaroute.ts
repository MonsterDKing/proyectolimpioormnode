import { Request, Response, Router } from 'express'
import { ClienteRepositorio } from '../repositorio/clienterepositorio';
import { Cliente } from '../entidades/cliente';

const ruta = Router();
const clienteRepo = new ClienteRepositorio()


ruta.get('/', (req: Request, res: Response) => {
    clienteRepo.obtenerListaClientes().then((resultado) => { res.send(resultado) })
})


ruta.post('/', (req: Request, res: Response) => {
    clienteRepo.crearCliente(req.body).then((resp) => {
        res.json({
            ok: true,
            resp
        })
    }).catch(err => {
        res.json({
            ok: false,
            err
        })
    })
});

ruta.post('/almbum')


export default ruta;