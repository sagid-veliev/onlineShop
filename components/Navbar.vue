<template>
        <div class="navbar">
            <div class="navbar_wrap">
                <div class="navbar_logo">
                    <nuxt-img
                        alt="Astrio"
                        src="~/assets/images/logo.png"
                        sizes="md:18vw lg:15vw xl:12vw xxl:8vw"
                    />
                </div>
                <div class="navbar_basket">
                    <div v-if="quantity" class="navbar_basket_quantity">{{quantity}}</div>
                    <nuxt-img
                        alt="Basket"
                        src="~/assets/images/basket.png"
                        sizes="md:7vw lg:4vw xl:3vw xxl:2vw"
                    />
                </div>
            </div>    
        </div>
</template>
<script>
export default {
    props: {
        quantity: Number
    }
}
</script>

<style lang="postcss" scoped>
    .navbar {
        height: 70px;
        display: flex;
        width: 100%;
        border-radius: 5px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        &_wrap {
            display: flex;
            width: 95%;
            height: 70px;
            justify-content: space-between;
            align-items: center;
            margin: auto;
        }
        &_basket {
            display: flex;
            align-items: center;
            justify-content: center;
            & img {
                margin-left: 5px;
                opacity: 0.7;
                &:hover {
                    opacity: 1;
                } 
            }
            &:hover {
                cursor: pointer;
            } 
            &_quantity {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgb(235, 118, 3);
                color: white;
                border-radius: 50%;
                min-width: 25px;
                height: 25px;
            }
        }
    }
</style>