const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));
app.use(express.static(__dirname + '/views/public/styles.css'));
const items = [
  'bob',
  'Item 2',
  'Item 3',
  'Item 4'
];

app.get('/', (req, res) => {
  res.render('index', { items });
});

app.post('/', (req, res) => {
  const newItem = req.body.newItem;
  items.push(newItem);
  res.redirect('/');
});

app.get('/success', function(req, res) {
  res.render('success');
  });
  

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
