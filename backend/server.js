import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({"Data":[1,2,3,4,5,6,7,8,10]})
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
