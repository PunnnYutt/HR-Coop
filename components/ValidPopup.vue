<template>
  <v-dialog
    v-model="showPopup"
    @input="$emit('update:show-popup', $event)"
    max-width="373px"
  >
    <v-card>
      <v-card-text class="pa-0">
        <div class="popup-section">
          <v-icon size="100px" color="orange lighten-3" class="popup-icon"
            >mdi-alert-circle-outline
          </v-icon>
          <p>กรุณากรอกข้อมูลให้ครบถ้วน</p>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showPopup: { type: Boolean, default: false },
  },

  data() {
    return {};
  },

  watch: {
    showPopup() {
      if (this.showPopup === true) {
        this.$store.commit("SET_Footer", false);
      } else {
        this.$store.commit("SET_Footer", true);
      }
    },
  },
};
</script>

<style scoped>
.popup-section {
  height: 279px !important;
  position: relative;
}

.popup-icon {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.popup-section > p {
  width: 100%;
  text-align: center;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-weight: 600;
  font-family: "Sarabun", sans-serif;
  line-height: 24px;
  font-size: 20px;
}
</style>
