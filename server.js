// import modules 

import express from 'express'
import { books } from "./data/book-data.js"

// create Express app

const app = express()

// Configure the app 

app.set('view engine', 'ejs')

// Mount routes 

/// GET - localhost:3000/
app.get('/', function(req, res) {
  res.redirect('/home')
})

/// GET - localhost:3000/home
app.get('/home', function(req, res) {
  res.render('home')
})

/// GET - localhost:3000/books
app.get('/books', function(req, res) {
  res.render('books/index', {
    books : books
  })
})

// Tell the app to listen on port 3000 

app.listen(3000, function() {
  console.log('Listening on port 3000');
})