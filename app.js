const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const logger = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
require('dotenv').config();

// Database Connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("server connected")
}).catch((err)=>{
    console.log(err);
})

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
   });

// static files
app.use(express.static('public'));

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3001;
// tell the app to listen on that particular port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// Our index route!
app.get('/', (req, res) => {
  res.send({
      message: 'hi'
  })
})

// import our different routes
// const searchRoutes = require('./routes/search_routes');
// app.use('/search', searchRoutes);
// const clothesRoutes = require('./routes/clothes_routes');
// app.use('/clothes', clothesRoutes);
// const authRoutes = require('./routes/auth_routes');
// app.use('/auth', authRoutes);
// const userRoutes = require('./routes/user_routes');
// app.use('/user', userRoutes);

// Error handler!
app.get('*', (req, res) => {
    res.status(404).send('not found!');
});