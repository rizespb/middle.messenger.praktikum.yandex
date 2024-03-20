/* eslint-disable no-underscore-dangle */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const APP_SUCCESS_START_MESSAGE = `Server is running on port ${PORT}`;

const app = express();

app.use(
  express.static(path.join(__dirname, '..', 'dist'), {
    extensions: ['html'],
  })
);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(APP_SUCCESS_START_MESSAGE);
});
