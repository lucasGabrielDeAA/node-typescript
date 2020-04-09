import express from 'express';

import routes from './routes';

const PORT = 3333;

const app = express();

app.use(routes);

app.listen(PORT);