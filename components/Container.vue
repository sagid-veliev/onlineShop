<template>
    <div class="container_carts">
        <div class="container_carts_header">
            <h1>Catalog</h1>
        </div>
        <div class="container_carts_items">
            <Cart 
                v-for="(item, index) in PRODUCTS"
                :key="index"
                :name="item.title"
                :brand="`Brand ${item.brand}`"
                :price="item.regular_price.value"
                :currency="item.regular_price.currency"
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