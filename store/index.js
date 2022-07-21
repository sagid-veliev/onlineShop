import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default () => new Vuex.Store({
    state: {
        brands: []
    },
    // mutations: {
    //     SET_BRANDS: (state, brands) => {
    //         state.brands = brands;
    //     }
    // },
    actions: {
        GET_BRANDS({state}) {
            return axios.get('/brands.json')
            .then(response => {
                // commit('SET_BRANDS', response.data);
                state.brands = response.data;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        }
    },
    getters: {
        BRANDS(state) {
            return state.brands;
        }
    }
})
