import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios';

Vue.use(Vuex);

export default () => new Vuex.Store({
    state: {
        brands: []
    },
    mutations: {
        SET_BRANDS: (state, brands) => {
            state.brands = brands.data;
        }
    },
    actions: {
        async GET_BRANDS({commit}) {
            commit("SET_BRANDS", await this.$axios.get("http://localhost:3000/brands.json"));
        }
    },
    getters: {
        BRANDS(state) {
            return state.brands;
        }
    }
})
