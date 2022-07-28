<template>
    <div class="container_carts">
        <div class="container_carts_header">
            <h1>Catalog</h1>
        </div>
        <div class="container_carts_items">
            <slot class="oleg"></slot>
            <Cart 
                v-for="(product, index) in PRODUCTS"
                :key="index"
                :name="product.title"
                :brand="product.brand"
                :price="product.regular_price.value"
                :currency="product.regular_price.currency"
            />
        </div>
    </div>
</template>
<script>
import Cart from './Cart.vue';
import {mapGetters} from "vuex";
export default {
    components: { Cart },
    async fetch() {
        await this.$store.dispatch("GET_PRODUCTS");
    },
    computed: mapGetters([
        "PRODUCTS"
    ])
}
</script>
<style lang="postcss" scoped>
    .container_carts {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        margin: -1%;
        flex-basis: 80%;
        height: auto;
        &_header {
           margin: 15px;
        }
        &_items {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
</style>