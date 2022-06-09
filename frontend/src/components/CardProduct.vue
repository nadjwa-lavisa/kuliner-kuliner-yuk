<template>
  <!-- <h2>Card product  {{product.nama}}</h2> -->
  <div class="card shadow">
    <!-- ukuran image atau foto harus h : 400 dan w : 600 -->
    <img
      class="card-img-top w-100"
      :src="require(`../assets/img/${product.gambar}`)"
    />
    <!-- <img class="card-img-top" :src="pict" /> -->
    <div class="card-body">
      <h5 class="card-title">{{ product.nama }}</h5>
      <p class="card-text">Harga : Rp. {{ product.harga }} -,</p>
      <router-link :to="'/product/'+product.id" class="btn btn-success"
        ><font-awesome-icon :icon="['fas', 'shopping-cart']" />
        Pesan</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
  data() {
    return {
      // pict: require(`../assets/img/${product.gambar}`),
    };
  },
};
</script>

<style>
.card-title {
  min-height: 5px;
}

.card-text {
  min-height: 2rem;
}
</style>