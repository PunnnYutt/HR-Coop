<template>
  <div class="radio-section" :style="boxStyle">
    <div class="radio-title" v-if="labelTh">
      <div>
        <span>{{ labelTh }}</span>
        <span>{{ labelEn }}</span>
        <span v-if="required">*</span>
        <span>:</span>
      </div>
    </div>

    <v-radio-group
      v-model="internalValue"
      class="radio-input"
      :class="{ 'has-error': shouldValidate && hasError }"
      @change="handleGroupChange"
      row
      :rules="shouldValidate ? rules : []"
      :error="shouldValidate && hasError"
      hide-details
    >
      <div v-for="(value, key) in choices" :key="key">
        <v-radio
          :value="key"
          :disabled="!changeAble"
          @click.native.capture="handleClick($event, key)"
          color="#58a144"
        ></v-radio>
        <div class="label-section">
          <label :for="group + '-' + key">{{ key }}</label>
          <p v-if="value">&nbsp;{{ value }}</p>
        </div>
      </div>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    value: { type: [String, Number, Boolean], default: null },
    labelTh: { type: String, default: null },
    labelEn: { type: String, default: "" },
    required: { type: Boolean, default: false },
    choices: { type: Object, default: () => ({}) },
    group: { type: String, default: "choice" },

    height: { type: String, default: "20px" },
    maxWidth: { type: String, default: "316px" },
    toggle: { type: Boolean, default: false },
    changeAble: { type: Boolean, default: true },
    rules: { type: Array, default: () => [] },
  },

  data() {
    return {
      internalValue: this.value,
      hasError: false,
      shouldValidate: false,
    };
  },

  computed: {
    boxStyle() {
      return { height: this.height, maxWidth: this.maxWidth };
    },
  },

  watch: {
    value(newVal) {
      this.internalValue = newVal;
      this.validate();
    },
  },

  methods: {
    handleClick(event, key) {
      if (this.toggle && this.internalValue === key) {
        // Prevent and stop propagation to stop v-radio-group from updating
        event.preventDefault();
        event.stopPropagation();

        this.$nextTick(() => {
          this.internalValue = null;
          this.$emit("input", null);
          this.$emit("change", null);
        });
      }
    },
    handleGroupChange(val) {
      // Only emit if value is not null (not being toggled off)
      if (val !== null) {
        this.$emit("input", val);
        this.$emit("change", val);
      }
    },

    validateInput() {
      if (this.rules && this.rules.length > 0) {
        for (let rule of this.rules) {
          const result = rule(this.value);
          if (result !== true) {
            this.hasError = true;
            return;
          }
        }
      }
      this.hasError = false;
    },

    //----------------------------------------------------------------------------
    // Public method to force validation (can be called from parent)
    validate() {
      console.log("valll");
      this.shouldValidate = true;
      this.validateInput();
      return !this.hasError;
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
.radio-title span:nth-child(2) {
  margin: 0px;
  color: grey;
}

span:nth-of-type(3) {
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

/* Reset Vuetify's default radio group styles */
.radio-input::v-deep .v-input__control {
  width: 100%;
  height: 100%;
}

.radio-input::v-deep .v-input__slot {
  margin: 0;
  height: 100%;
}

.radio-input::v-deep .v-input--radio-group__input {
  display: flex;
  justify-content: space-between;
  flex: 1;
  align-items: center;
  height: 100%;
}

.radio-input > div,
.radio-input::v-deep .v-input--radio-group__input > div {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Override Vuetify radio styles */
.radio-input::v-deep .v-radio {
  margin: 0px 8px 0px 0px;
  padding: 0;
}

.radio-input::v-deep .v-input--selection-controls__input,
::v-deep .v-input--selection-controls {
  margin: 0 !important;
}

.label-section {
  display: flex;
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

label {
  cursor: pointer;
}

::v-deep .v-radio .v-input--selection-controls__input .v-icon {
  color: #58a144 !important;
}

/* Make circles red when there's an error */
.radio-input.has-error
  ::v-deep
  .v-radio
  .v-input--selection-controls__input
  .v-icon {
  color: #ff5252 !important;
}
</style>
