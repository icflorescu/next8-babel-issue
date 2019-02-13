import { join } from 'path';
import express from 'express';
import next from 'next';

const app = next({
  dev: true,
  dir: join(__dirname, '../app')
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => handle(req, res));

  server.listen(3000, err => {
    if (err) throw err;
    console.log('Server listening on http://localhost:3000...');
  });
});
