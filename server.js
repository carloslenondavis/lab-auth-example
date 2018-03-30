import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import Models from './src/db/models';
import Middleware from './src/security/http.middleware';
import Routes from './src/endpoint';

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(Middleware);
app.use(Routes);

Models.sequelize.sync()
    .then(() => {
        startApp(7001);
    })
    .catch((e) => {
        throw new Error(e);
    });

function startApp(port) {
    app.listen(port, function(){
        console.log('|o| yupiii!! lab-auth-example listening on port', port);
    });
}