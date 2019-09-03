import { Router, Request, Response, response } from 'express';
import { MarcaRepositorio } from '../repositorio/marca.repositorio';

const MarcaRouter = Router();
const marcaRepositorio = new MarcaRepositorio();

MarcaRouter.post('/', (req: Request, res: Response) => {
    const marca = req.body;
    if (marca != null) {
        marcaRepositorio.crearMarca(marca).then((r) => {
            return res.json({
                ok: true,
                marca: r
            })
        }).catch(r => {
            return res.json({
                ok: false,
                mensaje: r
            })
        })
    }
})

MarcaRouter.get('/', async (req: Request, res: Response) => {
    const marcas = await marcaRepositorio.obtenerTodasLasMarcas();
    return res.json({
        ok: true,
        marcas
    })
})

MarcaRouter.delete('/', (req: Request, res: Response) => {
    const id = req.query.id;
    console.log(id);
    marcaRepositorio.eliminarMarcaPorId(id).then(r => {
        res.json({
            ok: true,
            marca: r
        })
    }).catch(r => {
        res.json({
            ok: false,
            error: r
        })
    })
})


export default MarcaRouter;