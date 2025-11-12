<template>
  <v-row class="mx-md-0 mt-md-0 mb-4">
    <v-col class="mt-3 pa-0 mt-md-0 pb-md-0">
      <v-card
        rounded="lg"
        class="px-0 pb-0 pt-0 mt-3 mt-md-0"
        :class="
          $vuetify.breakpoint.mdAndUp ? 'shadow-card' : 'shadow-card-none'
        "
      >
        <v-row no-gutters class="bg-header px-4 py-9px">
          <v-col cols="10">
            <p
              class="primary--text lighten-1 text-body-2 mb-0 font-weight-medium"
            >
              ตำแหน่งสหกิจหรือฝึกงาน / Position
            </p>
          </v-col>
        </v-row>
        <v-row no-gutters class="pl-4 pt-4">
          <v-col
            v-for="position in positions"
            :key="position.number"
            cols="12"
            md="6"
            lg="4"
            class="mb-4 custom-label"
          >
            <v-row no-gutters>
              <v-col cols="12">
                <p class="mb-2 custom-label pb-md-2">
                  {{ position.label }}
                  <span class="pl-1 b-1 text-caption grey--text lighten-5">{{
                    position.labelEn
                  }}</span>
                </p>
              </v-col>
              <v-col cols="12" class="pl-0 position-bottom">
                <v-select
                  v-if="position.number === 1"
                  :items="positionFields"
                  item-text="label"
                  item-value="label"
                  outlined
                  append-icon=""
                  dense
                  placeholder="เลือกตำแหน่งสหกิจหรือฝึกงาน"
                  :class="
                    position.number === 1
                      ? 'pr-md-4 input-select input-box custom-select-size custom-select diplayOnly'
                      : 'pr-lg-4 input-select input-box custom-select-size custom-select diplayOnly'
                  "
                  v-model="formData.position"
                  readonly
                />
                <v-select
                  v-else-if="position.number === 2"
                  :items="WorkplaceFields"
                  item-text="label"
                  item-value="label"
                  outlined
                  dense
                  append-icon=""
                  placeholder="เลือกประจำศูนย์"
                  class="pr-md-4 input-select input-box custom-select-size custom-select diplayOnly"
                  v-model="formData.workplace"
                  readonly
                />

                <v-select
                  v-else-if="position.number === 3"
                  :items="FormatFields"
                  item-text="label"
                  item-value="label"
                  outlined
                  dense
                  append-icon=""
                  placeholder="เลือกการฝึกงาน"
                  class="pr-md-4 input-select input-box custom-select-size custom-select diplayOnly"
                  v-model="formData.internshipFormat"
                  readonly
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted() {
    // ✅ DEEP COPY - No reference to store
    const storeData = this.$store.state.pages;
    if ("email" in storeData[6]) {
      const storeDataCopy = JSON.parse(JSON.stringify(storeData));
      this.formData = storeDataCopy[6];
      this.formData.profileImage = this.$fileStore.imageFile;

      if (this.formData.profileImage) {
        this.previewUrl = URL.createObjectURL(this.formData.profileImage);
        this.isProfileComplete = true;
      }
    }
  },

  data() {
    return {
      formData: {
        position: "",
        workplace: "",
        internshipFormat: "",

        namePrefix: "",
        firstNameTh: "",
        lastNameTh: "",
        nickNameTh: "",

        firstNameEn: "",
        lastNameEn: "",
        nickNameEn: "",

        citizenId: "",
        idIssueDistrict: "",
        idIssueDate: null,
        formattedIssueDate: "",
        formattedExpiryDate: "",
        idExpiryDate: null,

        formattedBirthDate: "",
        BirthDate: null,
        age: "",
        disease: "",

        nationality: "",
        race: "",
        religion: "",

        soldierStatus: "",
        soldierOther: "",

        phoneNumber: "",
        email: "",

        profileImage: null,
      },

      positions: [
        { number: 1, label: "ตำแหน่งสหกิจหรือฝึกงาน", labelEn: "Position" },
        { number: 2, label: "ประจำศูนย์", labelEn: "Workplace" },
        { number: 3, label: "รูปแบบการฝึกงาน", labelEn: "Internship Format" },
      ],
      positionFields: [
        { number: 1, label: "Front-End Developer" },
        { number: 2, label: "Back-End Developer" },
        { number: 3, label: "Business Analysis" },
        { number: 4, label: "UX/UI Designer" },
        { number: 5, label: "System Administrator" },
      ],
      WorkplaceFields: [
        { number: 1, label: "INET กรุงเทพ" },
        { number: 2, label: "INET ขอนแก่น" },
        { number: 3, label: "INET เชียงใหม่" },
        { number: 4, label: "INET หาดใหญ่" },
        { number: 5, label: "INET นครราชสีมา" },
      ],
      FormatFields: [
        { number: 1, label: "สหกิจ" },
        { number: 2, label: "ฝึกงาน" },
      ],
    };
  },
};
</script>

<style scoped>
.v-application--wrap {
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  background-color: #f2f2f2;
}

.avatar-border {
  border: 1px solid #58a144 !important;
  border-radius: 50%;
}

.position-relative {
  position: relative;
}

.stepper-line {
  position: absolute;
  top: 16px;
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: #e0e0e0;
  z-index: 0;
}

.stepper-avatar {
  position: relative;
  z-index: 1;
}

.v-application p {
  margin-bottom: 0px !important;
}

.position-bottom {
  height: 40px;
}

::v-deep .v-list-item:hover {
  background-color: #f0f9ee !important;
}

.show-display {
  display: contents;
}

.shadow-card {
  box-shadow: 0.5px 0.5px 6px rgba(0, 0, 0, 0.15) !important;
}

.shadow-card-none {
  box-shadow: none !important;
}

.upload-card {
  width: 200px;
  height: 210px;
  border: 2px dashed #4caf50;
  border-radius: 8px;
  background-color: #f2faf2;
  cursor: pointer;
}

.hovering {
  opacity: 0.7;
}

.not-hovering {
  opacity: 1;
}

.upload-preview {
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.upload-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

::v-deep .color-label .v-label {
  color: rgb(0, 0, 0);
  font-size: 0.75rem !important;
  font-weight: 500;
}

.custom-label {
  font-size: 0.75rem !important;
  font-weight: 500;
}

::v-deep .custom-radio .v-label {
  font-size: 0.75rem !important;
  font-weight: 500;
}

::v-deep .custom-radio-group > .v-label {
  font-size: 0.75rem !important;
  font-weight: 500;
}

::v-deep .custom-label .v-label {
  font-size: 0.75rem !important;
  font-weight: 500;
}

::v-deep .custom-select-size .v-select__selection {
  font-size: 0.75rem !important;
}

.custom-radio .v-input--selection-controls__ripple {
  border-color: #4caf50 !important;
}

.custom-radio .v-icon {
  color: #4caf50 !important;
}

.mb-26px {
  margin-bottom: 26px !important;
}

::v-deep .text-center input {
  text-align: center;
}

.py-9px {
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}

::v-deep .custom-radio-group.v-input--selection-controls {
  margin-top: 12px;
}

.custom-radio-group .v-input__slot {
  padding: 0px;
  margin: 0px;
  margin-bottom: 8px;
}

.date_box .v-messages {
  display: none !important;
}

.date_box .v-text-field__details {
  display: none !important;
}

::v-deep .input-box .v-input__slot {
  min-height: 32px !important;
}

::v-deep .input-box label {
  font-size: 0.75rem !important;
}

::v-deep .input-box label {
  font-size: 0.75rem !important;
}

/* ลดขนาด input text */
::v-deep .input-box input {
  font-size: 0.75rem !important;
}

/* ลดขนาด placeholder */
::v-deep .input-box input::placeholder {
  font-size: 0.75rem !important;
  opacity: 0.6;
}

::v-deep .input-select .v-input__control {
  min-height: 32px !important;
  height: 32px !important;
}

::v-deep .input-select input {
  padding: 0 !important;
  font-size: 14px !important;
  height: 32px !important;
}

::v-deep .input-box input {
  padding: 0 !important;
  font-size: 14px !important;
  height: 32px !important;
}

::v-deep .input-box .v-label {
  font-size: 12px !important;
  top: 50% !important;
  transform: translateY(-50%) scale(1) !important;
  color: #cdcbcb;
}

.input-box .v-text-field__details {
  padding-top: 2px !important;
}

::v-deep .centered-input .v-input__slot {
  align-items: center !important;
}

::v-deep .align-center-icon {
  display: flex;
  align-items: center;
  height: 100%;
}

::v-deep .v-input__append-inner {
  margin-top: 5px !important;
}

::v-deep .compact-date-picker .v-picker__title {
  height: 81px !important;
}

::v-deep .margin-zero-message .v-messages {
  margin-bottom: 0px !important;
}

::v-deep .margin-zero-message .v-text-field__details {
  margin-bottom: 0px !important;
}

.remove-message >>> .v-messages {
  display: none !important;
}

.remove-message .v-text-field__details {
  display: none !important;
}

.remove-message::v-deep .v-messages {
  display: none !important;
}

::v-deep .remove-message .v-messages {
  display: none !important;
}

::v-deep .input-select.v-text-field--outlined fieldset {
  border-color: #e6e6e6 !important;
  /* เทา */
}

::v-deep .input-select.v-input.error--text.v-text-field--outlined fieldset {
  border-color: #e53935 !important;
  /* สีแดง error */
}

::v-deep .input-select.v-input--is-focused fieldset {
  border-color: #4caf50 !important;
  /* เขียวเข้ม */
  border-width: 2px !important;
}

::v-deep .input-box.v-text-field--outlined fieldset {
  border-color: #e6e6e6 !important;
  /* เทา */
}

::v-deep .input-box.v-input.error--text.v-text-field--outlined fieldset {
  border-color: #e53935 !important;
  /* สีแดง error */
}

::v-deep .input-box.v-input--is-focused fieldset {
  border-color: #4caf50 !important;
  /* เขียวเข้ม */
  border-width: 2px !important;
}

::v-deep .custom-radio .v-icon {
  color: #4caf50 !important;
  /* สีของจุดวงกลม */
}

::v-deep .custom-select .v-input__append-inner .v-icon {
  color: #4caf50 !important;
  font-size: 16px;
}

.doc {
  display: inline-block;
  white-space: nowrap;
}

.bg-header {
  background-color: #f0f9ee;
}

.clickable {
  cursor: pointer;
}

.diplayOnly >>> .v-input__slot {
  border: none !important;
  pointer-events: none !important;
  cursor: not-allowed !important;
}

/* Also remove the fieldset border that Vuetify uses for outlined variant */
.diplayOnly >>> fieldset {
  border: none !important;
}
</style>
