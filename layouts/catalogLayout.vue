<template>
        <div class="wrapper">
            <Navbar class="wrapper_nav" />
            <div class="wrapper_content">
                <Brands class="wrapper_content_brand" />
                <Nuxt class="wrapper_content_items"/>
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

<style lang="postcss" scoped>
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
            margin-top: 25px;
            height: auto;
            &_brand {
                flex-basis: 20%;
            }
        }
    }
</style>