<template>
  <div class="radio-section" :style="boxStyle">
    <div class="radio-title" v-if="labelTh">
      <div>
        <span>{{ labelTh }}</span>
        <span v-if="required">*</span>
        <span>:</span>
      </div>

      <p>{{ labelEn }}</p>
    </div>

    <div class="radio-input">
      <div v-for="(value, key) in choices" :key="key">
        <input
          type="radio"
          :name="group"
          :value="key"
          @click="toggleRadio(key)"
          v-model="selected"
        />
        <div class="label-section">
          <label for="choice">{{ key }}</label>
          <p v-if="value">{{ value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    labelTh: { type: String, default: null },
    labelEn: { type: String, default: "" },
    required: { type: Boolean, default: false },
    choices: { type: Object, default: {} },
    group: { type: String, default: "choice" },

    height: { type: String, default: "20px" },
    maxWidth: { type: String, default: "316px" },

    toggle: { type: Boolean, default: false },
  },

  data() {
    return {
      selected: null,
    };
  },

  computed: {
    boxStyle() {
      return { height: this.height, maxWidth: this.maxWidth };
    },
  },
  methods: {
    toggleRadio(key) {
      if (this.selected === key && this.toggle) {
        this.selected = null;
      }
    },
  },
};
</script>

<style scoped>
.radio-section {
  width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: flex-start;
}

.radio-title {
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 29px;
}

span,
.radio-title p {
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  font-size: 12px;
}

.radio-title p {
  margin: 0px;
  color: grey;
}

span:nth-of-type(2) {
  color: red;
}

span:nth-of-type(4) {
  color: #989898;
}

.radio-input {
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  box-sizing: border-box;
}

.radio-input > div {
  height: 100%;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
}

.label-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.label-section label,
.label-section p {
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  font-size: 12px;
  margin: 0px;
  color: #333333;
}

.label-section p {
  color: #989898;
}

input {
  width: 16px;
  height: 16px;
  margin: 0px 8px 0px 0px;
  accent-color: #58a144;
}
</style>
