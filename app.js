const { initialize } = require('unleash-client');
require('dotenv').config();
express = require('express');
app = express();
port = process.env.PORT || process.argv[2] || 3000;

// initialize unleash connectivity
initialize({
  url: process.env.UNLEASH_URL,
  appName: process.env.UNLEASH_APP,
  customHeaders: {
    Authorization: 'd5da856522fd4b29eaf37e59ea8be9db31cf36de9fd5697030af71c3a9adaa06',
  },  
});

app.get('/', (req, res) => res.send('Hello DevOps Bootcamp!!!!'));
app.use('/roll', require('./controllers/roll_controller'));

if (module.parent === null) {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
} else {
  // Export our app for testing purposes
  exports.app = app;
}
