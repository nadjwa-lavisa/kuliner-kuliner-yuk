<template>
  <!-- Navbar menu  -->
  <Navbar />
  <!-- check id masuk or not -->
  <div class="detail-food">
    <div class="container">
      <!-- <h1>Detail {{ $route.params.id }}</h1> -->
      <h2 class="h3">Detail Produk</h2>

      <!-- line or divider -->
      <hr />

      <!-- breadcrubms -->
      <nav aria-label="breadcrumb" class="mt-5">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/" class="text-dark line">Home</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/product" class="text-dark line"
              >produk</router-link
            >
          </li>
          <li class="breadcrumb-item fw-bold">Produk Order</li>
        </ol>
      </nav>

      <!-- info detail -->
      <div class="row">
        <div class="col-md-6">
          <img
            :src="'../assets/image/' + product.gambar"
            class="w-100 rounded-3 border border-1"
          />
        </div>
        <div class="col-md-6">
          <h3>
            <strong>{{ product.nama }}</strong>
          </h3>
          <h5 class="mb-3">
            Harga : <strong>Rp. {{ product.harga }} -,</strong>
          </h5>

          <!-- form pesan -->
          <form action="POST" v-on:submit.prevent>
            <!-- <input type="text" :value="product.harga" name="harga" hidden /> -->
            <div class="form-group mb-3">
              <label for="jumlah">Jumlah Pesanan:</label>
              <input
                type="number"
                name="jumlah"
                class="form-control"
                min="1"
                max="100"
                placeholder="Contoh: 1/2/3"
                v-model="pesan.jumlah_pesanan"
              />
            </div>

            <div class="form-group mb-3">
              <label for="keterangan">Keterangan Pesanan:</label>
              <textarea
                name="ket"
                id="ket"
                cols="2"
                class="form-control"
                placeholder="Contoh: pedas, nasi setengah"
                v-model="pesan.ket_pesanan"
              ></textarea>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-success" @click="pesanan">
                <font-awesome-icon :icon="['fas', 'shopping-cart']" /> Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "DetailFood",
  components:{
    Navbar,
  },
  data() {
    return {
      product: [],
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.product = data;
    },
    pesanan() {
      // console.log(this.pesan); //di check berhasil ketampung or not
      if (this.pesan.jumlah_pesanan) {
        this.pesan.products = this.product;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            //nontification sukses
            this.$toast.success("Sukses Masuk Keranjang.", {
              // optional options Object
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });

            //update notification reload with router
            this.$router.push({ path: "/keranjang" });

            //if using this code nontification not showing
            // this.$router.go({
            //   path: "/keranjang",
            //   force: true,
            // });
          })
          .catch((error) => console.log("Gagal", error));
      } else {
        //nontification failed to submit
        this.$toast.error("Jumlah Pesanan harus diisi.", {
          // optional options Object
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.$route.params.id)
      //if success
      .then((response) => this.setProduct(response.data))
      //if error
      .catch((error) => console.log("gagal : ", error));
  },
};
</script>

<style>
.line {
  text-decoration: none;
}
</style>