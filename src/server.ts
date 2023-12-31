import express from 'express';
import { routes } from './routes';
import cors from 'cors';
import { env } from './env';
import { connect } from './database'; 

const app = express();
connect();
const port = env.PORT;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
