<template>
  <div>
    <Navbar class="navbar_fixed" :quantity="quantity" />
    <div class="content">
      <Brands
        class="content_filter"
        @select="selectBrand"
        @reset="resetBrands"
      />
      <Container :selected-brand="selectedBrand">
        <template v-slot:products>
          <Cart
            v-for="(product, index) in filteredProducts"
            :key="index"
            :name="product.title"
            :brand="product.brand"
            :price="product.regular_price.value"
            :currency="product.regular_price.currency"
            :configurable="product.configurable_options"
            :path="product.image"
            @add-to-basket="addToBasket(product)"
          />
        </template>
      </Container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {
      sortedProducts: [],
      selectedBrand: "",
      quantity: null,
    };
  },
  async fetch() {
    await this.$store.dispatch("GET_PRODUCTS");
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
    filteredProducts() {
      if (!this.sortedProducts.length) {
        return this.PRODUCTS;
      }
      return this.sortedProducts;
    },
  },
  methods: {
    selectBrand(brand) {
      this.sortedProducts = [];
      this.selectedBrand = brand;
      this.sortedProducts = this.PRODUCTS.filter(
        (item) => item.brand === brand
      );
      return this.sortedProducts;
    },
    resetBrands(brand) {
      this.selectedBrand = brand;
      this.selectBrand(brand);
    },
    addToBasket(product) {
      this.quantity++;
      console.log(product);
    },
  },
};
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
