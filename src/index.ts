import express from 'express';
import cors from 'cors';
import {getChatResponse} from './services/chat';

const app =  express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/chat', async (req, res) => {
    const results = await getChatResponse('What is python language?');
    res.send(results);
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
