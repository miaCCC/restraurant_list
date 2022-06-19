// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// routes setting
app.get('/',(req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

//route setting "show"
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  console.log(restaurant)
  res.render('show', { restaurants: restaurant})
})

// start and listen on the Express server
app.listen(port, () => {

})