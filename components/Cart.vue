<template>
    <div class="cart">
        <div class="cart_photo">
            <nuxt-img
                class="cart_photo_image"
                alt="Product image"
                src="~/assets/images/1.png"
            />
        </div>
        <div class="cart_name">Product 1</div>
        <div class="cart_brand">Brand 1</div>
        <div class="cart_price">73.32 $</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="postcss">
    .cart {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 25%;
        height: 350px;
        margin: 5px;
        border-radius: 5px;
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0,0,0,0.22);
        &_photo {
            height: 70%;
            border: 1px solid black;
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
        &:hover {
            cursor: pointer;
        }
    }
</style>