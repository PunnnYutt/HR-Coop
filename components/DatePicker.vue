<template>
  <div class="box" :style="boxStyle">
    <div class="form-input-text" v-if="labelTh">
      <span>{{ labelTh }}</span>
      <span>{{ labelEn }}</span>
      <span v-if="required">*</span>
    </div>
    <div class="datepicker-wrap">
      <div
        @click="toggleMenu"
        :class="{ 'input-wrapper': true, displayOnly: !changeAble }"
      >
        <input
          :class="{ displayOnly: !changeAble }"
          type="text"
          :value="formattedYear"
          :placeholder="placeholder"
          readonly
        />
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="calendar-icon"
          v-if="changeAble"
        >
          <path
            d="M11.2179 1.66016H2.11538C1.3613 1.66016 0.75 2.27146 0.75 3.02554V11.2178C0.75 11.9719 1.3613 12.5832 2.11538 12.5832H11.2179C11.972 12.5832 12.5833 11.9719 12.5833 11.2178V3.02554C12.5833 2.27146 11.972 1.66016 11.2179 1.66016Z"
            stroke="#58A144"
            stroke-width="1.5"
            stroke-linejoin="round"
          />
          <path
            d="M10.7008 1.66016H2.63252C1.59455 1.66016 0.75 2.51779 0.75 3.57169V5.30118H1.20513C1.20513 4.84605 1.66026 4.39093 2.11538 4.39093H11.2179C11.6731 4.39093 12.1282 4.84605 12.1282 5.30118H12.5833V3.57169C12.5833 2.51779 11.7388 1.66016 10.7008 1.66016Z"
            fill="#58A144"
          />
          <path
            d="M7.80452 6.66665C8.18156 6.66665 8.48721 6.361 8.48721 5.98396C8.48721 5.60692 8.18156 5.30127 7.80452 5.30127C7.42748 5.30127 7.12183 5.60692 7.12183 5.98396C7.12183 6.361 7.42748 6.66665 7.80452 6.66665Z"
            fill="#58A144"
          />
          <path
            d="M10.0802 6.66665C10.4572 6.66665 10.7628 6.361 10.7628 5.98396C10.7628 5.60692 10.4572 5.30127 10.0802 5.30127C9.70311 5.30127 9.39746 5.60692 9.39746 5.98396C9.39746 6.361 9.70311 6.66665 10.0802 6.66665Z"
            fill="#58A144"
          />
          <path
            d="M7.80452 8.94229C8.18156 8.94229 8.48721 8.63664 8.48721 8.2596C8.48721 7.88256 8.18156 7.5769 7.80452 7.5769C7.42748 7.5769 7.12183 7.88256 7.12183 8.2596C7.12183 8.63664 7.42748 8.94229 7.80452 8.94229Z"
            fill="#58A144"
          />
          <path
            d="M10.0802 8.94229C10.4572 8.94229 10.7628 8.63664 10.7628 8.2596C10.7628 7.88256 10.4572 7.5769 10.0802 7.5769C9.70311 7.5769 9.39746 7.88256 9.39746 8.2596C9.39746 8.63664 9.70311 8.94229 10.0802 8.94229Z"
            fill="#58A144"
          />
          <path
            d="M3.25325 8.94229C3.63029 8.94229 3.93594 8.63664 3.93594 8.2596C3.93594 7.88256 3.63029 7.5769 3.25325 7.5769C2.87621 7.5769 2.57056 7.88256 2.57056 8.2596C2.57056 8.63664 2.87621 8.94229 3.25325 8.94229Z"
            fill="#58A144"
          />
          <path
            d="M5.52888 8.94229C5.90592 8.94229 6.21158 8.63664 6.21158 8.2596C6.21158 7.88256 5.90592 7.5769 5.52888 7.5769C5.15184 7.5769 4.84619 7.88256 4.84619 8.2596C4.84619 8.63664 5.15184 8.94229 5.52888 8.94229Z"
            fill="#58A144"
          />
          <path
            d="M3.25325 11.2179C3.63029 11.2179 3.93594 10.9123 3.93594 10.5352C3.93594 10.1582 3.63029 9.85254 3.25325 9.85254C2.87621 9.85254 2.57056 10.1582 2.57056 10.5352C2.57056 10.9123 2.87621 11.2179 3.25325 11.2179Z"
            fill="#58A144"
          />
          <path
            d="M5.52888 11.2179C5.90592 11.2179 6.21158 10.9123 6.21158 10.5352C6.21158 10.1582 5.90592 9.85254 5.52888 9.85254C5.15184 9.85254 4.84619 10.1582 4.84619 10.5352C4.84619 10.9123 5.15184 11.2179 5.52888 11.2179Z"
            fill="#58A144"
          />
          <path
            d="M7.80452 11.2179C8.18156 11.2179 8.48721 10.9123 8.48721 10.5352C8.48721 10.1582 8.18156 9.85254 7.80452 9.85254C7.42748 9.85254 7.12183 10.1582 7.12183 10.5352C7.12183 10.9123 7.42748 11.2179 7.80452 11.2179Z"
            fill="#58A144"
          />
          <path
            d="M3.02563 0.75V1.66026"
            stroke="#58A144"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.3076 0.75V1.66026"
            stroke="#58A144"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <!-- Calendar Popup (Year Only Mode) -->
      <transition name="fade">
        <div v-if="menuOpen" class="calendar-container">
          <v-app class="v-app-calendar">
            <v-date-picker
              v-model="internalValue"
              :locale="locale"
              :min="minDate"
              :max="maxDate"
              type="year"
              scrollable
              @input="updateYear"
            />
          </v-app>
        </div>
      </transition>
    </div>

    <!-- Backdrop -->
    <div v-if="menuOpen" class="backdrop" @click="closeMenu"></div>
  </div>
</template>

<script>
export default {
  name: "YearPicker",
  props: {
    value: { type: [String, Number], default: null },
    labelTh: { type: String, default: null },
    labelEn: { type: String, default: "" },
    required: { type: Boolean, default: false },
    placeholder: { type: String, default: "ปปปป" },
    height: { type: String, default: "56px" },
    maxWidth: { type: String, default: "232px" },
    min: { type: [String, Number], default: null },
    max: { type: [String, Number], default: null },
    locale: { type: String, default: "th" },
    dateFormat: { type: String, default: "th-TH" },
    changeAble: { type: Boolean, default: true },
  },
  data() {
    return {
      menuOpen: false,
      internalValue: this.value ? this.getDateFromYear(this.value) : null,
    };
  },
  computed: {
    boxStyle() {
      return {
        maxWidth: this.maxWidth,
        height: this.height,
      };
    },
    formattedYear() {
      if (!this.internalValue) return "";

      const year = new Date(this.internalValue).getFullYear();
      if (this.locale === "th") {
        return year + 543;
      }
      return year;
    },
    minDate() {
      if (!this.min) return null;
      return `${this.min}-01-01`;
    },
    maxDate() {
      if (!this.max) return null;
      return `${this.max}-12-31`;
    },
  },
  watch: {
    value(newVal) {
      this.internalValue = newVal ? this.getDateFromYear(newVal) : null;
    },
  },
  methods: {
    toggleMenu() {
      if (this.changeAble) {
        this.menuOpen = !this.menuOpen;
      }
    },
    closeMenu() {
      this.menuOpen = false;
    },
    getDateFromYear(year) {
      // Convert year to a date string that v-date-picker can use
      const yearNum = typeof year === "string" ? parseInt(year) : year;
      return `${yearNum}-01-01`;
    },
    updateYear(val) {
      if (!val) return;

      // Extract year from the date
      const year = new Date(val).getFullYear();
      this.internalValue = val;

      // Emit the year as a number
      this.$emit("input", year);
      this.$emit("change", year);
      this.closeMenu();
    },
  },
};
</script>

<style scoped>
div.form-input-text {
  width: 100%;
  height: 16px;
  margin-bottom: 8px;
}

div.box {
  width: 100%;
  max-width: 232px;
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

.datepicker-wrap {
  position: relative;
  width: 100%;
}

.input-wrapper {
  position: relative;
  width: 100%;
  cursor: pointer;
}

input {
  width: 100%;
  height: 32px;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding: 8px 40px 8px 16px;

  font-family: "Sarabun", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0%;
  cursor: pointer;
}

input::placeholder {
  color: #c4c4c4;
}

input:focus {
  outline: none;
  border-color: #58a144;
}

.calendar-icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

/* Calendar Container */
.calendar-container {
  height: 378px;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1000;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Backdrop */
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: transparent;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.displayOnly {
  pointer-events: none;
  cursor: not-allowed;
  border: none;
}

.v-application {
  height: 378px !important;
}

::deep(.v-application--wrap) {
  height: 378px !important;
}
</style>
