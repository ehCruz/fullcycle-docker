const mysql = require('mysql2')
const express = require('express')
const app = express()

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'services'
}
const connection = mysql.createConnection(config)

app.get('/', async (req, res) => {
  await connection.promise().query('INSERT INTO people SET ?', {name : 'Eduardo Cruz'})
  resultSet = await connection.promise().query('SELECT * FROM people')
  var html = '<h1>Full Cycle Rocks!</h1>'
  html += '<ul>'
  resultSet[0].forEach(el => html += `<li>${el.name}</li>`)
  res.send(html)
})


app.listen(3000)