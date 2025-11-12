<template>
  <div class="box-section" :style="boxStyle">
    <div class="form-input-text">
      <span>{{ labelTh }}</span>
      <span>{{ labelEn }}</span>
      <span v-if="required">*</span>
    </div>

    <div class="multiple-input">
      <v-text-field
        :value="value"
        @input="onInput"
        @blur="handleBlur"
        :type="type"
        :placeholder="placeholder"
        :readonly="!changeAble"
        :class="{ displayOnly: !changeAble }"
        outlined
        dense
        class="custom-text-field"
        :rules="shouldValidate ? rules : []"
        :error="shouldValidate && hasError"
        validate-on-blur
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
    maxWidth: { type: String, default: "250px" },
    changeAble: { type: Boolean, default: true },
    rules: { type: Array, default: () => [] },
  },

  data() {
    return {
      hasError: false,
      shouldValidate: false, // Only validate after user clicks/touches input
    };
  },

  computed: {
    boxStyle() {
      return { height: this.height, maxWidth: this.maxWidth };
    },
  },

  watch: {
    value() {
      // Only validate if user has already interacted with field
      if (this.shouldValidate) {
        this.validateInput();
      }
    },
  },

  methods: {
    onInput(value) {
      // Optional: cast number type to Number (or empty -> null)
      if (this.type === "number") {
        this.$emit(
          "input",
          value === "" || value === null ? null : Number(value)
        );
      } else {
        this.$emit("input", value);
      }
    },

    handleBlur() {
      // Enable validation after first blur (when user clicks away)
      this.shouldValidate = true;
      this.validateInput();
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
      this.shouldValidate = true;
      this.validateInput();
      return !this.hasError;
    },

    // Reset validation state
    resetValidation() {
      this.shouldValidate = false;
      this.hasError = false;
    },
  },
};
</script>

<style scoped>
div.box-section {
  width: 100%;
  position: relative;
}

.form-input-text {
  width: 100%;
  height: 16px;
}

.multiple-input {
  width: 100%;
  display: flex;
  margin: 8px 0 0 0;
  align-items: center;
  position: relative;
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

/* Customize v-text-field to match your design */
.custom-text-field >>> .v-input__control {
  min-height: 32px !important;
  height: 32px;
}

.custom-text-field >>> .v-input__slot {
  min-height: 32px !important;
  height: 32px;
  padding: 0 16px !important;
  border-radius: 4px !important;
  border: 1px solid #e6e6e6 !important;
  background-color: white !important;
}

.custom-text-field >>> input {
  font-family: "Sarabun", sans-serif !important;
  font-weight: 400 !important;
  font-size: 12px !important;
  line-height: 16px !important;
  padding: 8px 0 !important;
  margin: 0 !important;
}

.custom-text-field >>> input::placeholder {
  color: #c4c4c4 !important;
  font-weight: 400 !important;
  font-family: "Sarabun", sans-serif !important;
  font-size: 12px !important;
}

/* Remove default Vuetify styles */
.custom-text-field >>> .v-input__slot:before,
.custom-text-field >>> .v-input__slot:after {
  display: none !important;
}

.custom-text-field >>> fieldset {
  border: none !important;
}

/* Focus style */
.custom-text-field.v-input--is-focused:not(.error--text) >>> .v-input__slot {
  border-color: #58a144 !important;
}

/* Error style - RED BORDER */
.custom-text-field.error--text >>> .v-input__slot,
.custom-text-field >>> .v-input--is-focused.error--text .v-input__slot {
  border-color: #e53935 !important;
  border-width: 2px !important;
  box-shadow: none !important;
}

/* Error messages - Absolute positioning */
.custom-text-field >>> .v-text-field__details {
  position: absolute !important;
  top: 100% !important;
  left: 0 !important;
  margin-top: 2px !important;
  padding: 0 !important;
  min-height: auto !important;
}

.custom-text-field >>> .v-messages {
  min-height: auto !important;
  font-size: 11px !important;
  font-family: "Sarabun", sans-serif !important;
}

.custom-text-field >>> .v-messages__message {
  color: #e53935 !important;
  line-height: 14px !important;
}

/* Disabled/readonly style */
.custom-text-field.displayOnly >>> .v-input__slot {
  border: none !important;
  background-color: transparent !important;
  cursor: not-allowed !important;
}

.custom-text-field.displayOnly >>> input {
  cursor: not-allowed !important;
}

/* Remove number input spinners */
.custom-text-field >>> input[type="number"]::-webkit-inner-spin-button,
.custom-text-field >>> input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-text-field >>> input[type="number"] {
  -moz-appearance: textfield;
}
</style>
