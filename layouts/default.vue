<template>
        <div class="wrapper">
            <Navbar class="wrapper_nav" />
            <Nuxt keep-alive/>
        </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Brands from '@/components/Brands.vue'
import Container from '@/components/Container.vue'

export default {
    components: {
    "Navbar": Navbar,
    "Brands": Brands,
    }
}
</script>

<style lang="postcss">
    .wrapper {
        display: flex;
        flex-direction: column;
        max-width: 1400px;
        margin: auto;
        &_nav {
            height: 70px;
        }
       
    }
</style>