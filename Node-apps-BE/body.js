const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('<div class="row"><h1>This is the FrontEnd Lecture header</h1></div><div class="row">This is the body Content</div>')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})