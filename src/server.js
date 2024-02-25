/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');

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
