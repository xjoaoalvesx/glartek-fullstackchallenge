import { createStore } from "vuex"
import axios from "axios"

export default createStore({
    state: {
        locations: [
            {Name:'Lisboa',  id: 2267056},
            {Name:'Leiria',  id: 2267094},
            {Name:'Coimbra', id: 2740636},
            {Name:'Porto',   id: 2735941},
            {Name:'Faro',    id: 2268337}
        ],
        weather: []
    },
    getters: {
        GET_WEATHER(state) {
            return state.weather
        }
    },
    mutations: {
        ADD_WEATHER(state, data) {
            state.weather.push(data)
        },
        CLEAR_WEATHER(state) {
            state.weather = [];
        }
    },
    actions: {
        cheackLocations({dispatch, commit}) {
            commit("CLEAR_WEATHER")
            dispatch("loadData")
        },
        async loadData({state, dispatch}) {
            for(let location of state.locations) {
                await dispatch("fetchLocationWeather", location.id);
            }
        },
        async fetchLocationWeather({commit}, location) {
            try {
                await axios
                        .get(
                            `http://localhost:3000/api/${location}`
                        )
                        .then( (res) => {
                            commit("ADD_WEATHER", res.data.data)
                        })
                        .catch( (err) => {
                            console.log('err',err)
                        })
            } catch (err) {
                console.log('err',err)
            }
        }
    },
    modules: {}
})