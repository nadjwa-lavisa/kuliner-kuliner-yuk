<template>
  <!-- Navbar menu 
  <Navbar /> -->

  <!-- router -->
  <router-view />

  <!-- footer -->
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
</style>
