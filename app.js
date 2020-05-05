const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');


let app = express();
let port = process.env.PORT || 3000;
 
app.engine('.hbs', exphbs({
  defaultLayout: false,
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


app.use('/assets', express.static(__dirname + '/assets'))
 
app.get('/', (req, res) => res.render('index'));
app.get('/product-page', (req, res) => res.render('pagina-prodotto', {

  layout: false, 
  quantity: Math.floor(Math.random() * 10)

}));
app.get('/checkout', (req, res) => res.render('checkout', {layout: false}));

 
app.listen(port, () => console.log(`Listening to port ${port}, close the connection with Ctrl+C `));
