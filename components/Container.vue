<template>
    <div class="container_carts">
        <div class="container_carts_header">
            <h2 class="container_carts_header_title">Catalog</h2>
            <div v-if="selectedBrand" class="container_carts_header_brand">{{selectedBrand}}</div>
        </div>
        <div class="container_carts_items">
            <slot name="products"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            selectedBrand: String
        }
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
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 180px;
            margin: 15px;
            &_brand {
                background-color: rgb(248, 129, 18);
                padding: 5px;
                color: white;
                border-radius: 30px;
                min-width: 60px;
                text-align: center;
            }
        }
        &_items {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
</style>