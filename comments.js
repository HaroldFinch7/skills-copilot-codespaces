// create a server
const express = require('express');
const app = express();
const port = 3000;  // port number to listen on (3000 is the default)

// import the comments module
const comments = require('./comments');

// use the comments module
app.use(comments);

// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});