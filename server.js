const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', (req, res) => {
  res.end('go to /api/whoami');
});

app.get('/api/whoami', (req, res) => {
  res.json({
    ip: req.ip,
    language: req.get('Accept-Language').split(',')[0],
    soft: req.headers['user-agent'].match(/\((.*?)\)/)[1]
  })
  res.end();
});

app.listen(app.get('port'));
