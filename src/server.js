import express from 'express';
import bodyParser from 'body-parser';
import routes from './services/base_routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/', routes);

app.listen(PORT, () => console.log(`Server Running on ${ PORT }`));