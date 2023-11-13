import { Router } from 'express';
import { getWelcomeMessage } from '../Controllers/wellcome';
import { ImoveisController } from '../Controllers/ImoveisController';

export const routes = Router();

routes.get('/', getWelcomeMessage.index);

routes.get('/imoveis/getAll', ImoveisController.index);
routes.post('/imoveis/create', ImoveisController.store);
routes.get('/imoveis/getOne/:id', ImoveisController.show);
routes.put('/imoveis/update/:id', ImoveisController.update);
routes.delete('/imoveis/delete/:id', ImoveisController.update);
