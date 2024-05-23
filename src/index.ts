import express from 'express';
import cors from 'cors';
import {getChatResponse} from './services/chat';
import {serach} from './services/search';

const app =  express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.post('/chat', async (req, res) => {
    const message = req.body.message;
    const response = await getChatResponse(message);
    res.send(response);
});

app.post('/search', async (req, res) => {
    const query = req.body.query;

    if (!query) return res.status(200);

    const response = await serach(query);
    res.send(response);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
