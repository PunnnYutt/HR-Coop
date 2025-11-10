<template>
  <div class="footer-section" v-show="this.$store.state.footerDisplay">
    <div>
      <div class="back-button" v-if="page > 1" @click="goBack">
        <p>ย้อนกลับ</p>
      </div>
      <div class="submit-button" v-if="page == 6" @click="submitForm">
        <p>ส่งใบสมัครฝึกงาน</p>
      </div>
      <div class="next-button" v-else @click="goNext">
        <p>ถัดไป</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: {
        1: "ประวัติส่วนตัว",
        2: "ประวัติการศึกษา",
        3: "ประวัติการทำงาน",
        4: "ประวัติครอบครัว",
        5: "ทักษะและความสามารถ",
        6: "ประวัติเพิ่มเติม",
      },
    };
  },

  props: {
    page: { type: Number, default: 1 },
  },

  methods: {
    goBack() {
      if (this.page === 2) {
        this.$router.push({ name: "index" });
      } else if (this.page === 3) {
        this.$router.push({ name: "education" });
      } else if (this.page === 4) {
        this.$router.push({ name: "family" });
      } else if (this.page === 5) {
        this.$router.push({ name: "skill" });
      } else if (this.page === 6) {
        this.$router.push({ name: "etc" });
      }
    },

    goNext() {
      if (this.page === 1) {
        this.$router.push({ name: "education" });
      } else if (this.page === 2) {
        this.$router.push({ name: "family" });
      } else if (this.page === 3) {
        this.$router.push({ name: "skill" });
      } else if (this.page === 4) {
        this.$router.push({ name: "etc" });
      } else if (this.page === 5) {
        this.$router.push({ name: "submit" });
      }
    },

    submitForm() {},
  },
};
</script>

<style scoped>
.footer-section {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 56px;
  background-color: #fafafa;
  box-shadow: 3px 0px 4px 0px #00000029;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-section > div {
  max-width: 262px;
  width: 100%;
  height: 40px;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.back-button {
  max-width: 110px;
  width: 100%;
  height: 40px;
  margin-right: 16px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.back-button > p {
  text-align: center;
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 24px;
  font-size: 16px;
  color: #58a144;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.back-button:hover {
  cursor: pointer;
  background-color: #cccccc;
}

.next-button {
  max-width: 110px;
  width: 100%;
  height: 40px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cccccc;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.next-button > p {
  text-align: center;
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 24px;
  font-size: 16px;
  color: #ffffff;
}

.next-button:hover,
.submit-button:hover {
  cursor: pointer;
  background-color: #58a144;
}
.submit-button {
  max-width: 136px;
  width: 100%;
  height: 40px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cccccc;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.submit-button > p {
  text-align: center;
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 24px;
  font-size: 16px;
  color: #ffffff;
}

p {
  user-select: none;
}
.v-application p {
  margin-bottom: 0px !important;
}
</style>
