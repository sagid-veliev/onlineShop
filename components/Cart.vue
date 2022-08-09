<template>
    <div class="cart">
        <div class="cart_photo">
            <nuxt-img
                class="cart_photo_image"
                alt="Product image"
                :src="`~/assets${pathMutating}`"
                loading="lazy"
            />
        </div>
        <div class="cart_description">
            <div class="cart_description_wrap">
                <div class="cart_description_wrap_name">
                    <p>{{ name }}</p>
                </div>
                <div class="cart_description_wrap_brand">
                    <p>{{ brand }}</p>
                </div>
                <template v-if="configurable">
                    <div class="cart_description_wrap_color">
                        <div class="cart_description_wrap_color_colors">                     
                            <button @click="selectColor(color.label.toLowerCase())" v-for="(color, index) in availableColors.values" :key="index" class="cart_description_wrap_color_colors_single-color">
                                <nuxt-img
                                    class="cart_description_wrap_color_colors_single-color_image"
                                    :alt="`${color.label}`"
                                    :src="`~/assets/images/conf/${color.label.toLowerCase()}.png`"
                                    loading="lazy"
                                />
                            </button>
                        </div>
                    </div>
                    <div class="cart_description_wrap_size">
                        <div class="cart_description_wrap_size_sizes">
                            <button @click="selectSize($event)" v-for="(size, index) in availableSizes.values" :key="index"  class="cart_description_wrap_size_sizes_single-size">
                                <div class="cart_description_wrap_size_sizes_single-size_size">
                                    {{size.label}}
                                </div>
                            </button>
                        </div>
                    </div>
                    
                </template>
                <div class="cart_description_wrap_price">
                    <p>{{ `${fixedPrice} ${currency}` }}</p>
                    <button @click="addToBasket" class="cart_description_wrap_price_btn">Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        name: String,
        brand: String,
        price: Number,
        currency: String,
        path: String,
        configurable: Array
    },
    data() {
        return {
            pathMutating: this.path
        }
    },
    computed: {
        fixedPrice() {
            return this.price.toFixed(2);
        },
        availableColors() {
            return this.configurable[0];
        },
        availableSizes() {
            return this.configurable[1];
        }
    },
    methods: {
        addToBasket() {
            this.$emit("add-to-basket");
        },
        selectColor(color) {
            this.pathMutating = `/images/conf/${color}.png`;
        },
        selectSize(event) {
            if (event.target.tagName === 'DIV') {
                var el = document.querySelector('.cart_description_wrap_size_sizes_single-size_active')
                el && el.classList.remove('cart_description_wrap_size_sizes_single-size_active')
                event.target.classList.add('cart_description_wrap_size_sizes_single-size_active')
            }
        }
    }
}
</script>
<style lang="postcss">
    .cart {
        display: flex;
        flex-direction: column;
        width: 23%;
        min-height: 350px;
        overflow: hidden;
        margin: 1%;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0,0,0,0.22);
        border-radius: 5px;
        &_photo {
            height: 250px;
            position: relative;
            overflow: hidden;
            &_image {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                max-width: 100%;
                max-height: 100%;
                margin: auto;
            }
        }
        &_description {
            flex-grow: 1;
            background-color: rgb(248, 248, 248);
            border-radius: 0 0 5px 5px;
            padding: 10px;
            &_wrap {
                display: flex;
                flex-direction: column;
                height: 100%;
                &_name {
                    font-weight: 700;
                    & p:hover {
                        color: rgb(235, 115, 3);
                    }
                }
                &_brand {
                    opacity: 0.7;
                }
                &_color {
                    box-sizing: border-box;
                    &_colors {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        flex-basis: 100%;
                        &_single-color {
                            background-color: rgba(235, 235, 235);
                            position: relative;
                            flex-basis: 19%;
                            border-radius: 5px;
                            height: 45px;
                            overflow: hidden;
                            margin: 1px;
                            border: 2px solid rgba(235, 115, 3, 0);
                            &:hover {
                                border: 2px solid rgba(235, 115, 3);
                                cursor: pointer;
                            }
                            &_image {
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                max-width: 100%;
                                max-height: 100%;
                                margin: auto;
                            }
                        }
                    }
                }
                &_size {
                    box-sizing: border-box;
                    &_sizes {
                        flex-basis: 100%;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        &_single-size {
                            background-color: rgba(235, 235, 235);
                            position: relative;
                            flex-basis: 19%;
                            border-radius: 5px;
                            height: 30px;
                            overflow: hidden;
                            margin: 1px;
                            border: 2px solid rgba(235, 115, 3, 0);
                            &_active {
                                border: 2px solid rgb(235, 115, 3);
                            }
                            &:hover {
                                border: 2px solid rgb(235, 115, 3);
                                cursor: pointer;
                            }
                            &_size {
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                position: absolute;
                                top: 0;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                max-width: 100%;
                                max-height: 100%;
                                margin: auto;
                            }
                        }
                    }
                }
                &_price {
                    flex-grow: 1;
                    display:flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    font-weight: bold;
                    font-size: 22px;
                    color: rgb(235, 115, 3);
                    &_btn {
                        border: rgb(235, 115, 3);
                        background-color: rgb(248, 129, 18);
                        font-size: 16px;
                        border-radius: 5px;
                        padding: 5px 10px;
                        color: white;
                        &:hover {
                            background-color: rgb(235, 115, 3);
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1280px) { 
        .cart {
            width: 31.3%;
        }
    }

    @media screen and (max-width: 1024px) { 
        .cart {
            width: 48%;
        }
    }

     @media screen and (max-width: 640px) { 
        .cart {
            width: 80%;
            justify-content: center;
        }
    }
</style>