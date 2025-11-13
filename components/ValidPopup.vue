<template>
  <v-dialog
    v-model="showPopup"
    @input="$emit('update:show-popup', $event)"
    max-width="373px"
  >
    <v-card>
      <v-card-text class="pa-0">
        <div class="popup-section">
          <v-icon size="100px" color="orange" class="popup-icon"
            >mdi-alert-circle-outline
          </v-icon>
          <p>กรุณากรอกข้อมูลให้ถูกต้อง</p>
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
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  font-weight: 600;
  font-family: "Sarabun", sans-serif;
  line-height: 24px;
  font-size: 18px;
}
</style>

font-family: Sarabun; font-weight: 600; font-size: 16px; leading-trim: NONE;
line-height: 24px; letter-spacing: 0%; text-align: center;
