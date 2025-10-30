<template>
  <div class="page-section">
    <Topbar />
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    Topbar,
    Header,
  },
};
</script>

<style scoped>
div.page-section {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
