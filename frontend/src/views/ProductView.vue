<template>
   <!-- Navbar menu  -->
  <Navbar />

  <div class="container">
    <div class="row mb-3">
      <div class="col">
        <h2 class="h4">Daftar <strong>Makanan</strong></h2>
      </div>
    </div>

    <!-- pencarian produk -->
    <div class="row">
      <div class="col-md-6">
        <!-- empety content -->
      </div>
      <div class="col-md-6">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            id="search"
            name="search"
            placeholder="Cari makanan kesukaan kamu :)"
            v-model="search"
            @keyup="searchFood"
          />
          <span class="input-group-text"
            ><font-awesome-icon :icon="['fas', 'search']"
          /></span>
        </div>
      </div>
    </div>

    <!-- tampilan kotak produk -->
    <div class="row">
      <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
        <CardProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Product",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      search: "",
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchFood() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        //if success
        .then((response) => this.setProducts(response.data))
        //if error
        .catch((error) => console.log("gagal : ", error));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      //if success
      .then((response) => this.setProducts(response.data))
      //if error
      .catch((error) => console.log("gagal : ", error));
  },
};
</script>

<style>
</style>