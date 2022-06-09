<template>
  <footer class="text-center text-lg-start mt-5 bg-light">
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: #eeeeee">
      © Copyright {{ Tahun }}
      <span class="text-dark">Kuliner-Kulinerin Aja</span>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      Tahun: new Date().getFullYear(),
    };
  },
};
</script>

<style>
</style>