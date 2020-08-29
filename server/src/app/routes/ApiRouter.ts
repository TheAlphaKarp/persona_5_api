import express from 'express';
import IRouter from '../models/IRouter';
import PersonaRouter from './routers/PersonaRouter';


export default class ApiRouter {
 public router: express.Router;
 private personaRouter: PersonaRouter;

 public constructor() {
  this.router = express.Router();

  this.personaRouter = new PersonaRouter();

  this.registerRoutes();
 }

 private registerRoutes() {
  this.router.use('/persona', this.personaRouter.router);
 }
}
