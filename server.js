// import modules 

import express from 'express'

// create Express app

const app = express()

// Configure the app 

app.set('view engine', 'ejs')

// Mount routes 

/// GET - localhost:3000/home
app.get('/home', function(req, res) {
  res.render('home')
})

// Tell the app to listen on port 3000 

app.listen(3000, function() {
  console.log('Listening on port 3000');
})