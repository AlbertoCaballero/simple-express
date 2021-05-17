import express from 'express';
import { MainEntryPoin } from './main/main';

const app = express();
const port = 3000;

const main = new MainEntryPoin();

app.get('/', (req, res) => {
  res.send(main.getContent('Alberto'));
});

app.get('/something', (req, res) => {
  res.send(main.getContent(req.route.path));
});

app.get('/size', (req, res) => {
  res.send(main.getSizeOfPath(req.route.path));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
