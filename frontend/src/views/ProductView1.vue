<template>
  <!-- <Navbar/> -->
  <div class="container">
    <div class="row mb-3">
      <div class="col">
        <h2 class="h4">Daftar <strong>Makanan</strong></h2>
      </div>
    </div>

    <!-- card kotak tampilan best food-->
    <div class="row">
      <div class="col-md-4 mt-2" v-for="product in products" :key="product.id">
        <CardProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Product",
  components: {
    CardProduct,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    // data = diambil dari db.json dengan axios
    setProduct(data) {
      this.products = data;
    },
  },
  // mounted
  mounted() {
    // Make a request for a user with a given ID
    axios
      .get("http://localhost:3000/products")
      .then((response) =>
        // handle success
        // console.log("Berhasil :",response);
        this.setProduct(response.data)
      )
      .catch((error) =>
        // handle error
        console.log("Gagal : ", error)
      );
  },
};
</script>

<style>
</style>