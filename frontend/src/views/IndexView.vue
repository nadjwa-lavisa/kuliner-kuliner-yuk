<template>
   <!-- Navbar menu  -->
  <Navbar />

  <div class="container">
    <!-- tampil hero landing -->
    <Hero />

    <!-- line or divider -->
    <hr />

    <div class="row mt-3">
      <div class="col-md-6">
        <h2>Best <strong>Food</strong></h2>
      </div>
      <div class="col-md-6">
        <div class="float-end">
          <router-link class="btn btn-success" to="/product" title="product"
            ><font-awesome-icon :icon="['far', 'eye']" /> Lihat Semua</router-link
          >
        </div>
      </div>
    </div>

    <!-- line or divider -->
    <hr />

    <!-- card kotak tampilan best food-->
    <div class="row justify-content-center">
      <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
        <CardProduct :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "Index",
  components: {
    Navbar,
    Hero,
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
      .get("http://localhost:3000/best-products")
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