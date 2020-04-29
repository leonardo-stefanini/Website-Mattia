const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

/*class Router {

  constructor(PORT){
    this.port = process.env.PORT || 3000
    this.app = express();
  }


  run_service() {

    this.app.engine('handlebars', exphand({
      defaultLayout: 'layout',
     }));
    this.app.set('view engine', 'handlebars');


    __dirname = path.dirname(module.parent.filename);
    this.app
          .use('/views', express.static(path.join(__dirname, 'views')))
          .use('/assets', express.static(path.join(__dirname, 'assets')));


    this.app
          .get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))
          .get('/account', (req, res) => res.sendFile(__dirname + '/views/log-in.html'))
          .get('/product-page', (req, res) => res.sendFile(__dirname + '/views/pagina-prodotto.html'))
          .get('/checkout', (req, res) => res.sendFile(__dirname + '/views/checkout.html')); 

    this.app.listen(this.port, () => console.log(`Listening to port ${this.port}, close the connection with Ctrl+C `));

  }

} */

module.exports = Router;



