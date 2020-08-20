import mongoose from 'mongoose';

export default class Database {
 public db: mongoose.Connection | null;
 private static INSTANCE: Database;

 get DB() {
  return this.db;
 }

 public constructor() {
  this.db = null;
 }

 public static getInstance() {
  if (!Database.INSTANCE) {
   Database.INSTANCE = new Database();
  }

  return Database.INSTANCE;
 }

 public connect(url: string): Promise<boolean> {
  return new Promise<boolean>(async (resolve, reject) => {
   mongoose
    .connect(url, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    })
    .then(data => {
     this.db = data.connection;

     resolve(true);
    })
    .catch(error => {

     reject(error);
    })
  });
 }

 public disconnect(): Promise<void> {
  return new Promise<void>(((resolve, reject) => {
      this.db!
       .close(true)
       .then(data => {
        resolve(data);
       })
       .catch(error => {
        reject(error);
       })
  }));
 }
}
