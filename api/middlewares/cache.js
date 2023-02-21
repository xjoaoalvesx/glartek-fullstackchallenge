import NodeCache from 'node-cache'

const cache = new NodeCache()

export const cacheWeather = duration => (req, res, next) => {
    if(req.method !== 'GET') { 
        console.log('Cannot cache non-GET methods')
        return next()
    }

    const key = req.originalUrl
    const cached = cache.get(key)

    if(cached) {
        console.log('Cache hit for ', key)
        res.send(cached)
        return
    } else {
        console.log('Cache miss for ', key)
        res.originalSend = res.send
        res.send = body => {
            res.originalSend(body)
            cache.set(key, body, duration)
        }
        next()
    }

}