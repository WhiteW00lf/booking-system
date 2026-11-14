import express from 'express';
import router from './routes/room.routes.ts';
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});
app.use('/api', router);





export default app;