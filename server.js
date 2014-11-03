const port = process.env.PORT || '8000';
const host = process.env.HOST || '0.0.0.0';
const morgan = require('morgan')
const express = require('express');
const favicon = require('serve-favicon');

const app = express();

// serve favicon (before logger, so we don't see this spam)
app.use(favicon('./public/favicon.ico'));

// show us requests as they come in
app.use(morgan('dev'));

// serve json for this route
app.get('/me', function (req, res) {
  res.send({
    first: 'john',
    last: 'doe'
  });
});

// serve any files whose route matches a file in the public folder
app.use(express.static('./public'));

// catch-all.  if no previous SERVER routes matched serve index.html
app.use(function(req, res) {
  console.log('serving index.html!');
  res.sendFile(__dirname+'/public/index.html');
});

console.log('Server running on, %s:%d', host, port);

app.listen(port, host);
