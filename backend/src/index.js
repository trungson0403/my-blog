import express from 'express'
import initWebRouter from './routers/web'
import bodyParser from 'body-parser'


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


initWebRouter(app)

const port = process.env.PORT || 6969


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})