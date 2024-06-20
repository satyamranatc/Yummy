import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON bodies

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.status(200).send({ success: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
