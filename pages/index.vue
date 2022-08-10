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
        <template #products>
          <Cart
            v-for="(product, index) in filteredProducts"
            :key="index"
            :name="product.title"
            :brand="product.brand"
            :price="product.regular_price.value"
            :currency="product.regular_price.currency"
            :configurable="product.configurable_options"
            :path="product.image"
            :configurable-color="selectedColor"
            @add-to-basket="addToBasket"
            @select-color="(color) => selectColor(color, index)"
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
      selectedColor: ""
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
    selectColor(color, index) {
        this.PRODUCTS[index].image = `/images/conf/${color.label.toLowerCase()}.png`;
    },
    addToBasket(product) {
      this.quantity++;
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
