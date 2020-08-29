import express, {Request, Response} from 'express';
import IRouter from '../../models/IRouter';
import PersonaController from '../../controllers/PersonaController';

export default class PersonaRouter implements IRouter {
 public router: express.Router;
 private controller: PersonaController;

 public constructor() {
  this.router = express.Router();
  this.controller = new PersonaController();

  this.RegisterRoutes();
 }

 public RegisterRoutes(): void {
  this.router.get('/arcana=:id', this.controller.create);

  // needs to be last
  this.router.get('/:id', this.controller.read);
 }
}
