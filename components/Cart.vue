<template>
    <div class="cart">
        <div class="cart_photo">
            <nuxt-img
                class="cart_photo_image"
                alt="Product image"
                src="~/assets/images/1.png"
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
                <div class="cart_description_wrap_price">
                    <p>{{ `${fixedPrice} ${currency}` }}</p>
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
        path: String
    },
    computed: {
        fixedPrice() {
            return this.price.toFixed(2);
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
        border-radius: 5px 5px 5px 5px;
        margin: 1%;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0,0,0,0.22);
        &_photo {
            height: 100%;
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
            background-color: rgb(250, 250, 250);
            height: 30%;
            &_wrap {
                margin: 10px;
                &_name {
                    display: flex;
                    font-weight: 600;
                    min-height: 25%;
                    & p:hover {
                        color: rgb(235, 115, 3);
                    }
                }
                &_brand {
                    min-height: 25%;
                    opacity: 0.7;
                }
                &_price {
                    display:flex;
                    align-items: flex-end;
                    height: 50%;
                    font-weight: bold;
                    font-size: 22px;
                    color: rgb(235, 115, 3);
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