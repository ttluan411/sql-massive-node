const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const massive = require('massive');
const product_handler = require('./product_handler')
const app = express();
const port = 3000;
app.use(bodyParser.json())

const connectionString = "postgres://wkaqmfcigcwjeu:d89dc439e24732fe3ce16243c972b9c164778a3cf04bf843d77c5a1bc830f006@ec2-107-22-251-55.compute-1.amazonaws.com:5432/d3v9udl7h320ar?ssl=true";
massive(connectionString).then(dbInstance => {
    app.set('db', dbInstance)
})

app.post( '/api/product', product_handler.create );
app.get( '/api/products', product_handler.getAll );
app.get( '/api/product/:id', product_handler.getOne );
app.put( '/api/product/:id', product_handler.update );
app.delete( '/api/product/:id', product_handler.delete );



app.use(cors());
app.listen(port, ()  => {
    console.log('listen on port', port)
})