import {Request, Response} from 'express';

export default interface IController {
 read(req: Request, res: Response): any;
 delete(req: Request, res: Response): any;
 update(req: Request, res: Response): any;
 create(req: Request, res: Response): any;
}
