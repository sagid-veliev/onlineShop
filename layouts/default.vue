<template>
        <div class="wrapper">
            <Navbar class="wrapper_nav" />
            <div class="wrapper_content">
                <Nuxt keep-alive/>
            </div>
        </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Brands from '@/components/Brands.vue'

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
        max-width: 1300px;
        margin: auto;
        &_nav {
            height: 70px;
        }
        &_content {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin-top: 25px;
            height: auto;
        }  
    }
</style>