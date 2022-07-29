<template>
  <div class="content">
    <Brands @select="selectBrand" @reset="resetBrands" class="content_filter" />
    <Container>
      <template v-slot:products>
        <Cart 
            v-for="(product, index) in filteredProducts"
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
import { mapGetters } from "vuex";
export default {
    name: "IndexPage",
      data() {
      return {
        sortedProducts: []
      }
    },
    async fetch() {
        await this.$store.dispatch("GET_PRODUCTS");
    },
    computed: {
      ...mapGetters([
        "PRODUCTS"  
      ]),
      filteredProducts() {
        if(!this.sortedProducts.length) {
          return this.PRODUCTS;
        }
        return this.sortedProducts;
      }
    },
    methods: {
      selectBrand(brand) {
        this.sortedProducts = [];
        this.sortedProducts = this.PRODUCTS.filter(item => item.brand === brand);
        return this.sortedProducts;
      },
      resetBrands(brand) {
        this.selectBrand(brand);
      }
    }
}

</script>

<style lang="postcss" scoped>
    .content {
      display: flex;
      flex-direction: row;
      border-radius: 5px;
      margin-top: 25px;
      height: auto;
      &_filter {
        margin-right: 25px;
      }
    }
</style>
