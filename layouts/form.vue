<template>
  <div class="page-section">
    <Topbar />
    <Header :page="headerVariant" />
    <nuxt />
    <div class="footer-area">
      <!-- <Footer :page="headerVariant" /> -->
    </div>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Topbar,
    Header,
    Footer,
  },

  computed: {
    headerVariant() {
      return this.$route.meta.page;
    },
  },
};
</script>

<style scoped>
div.page-section {
  width: 100%;
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-area {
  width: 100%;
  height: 56px;
  margin-top: 16px;
}
</style>
