import dotenv, {DotenvConfigOutput} from 'dotenv';

export default class Config {
 private data: DotenvConfigOutput | null = null;
 private mongoDBConnection: string = '';

 public constructor() {
  this.data = dotenv.config();

  if (this.data.error) {
   console.log('Error while parsing dotenv');
  } else {
   this.generateEnvironmentObjects();
  }
 }

 private generateEnvironmentObjects(): void {
  console.log('mongo url', process.env.MONGO_URL);
  this.mongoDBConnection = process.env.MONGO_URL!;
 }

 get DB_URL() {
  return this.mongoDBConnection;
 }
}
