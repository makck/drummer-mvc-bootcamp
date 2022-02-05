import db from './models/index.mjs';
import initDrummersController from './controllers/drummers.mjs';

export default function bindRoutes(app) {
  const drummersController = initDrummersController(db);

  app.get('/', drummersController.index);
  app.get('/drummer/:id', drummersController.index);
  app.post('/reservation/:drummer_id', drummersController.index);
  app.get('/reservation/:drummer_id', drummersController.index);
}
