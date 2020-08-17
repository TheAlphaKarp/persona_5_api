import {Request, Response} from 'express';

import IController from '../models/IController';

export default class PersonaController implements IController {

 public create(req: Request, res: Response): any {
  const id = req.params.id;

  res.send(id);
 }

 public delete(): any {
 }

 public read(req: Request, res: Response): any {
  res.send('hey ari')
 }

 public update(): any {
 }

}
