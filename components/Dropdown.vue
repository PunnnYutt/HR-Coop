<template>
  <div class="box" :style="boxStyle">
    <div class="form-input-text">
      <span>{{ labelTh }}</span>
      <span>{{ labelEn }}</span>
      <span v-if="required">*</span>
    </div>
    <div class="select-wrap">
      <v-select
        :class="{ displayOnly: !changeAble }"
        :value="value"
        @change="$emit('input', $event)"
        :items="choices"
        :placeholder="placeholder"
        :readonly="!changeAble"
        outlined
        dense
        hide-details
        append-icon="mdi-chevron-down"
        :menu-props="{ offsetY: true }"
      >
      </v-select>
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
    choices: { type: Array, default: () => [] },
    placeholder: { type: String, default: "" },

    height: { type: String, default: "56px" },
    maxWidth: { type: String, default: "232px" },
    value: { default: null }, // Changed to accept null

    changeAble: { type: Boolean, default: true },
  },

  computed: {
    boxStyle() {
      return { height: this.height, maxWidth: this.maxWidth };
    },
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

.select-wrap {
  margin: 8px 0 0 0;
}

/* Custom styling for v-select to match your design */
::v-deep .v-select {
  font-family: "Sarabun", sans-serif;
}

::v-deep .v-input__control {
  min-height: 32px !important;
}

::v-deep .v-select__selections {
  padding: 0 !important;
  min-height: 32px !important;
  line-height: 16px;
}

::v-deep .v-select__selection {
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: black;
}

::v-deep .v-input__slot {
  min-height: 32px !important;
  padding: 0px 8px 0px 16px !important;
  border-radius: 4px;
}

::v-deep .v-text-field__details {
  display: none;
}

::v-deep input::placeholder {
  color: #c4c4c4 !important;
  font-size: 12px;
  opacity: 1 !important;
}

::v-deep .v-select__slot input {
  font-size: 12px;
}

::v-deep .v-icon {
  color: #58a144 !important;
  font-size: 16px !important;
}

::v-deep .v-list-item__title {
  font-size: 12px;
  font-family: "Sarabun", sans-serif;
}

/* Hover state for dropdown items */
::v-deep .v-list-item:hover {
  background-color: #f0f9ee !important;
}

/* Active/selected item */
::v-deep .v-list-item--active {
  background-color: #e8f5e9 !important;
  color: #58a144 !important;
}

/* Position the dropdown icon */
::v-deep .v-input__append-inner {
  margin-top: 5px !important;
}

/* Border colors for outlined v-select */
::v-deep fieldset {
  border-color: #e6e6e6 !important;
}

/* Hover state border */
::v-deep .v-input:hover fieldset {
  border-color: #bdbdbd !important;
}

/* Focused state border */
::v-deep .v-input--is-focused fieldset {
  border-color: #58a144 !important;
  border-width: 2px !important;
}

/* When dropdown menu is open */
::v-deep .v-select.v-select--is-menu-active fieldset {
  border-color: #58a144 !important;
  border-width: 2px !important;
}

/* Remove border */
::v-deep .displayOnly fieldset {
  border: none !important;
}

/* Remove icon */
::v-deep .displayOnly .v-input__append-inner {
  display: none !important;
}
</style>
