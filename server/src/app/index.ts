import App from './App';
import Database from './services/Database/Database';
import Config from './services/Config';

(async () => {
 const config = new Config();

 const mongoDB = Database.getInstance();
 await mongoDB.connect(config.DB_URL);

 const app = new App();
 app.start();
})();
