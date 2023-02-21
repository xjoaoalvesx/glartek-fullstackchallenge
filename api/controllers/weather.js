import express from 'express'
import axios from 'axios'

async function callExternalWeatherApi(cityID) {
    let key = '77ad82b11c16c6b4f67464e1228d52ad'
    let url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}`;
    let res = await axios.get(url);
    return res
}

export async function getCityIDWeather(req, res, next) {
    const externalResponse = await callExternalWeatherApi(req.params.id)
    res.json({data: externalResponse.data})
}