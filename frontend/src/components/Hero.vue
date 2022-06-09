<template>
  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2 class="h4">
                <strong>Makanan Enak Cuy,</strong> <br />
                Pas dikantong
              </h2>
              <p>Ayo Guy, Makanan Disini</p>
              <router-link to="/product" class="btn btn-success"><font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" /> Pesan Sekarang</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img :src="logo" class="w-100" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row">
        <div class="col-md-6 mb-2">
          <img :src="logo" class="w-100" />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h2 class="h4">
                <strong>Makanan Enak Cuy,</strong> <br />
                Pas dikantong
              </h2>
              <p>Ayo Guy, Makanan Disini</p>
              <router-link class="btn btn-success" to="/product" title="product"
                ><font-awesome-icon :icon="['fas', 'long-arrow-alt-right']" /> Pesan Sekarang</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import hero1 from "../assets/img/ilustrasi.png";
export default {
  name: "Hero",
  data() {
    return {
      logo: require('../assets/img/ilustrasi.png'),
    };
  },
};
</script>

<style></style>
