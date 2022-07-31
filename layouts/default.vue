<template>
        <div class="wrapper">
            <Nuxt keep-alive/>
        </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Brands from '@/components/Brands.vue';
import Container from '@/components/Container.vue';
import Cart from '@/components/Cart.vue';

export default {
    components: {
        "Navbar": Navbar,
        "Brands": Brands,
        "Container": Container,
        "Cart": Cart
    }
}
</script>

<style lang="postcss">
    .wrapper {
        display: flex;
        flex-direction: column;
        max-width: 1400px;
        &_nav {
            height: 70px;
        }
    }
</style>