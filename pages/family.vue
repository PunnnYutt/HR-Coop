<template>
  <v-app>
    <date-picker
      v-model="testDate"
      label-th="วันที่"
      label-en="Date"
      placeholder="เลือกวันที่"
    />
    <p>Selected: {{ testDate }}</p>
  </v-app>
</template>

<script>
import DatePicker from "../components/DatePicker.vue";
export default {
  layout: "form",
  components: { DatePicker },
  data() {
    return {
      testDate: null,
    };
  },
};
</script>

<style></style>
