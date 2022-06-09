<template>
<Navbar/>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col text-center">
              <img :src="logo" width="330" />
              <h2><strong>Sukses di pesan! <font-awesome-icon :icon="['fas', 'paper-plane']" /></strong></h2>
              <h2>Pesanan Anda Segera diproses <br> Selamat Menunggu</h2>
          </div>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name: 'checkOut',
    components:{
        Navbar,
    }, data() {
    return {
      logo: require('../assets/img/menunggu.png'),
    };
  },
}
</script>

<style>

</style>