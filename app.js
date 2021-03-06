const express = require('express');
const exphbs = require('express-handlebars');
//const path = require('path');


let app = express();
let port = process.env.PORT || 3000;

// Set render engine
 
app.engine('.hbs', exphbs({
  defaultLayout: false,
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Set static assets folder

app.use('/assets', express.static(__dirname + '/assets'))

// Page routes
 
app.get('/', (req, res) => res.render('index'));
app.get('/product-page', (req, res) => res.render('pagina-prodotto', {

  quantity: Math.floor(Math.random() * 10)

}));
app.get('/checkout', (req, res) => res.render('checkout'));

 
app.listen(port, () => console.log(`Listening to port ${port}, close the connection with Ctrl+C `));
