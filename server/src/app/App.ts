import express, { Application } from 'express';
import {PersonaRouter} from './routes';
import ApiRouter from './routes/ApiRouter';


export default class App {
 private readonly app: Application;
 private readonly api: ApiRouter;

 get App() {
  return this.app;
 }

 public constructor() {
  this.app = express()
  this.api = new ApiRouter();
 }

 public start() {
  this.app.listen(3000);

  this.init();
 }

 // here we split up the incoming route and redirect it to the correct middleware
 public init() {
  this.App.use('/api', this.api.router);
 }
}
