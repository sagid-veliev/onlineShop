<template>
    <div class="container_carts">
        <div class="container_carts_header">
            <h1>Catalog</h1>
        </div>
        <div class="container_carts_items">
            <slot name="products"></slot>
        </div>
    </div>
</template>
<script>

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