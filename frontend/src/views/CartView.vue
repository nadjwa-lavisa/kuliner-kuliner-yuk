<template>
  <!-- Navbar menu  -->
  <Navbar :updateKeranjang="keranjangs" />

  <div class="keranjang">
    <div class="container">
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

      <div class="row">
        <div class="col">
          <h2 class="h3 my-4">Keranjang<strong> Saya</strong></h2>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr class="table-light text-center">
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(keranjang, index) in keranjangs"
                  :key="keranjang.id"
                >
                  <th>{{ index + 1 }}</th>
                  <td>
                    <img
                      :src="'../assets/image/' + keranjang.products.gambar"
                      width="250"
                      class="rounded-3 border border-1"
                    />
                  </td>
                  <td>
                    <strong>{{ keranjang.products.nama }}</strong>
                  </td>
                  <td>
                    {{ keranjang.ket_pesanan ? keranjang.ket_pesanan : "-" }}
                  </td>
                  <td>{{ keranjang.jumlah_pesanan }}</td>
                  <td align="right">Rp. {{ keranjang.products.harga }}</td>
                  <td align="right">
                    <strong
                      >Rp.
                      {{
                        keranjang.products.harga * keranjang.jumlah_pesanan
                      }}</strong
                    >
                  </td>
                  <td align="center" class="text-danger">
                    <font-awesome-icon
                      :icon="['fas', 'trash-alt']"
                      @click="hapusKeranjang(keranjang.id)"
                    />
                  </td>
                </tr>

                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga : </strong>
                  </td>
                  <td align="right">
                    <strong>Rp. {{ totalHarga }}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- form check-out -->
      <div class="row justify-content-end mt-4">
        <div class="col-md-4">
          <form action="POST" v-on:submit.prevent>
            <!-- <input type="text" :value="product.harga" name="harga" hidden /> -->
            <div class="form-group mb-3">
              <label for="nama">Nama Kamu:</label>
              <input
                type="text"
                name="nama"
                class="form-control"
                placeholder="Contoh: Budi, Ayu, ..."
                v-model="pesan.nama_pemesan"
              />
            </div>

            <div class="form-group mb-3">
              <label for="no">Nomor Meja:</label>
              <input
                type="text"
                name="no"
                class="form-control"
                placeholder="Contoh:  KK1, KK2, .."
                v-model="pesan.no_meja"
              />
            </div>

            <div class="form-group">
              <button
                type="submit"
                class="btn btn-success float-end"
                @click="checkOut"
              >
                <font-awesome-icon :icon="['fas', 'money-check-alt']" />
                Check-Out
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
  name: "Keranjang",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        //if success
        // .then((response) => console.log("Berhasil :", response))
        .then(() => {
          this.$toast.error("Sukses Hapus Keranjang.", {
            // optional options Object
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });

          //update notification reload with router
          // this.$router.go({
          //   path: "/keranjang",
          //   force: true,
          // });
          //update notification with axios
          axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjang(response.data))
            .catch((error) => console.log("gagal : ", error));
        })
        //if error
        .catch((error) => console.log("gagal : ", error));
    },
    checkOut() {
      if (this.pesan.nama_pemesan && this.pesan.no_meja) {
        this.pesan.keranjangs = this.keranjangs;
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            //nontification sukses
            this.$toast.success("Sukses dicheck-out harap menunggu.", {
              // optional options Object
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });

            // Hapus Semua Keranjang
            this.keranjangs.map(function (item) {
              return axios
                .delete("http://localhost:3000/keranjangs/" + item.id)
                .catch((error) => console.log(error));
            });

            //update notification reload with router
            this.$router.push({ path: "/pesanan-sukses" });
          })
          .catch((error) => console.log("Gagal", error));
      } else {
        this.$toast.error("Nama dan No Meja harus diisi.", {
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
      .get("http://localhost:3000/keranjangs")
      //if success
      // .then((response) => console.log("Berhasil :", response))
      .then((response) => this.setKeranjang(response.data))
      //if error
      .catch((error) => console.log("gagal : ", error));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce(function (items, data) {
        return items + data.products.harga * data.jumlah_pesanan;
      }, 0);
    },
  },
};
</script>

<style>
.line {
  text-decoration: none;
}
</style>