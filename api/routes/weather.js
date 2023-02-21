import { Router } from 'express'
import { cacheWeather } from '../middlewares/cache.js'
import axios from 'axios'

const apiRouter = Router()

async function callExternalWeatherApi(cityID) {
    let key = '77ad82b11c16c6b4f67464e1228d52ad'
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}`;
    let res = await axios.get(url);
    return res
}

apiRouter.get('/:id', cacheWeather(1800), async (req, res, next) => {
    try {
        const { id } = req.params
        const weather = await callExternalWeatherApi(id)
        res.json({data: weather.data})
    } catch (err) {
        next(err)
    }
})

export default apiRouter
