<template>
  <div class="page-section">
    <Topbar />
    <nuxt />
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
export default {
  components: {
    Topbar,
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
