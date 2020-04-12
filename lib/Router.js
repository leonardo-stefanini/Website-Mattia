const express = require('express');
const path = require('path');

class Router {

  constructor(PORT){
    this.PORT = PORT;
    this.app = express();
  }

// Temporary paths, might change in future

  run_service() {
    __dirname = path.dirname(module.parent.filename);   //get parent folder of lib
    this.app
          .use('/views', express.static(path.join(__dirname, 'views')))
          .use('/assets', express.static(path.join(__dirname, 'assets')));

// Main paths of the page

    this.app
          .get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
          .get('/account', (req, res) => res.sendFile(__dirname + '/views/log-in.html'))
          .get('/product-page', (req, res) => res.sendFile(__dirname + '/views/pagina-prodotto.html'))
          .get('/checkout', (req, res) => res.sendFile(__dirname + '/views/checkout.html'));

    this.app.listen(this.PORT, () => console.log(`Listening to port ${this.PORT}, close the connection with Ctrl+C `));

  }

}

module.exports = Router;



