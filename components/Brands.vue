<template>
    <div class="container_brand">
        <!-- дополнительная вложенность под  IE (без неё ломаются стили фильтра брендов) -->
        <div>
            <div class="container_brand_header">
                <h3>All Brands</h3>
            </div>
            <div class="container_brand_items">
                <button @click="selectBrand(brand.title)" v-for="(brand, index) in BRANDS" :key="index" class="container_brand_items__item">{{brand.title}}</button>
            </div>
            <div class="container_brand_button">
                <button @click="resetBrand(null)" class="container_brand_button_btn">Reset</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            selectedBrand: ''
        }
    },
    async fetch() {
        await this.$store.dispatch("GET_BRANDS");
    },
    computed: mapGetters([
        "BRANDS"
    ]),
    methods: {
        selectBrand(brand) {
            this.selectedBrand = brand;
            this.$emit('select', brand);
        },
        resetBrand(brand) {
            this.$emit('reset', brand); 
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
                border: none;
                background-color: white;
                font-size: 18px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.25);
                &:hover {
                    background-color: rgb(250, 250, 250);
                    color: rgb(248, 129, 18);
                    cursor: pointer;
                }
            }
        }
        &_button {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 35px;
            margin: 15px;
            &_btn {
                border: 1px solid rgba(0, 0, 0, 0.25);
                background-color: white;
                font-size: 22px;
                border-radius: 5px;
                padding: 10px;
                transition: 0.2s;
                &:hover {
                    background-color: rgb(235, 115, 3);
                    border: 1px solid rgba(0, 0, 0, 0);
                    color: white;
                    cursor: pointer;
                }
            }
        }
    }

    /* @media screen and (max-width: 600px) { 
        .container_brand  {
            display: none;
        }
    } */
</style>