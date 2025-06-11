const express = require('express');

const app = express();
const port = 8080;

const fruits = require('./data/fruits.js');
const superheros = require('./data/superheros.js');
const users = require('./data/users');
const { name } = require('ejs');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/home', (req, res) => {
    res.redirect('/');
});

app.get('/fruits', (req, res) => {
    let avgPrice = Math.round(fruits.reduce((sum, fruit) => sum + fruit.pricePerKg, 0) / fruits.length * 100) / 100;
    
    res.render('fruits', { fruits, avgPrice });
});

app.get('/superheros', (req, res) => {
    const teamCounts = {};
    superheros.forEach(hero => {
        teamCounts[hero.team] = (teamCounts[hero.team] || 0) + 1;
    });
    res.render('superheros', { superheros, teamCounts });
});

app.get('/users', (req, res) => {
    let roles = []
    users.forEach(user => {
        if (user.role && !roles.some(r => r.name === user.role)) {
            roles.push({
                name: user.role,
                count: users.filter(u => u.role === user.role).length
            });
        }
    });
    res.render('users', { users, roles });
});

