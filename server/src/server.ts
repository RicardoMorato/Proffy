import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    App: 'Proffy API',
    Status: 'Development',
    Author: 'Ricardo Morato <https://github.com/RicardoMorato>',
  });
});

app.listen(process.env.PORT || 3333);
