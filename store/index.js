import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios';

Vue.use(Vuex);

export default () => new Vuex.Store({
    state: {
        brands: [],
        products: [],
        selectedProducts: []
    },
    mutations: {
        SET_BRANDS: (state, brands) => {
            state.brands = brands.data;
        },
        SET_PRODUCTS: (state, products) => {
            state.products = products.data;
        }
    },
    actions: {
        async GET_BRANDS({commit}) {
            commit("SET_BRANDS", await this.$axios.get("http://localhost:3000/brands.json"));
        },
        async GET_PRODUCTS({commit}) {
            commit("SET_PRODUCTS", await this.$axios.get("http://localhost:3000/products.json"));
        }
    },
    getters: {
        BRANDS(state) {
            return state.brands;
        },
        PRODUCTS(state) {
            return state.products
        }
    }
})
