<template>
  <div class="form-body">
    <div class="form-body-inner">
      <Position />
      <Personal />
      <RegAddress />
      <PerAddess />
    </div>
  </div>
</template>

<script>
import Position from "../components/personal_info/Position.vue";
import Personal from "../components/personal_info/Personal.vue";
import RegAddress from "../components/personal_info/RegAddress.vue";
import PerAddess from "../components/personal_info/PerAddess.vue";
export default {
  layout: "form",

  components: {
    Position,
    Personal,
    RegAddress,
    PerAddess,
  },
};
</script>

<style scoped>
div.form-body {
  width: 100%;
  height: 1404px;
  max-width: 1128px;
  background-color: #ffffff;
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #00000029;
  box-sizing: border-box;
  padding: 16px 32px 24px 32px;
}

div.form-body-inner {
  width: 100%;
  height: 1364px;
  max-width: 1064px;
}
</style>
