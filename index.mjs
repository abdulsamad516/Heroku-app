import express from 'express'
const app = express()

const PORT = process.env.PORT;


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/id', (req, res) => {
  res.send('your id will appear here')
})
app.get('/number', (req, res) => {
  res.send('your number will appear here')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})