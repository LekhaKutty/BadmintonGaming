const express = require('express');
const session = require('express-session');
const bodyParser = require("body-parser"); 
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

app.set('views',path.join(__dirname,'public/views'));
app.set('view engine','ejs');

mongoose.connect('mongodb://localhost/Badmintondata',{useNewUrlParser:true});
mongoose.Promise = global.Promise;

app.use(express.urlencoded({ extended: false }));

app.use(session({
    name:"cookiename",
    resave:false,
    saveUninitialized:false,
    rolling:true,
    secret:"jkdasjdad$#%$saf",
    cookie:{
        secure:false,
        maxAge:100000*15,
        sameSite:true,
    },
    store: new MongoStore({ url:'mongodb://localhost:27017/Badmintondata'})
}))

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/',require("./routes/index.js"));
app.use('/signup',require("./routes/signup.js"));
app.use('/login',require("./routes/login.js"));
app.use('/logout',require("./routes/logout.js"));
app.use('/players',require("./routes/players.js"));
app.use('/results',require("./routes/results.js"));
app.use(bodyParser.json());
app.use('/games',require("./routes/games.js"));
app.use('/news',require("./routes/news.js"));
app.use('/messages',require("./routes/messages.js"));
app.use('/post_message',require("./routes/post_message.js"));
app.use('/deletegame',require("./routes/reject_message.js"));
app.use('/updateResult',require("./routes/updateResult.js"));

const server = app.listen(5000, () => {
    console.log(`Express is running on port ${server.address().port}`);
})
module.exports = app;