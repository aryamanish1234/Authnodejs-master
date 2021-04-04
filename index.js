const express = require('express')
const app = express();
const routes = require('./route.js');
const path = require('path')

const passport = require('passport');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(passport.initialize());

require('./authenticate');

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/success');
  //res.end('/success');
})

app.get('/',routes);

app.post('/register',routes);

app.get('/login',routes)

app.post('/login',routes);
app.get('/success',routes);

app.get('/logout',routes)
app.post('/addmsg',routes) 
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log("Server started at ", port));