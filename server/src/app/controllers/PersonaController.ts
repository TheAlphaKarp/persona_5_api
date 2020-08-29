import {Request, Response} from 'express';

import IController from '../models/IController';
import {Persona} from "../models/database/IPersona";

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

 public async readOne(req: Request, res: Response): Promise<void> {

  if (Utils.isAlphaNumeric(req.params.id)) {
   const id = parseInt(req.params.id);

   try {
    const persona = await Persona.findById(id);

    if (!persona) {
     res.status(404).send({
      status: 'NOT_FOUND',
      error: 'Persona with the given id could not be found in the database.',
     });
    }

    res.status(200).send({
     status: 'OK',
     data: persona,
    });

   } catch (e) {
    res.status(405).send({
     status: 'ERROR',
     error: 'Error while trying to fetch data from database',
    });
   }
  }
 }

}
