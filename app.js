// === Packages ===
const express = require('express'),
    passport = require('passport'),
    LocalStrategy = require('passport-local');
    
// App Config
const app = express();
app.set('view engine', 'html');
app.use(express.static(__dirname + '/build'));
app.set('views', __dirname + '/build');

// === Routes ===
// const api = routes.js
// app.use('/api', api);
app.get('*', (req, res) => {
    res.render('index.html');
});


// === Run Server ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
});
