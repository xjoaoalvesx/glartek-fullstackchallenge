import { Router } from 'express'
import { getCityIDWeather } from '../controllers/weather.js'

const apiRouter = Router()

apiRouter.get('/:id', getCityIDWeather)

export default apiRouter
