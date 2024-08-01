import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import knex from './db/db';
//import knex from '../db/knex';
import authorRoutes from './routes/authorRoutes';
import bookRoutes from './routes/bookRoutes';
import errorHandler from './utils/errorHandler';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use('/api', authorRoutes);
app.use('/api', bookRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
