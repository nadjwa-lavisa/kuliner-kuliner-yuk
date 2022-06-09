<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container mb-3">
      <a class="navbar-brand">
        <font-awesome-icon :icon="['fas', 'utensils']" />Makan Cuy</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/" title="Home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product" title="product"
              >Makanan</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/keranjang" title="Keranjang"
              >Keranjang <font-awesome-icon :icon="['fas', 'shopping-bag']" />
              <span class="badge bg-success ms-2">
                {{
                  updateKeranjang
                    ? updateKeranjang.length
                    : jumlah_pesanan.length
                }}
              </span></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "Navbar",
  data() {
    return {
      jumlah_pesanan: [],
    };
  },
  props: ["updateKeranjang"],
  methods: {
    setJumlah(data) {
      this.jumlah_pesanan = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlah(response.data))
      .catch((error) => console.log("Gagal : ", error));
  },
};
</script>

<style>
.router-link-exact-active {
  font-weight: bold;
}
</style>