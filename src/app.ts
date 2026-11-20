import express from 'express';
import router from './routes/room.routes.ts';
import errorMiddleware from './middlewares/error.middleware.ts';
import routerUser from "./routes/user.routes.ts";
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.use('/api', router);

app.use('/api/users', routerUser);


app.use(errorMiddleware);





export default app;