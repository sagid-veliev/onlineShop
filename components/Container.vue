<template>
    <div class="container_carts">
        <div class="container_carts_header">
            <h1>Catalog</h1>
        </div>
        <div class="container_carts_items">
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </div>
    </div>
</template>
<script>
import Cart from './Cart.vue';
export default {
    components: { Cart }
}
</script>
<style lang="postcss" scoped>
    .container_carts {
        display: flex;
        flex-direction: column;
        
        flex-basis: 80%;
        height: auto;
        &_header {
            margin-bottom: 10px;
        }
        &_items {
            display: flex;
            flex-direction: row;
        }
    }
</style>