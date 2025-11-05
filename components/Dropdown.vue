<template>
  <div class="box" :style="boxStyle">
    <div class="form-input-text">
      <span>{{ labelTh }}</span>
      <span>{{ labelEn }}</span>
      <span v-if="required">*</span>
    </div>
    <div :class="{ 'select-wrap': true, displyOnly: !changeAble }">
      <select
        required
        :value="value"
        @input="$emit('input', $event.target.value)"
      >
        <option :value="null" disabled selected hidden>
          {{ placeholder }}
        </option>
        <option v-for="(value, index) in choices" :key="index" :value="value">
          {{ value }}
        </option>
      </select>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="select-icon"
        v-if="changeAble"
      >
        <path
          d="M10.2095 6.17642L7.66325 8.53347L5.11696 6.17642C5.05621 6.12018 4.98408 6.07557 4.90469 6.04513C4.82531 6.01469 4.74023 5.99902 4.6543 5.99902C4.56838 5.99902 4.4833 6.01469 4.40391 6.04513C4.32453 6.07557 4.2524 6.12018 4.19164 6.17642C4.13088 6.23266 4.08269 6.29943 4.04981 6.37292C4.01692 6.4464 4 6.52516 4 6.6047C4 6.68424 4.01692 6.763 4.04981 6.83648C4.08269 6.90996 4.13088 6.97673 4.19164 7.03298L7.20387 9.82133C7.45981 10.0583 7.87325 10.0583 8.12919 9.82133L11.1414 7.03298C11.2023 6.97678 11.2505 6.91002 11.2834 6.83653C11.3164 6.76304 11.3333 6.68426 11.3333 6.6047C11.3333 6.52514 11.3164 6.44636 11.2834 6.37287C11.2505 6.29938 11.2023 6.23262 11.1414 6.17642C10.8855 5.94558 10.4655 5.9395 10.2095 6.17642Z"
          fill="#58A144"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    labelTh: { type: String, default: "" },
    labelEn: { type: String, default: "" },
    required: { type: Boolean, default: false },
    choices: { type: Array, default: [] },
    placeholder: { type: String, default: "" },

    height: { type: String, default: "56px" },
    maxWidth: { type: String, default: "232px" },
    value: { type: String, default: null },

    changeAble: { type: Boolean, default: true },
  },

  computed: {
    boxStyle() {
      return { height: this.height, maxWidth: this.maxWidth };
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
div.form-input-text {
  width: 100%;
  height: 16px;
}

div.box {
  width: 100%;
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

select {
  width: 100%;
  height: 32px;

  border-radius: 4px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding: 8px 16px 8px 16px;
}

.form-input-section select {
  width: 100%;
  height: 32px;

  border-radius: 4px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding: 8px 16px 8px 16px;
}

select:invalid {
  color: #c4c4c4;
}
select,
select:focus {
  color: black;
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  font-size: 12px;
  appearance: none;
}

.select-wrap {
  position: relative;
  margin: 8px 0 0 0;
}

/* Position the custom icon */
.select-wrap .select-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* clicks go to the select */
}

.displyOnly > select {
  pointer-events: none;
  border: none;
}
</style>
