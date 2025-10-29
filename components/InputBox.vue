<template>
  <div class="box-section" :style="boxStyle">
    <div class="form-input-text">
      <span>{{ labelTh }}</span>
      <span>{{ labelEn }}</span>
      <span v-if="required">*</span>
    </div>

    <div class="multiple-input">
      <input
        class="range"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @input="onInput"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBox",
  props: {
    value: [String, Number, Date], // v-model
    labelTh: { type: String, default: "" },
    labelEn: { type: String, default: "" },
    required: { type: Boolean, default: false },
    type: { type: String, default: "text" }, // 'text' | 'number' | 'date'
    placeholder: { type: String, default: "" },

    height: { type: String, default: "56px" },
    maxWidth: { type: String, default: "232px" },
  },

  computed: {
    boxStyle() {
      return { height: this.height, maxWidth: this.maxWidth };
    },
  },

  methods: {
    onInput(e) {
      const raw = e.target.value;
      // Optional: cast number type to Number (or empty -> null)
      if (this.type === "number") {
        this.$emit("input", raw === "" ? null : Number(raw));
      } else {
        this.$emit("input", raw);
      }
    },
  },
};
</script>


<style scoped>
div.box-section {
  width: 100%;
}

.multiple-input {
  width: 100%;
  height: 32px;
  display: flex;
  margin: 8px 0 0 0;
  align-items: center;
}
.multiple-input .range {
  width: 100%;
  height: 32px;
  background-color: white;
  border-radius: 4px;
  border-width: 1px;
  border: 1px solid #e6e6e6;
  margin: 0px;
  box-sizing: border-box;
}

input {
  padding: 8px 16px;
}

input::placeholder {
  color: #c4c4c4;
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  font-size: 12px;
  appearance: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

span {
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  font-size: 12px;
}

span:nth-of-type(2) {
  color: grey;
}
span:nth-of-type(3) {
  color: red;
}
</style>

 