import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import apiRouter  from './routes/weather.js'

const app  = express()
const port = process.env.PORT || 3000


app.use(cors({
    origin: 'http://localhost:8080'
}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRouter)


app.get("/", (req, res) => {
    res.send('welcome to the api')
})

app.listen(port, () => { console.log(`Server running on port ${port}`) })