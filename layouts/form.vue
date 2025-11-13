<template>
  <v-app>
    <div class="page-section">
      <Topbar />
      <Header :page="headerVariant" />

      <nuxt ref="page" />
      <div class="footer-area">
        <Footer :page="headerVariant" @goNext="handleGoNext" />
      </div>
    </div>
    <ValidPopup :show-popup.sync="showValidPopup" />
  </v-app>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import ValidPopup from "../components/ValidPopup.vue";

export default {
  components: {
    Topbar,
    Header,
    Footer,
    ValidPopup,
  },
  data() {
    return { showValidPopup: false };
  },
  computed: {
    headerVariant() {
      return this.$route.meta.page;
    },
  },
  methods: {
    handleGoNext() {
      console.log("POPUPPPPPPsss" + this.showValidPopup);
      let valid = true;
      if (this.headerVariant === 2 || this.headerVariant === 3) {
        valid = this.$refs.page.$children[0].validateAll();
      }

      if (valid) {
        if (this.headerVariant === 1) {
          this.$router.push({ name: "education" });
        } else if (this.headerVariant === 2) {
          this.$router.push({ name: "family" });
        } else if (this.headerVariant === 3) {
          this.$router.push({ name: "skill" });
        } else if (this.headerVariant === 4) {
          this.$router.push({ name: "etc" });
        } else if (this.headerVariant === 5) {
          this.$router.push({ name: "submit" });
        }
      } else {
        console.log("POPUPPPPPP");
        this.showValidPopup = true;
      }
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
