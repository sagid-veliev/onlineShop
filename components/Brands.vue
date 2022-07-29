<template>
    <div class="container_brand">
        <!-- дополнительная вложенность под  IE (без неё ломаются стили фильтра брендов) -->
        <div>
            <div class="container_brand_header">
                <h3>All Brands</h3>
            </div>
            <div class="container_brand_items">
                <div @click="selectBrand(brand)" v-for="(brand, index) in BRANDS" :key="index" class="container_brand_items__item">{{brand.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    async fetch() {
        await this.$store.dispatch("GET_BRANDS");
    },
    computed: mapGetters([
        "BRANDS"
    ]),
    methods: {
        selectBrand(brand) {
            this.$emit('select', brand);
        }
    }
}
</script>

<style lang="postcss" scoped>
    $flex: flex;
    $flex-column: column;
    .container_brand {
        display: $flex;
        flex-direction: $flex-column;
        border-radius: 5px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0,0,0,0.22);
        flex-basis: 20%;
        height: 100%;
        &_header {
            margin: 15px;
        }
        &_items {
            display: $flex;
            flex-direction: $flex-column;
            flex-basis: 100%;
            margin: 15px;
            &__item {
                display: $flex;
                padding: 10px 0;
                font-size: 18px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.25);
                &:hover {
                    background-color: rgb(250, 250, 250);
                    color: rgb(248, 129, 18);
                    cursor: pointer;
                }
            }
        }
        &_selected {
            background-color: rgb(250, 250, 250) !important;
            color: rgb(248, 129, 18) !important;
            cursor: pointer !important;
        }
    }
</style>