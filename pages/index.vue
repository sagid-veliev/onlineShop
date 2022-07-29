<template>
  <div class="content">
    <Brands @select="selectBrand" class="content_filter" />
    <Container>
      <template v-slot:products>
        <Cart 
            v-for="(product, index) in PRODUCTS"
            :key="index"
            :name="product.title"
            :brand="product.brand"
            :price="product.regular_price.value"
            :currency="product.regular_price.currency"
        />
      </template>
    </Container>
  </div>
</template>

<script>
import Cart from '../components/Cart.vue';
import {mapGetters} from "vuex";
export default {
    name: "IndexPage",
    components: { Cart },
    data() {
      return {
        products: this.PRODUCTS
      }
    },
    async fetch() {
        await this.$store.dispatch("GET_PRODUCTS");
    },
    computed: mapGetters([
        "PRODUCTS"
    ]),
    methods: {
        selectBrand(value) {
            console.log();
        }
    }
}

</script>

<style lang="postcss" scoped>
    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-radius: 5px;

      margin-top: 25px;
      height: auto;
      &_filter {
        margin-right: 25px;
      }
    }
</style>
