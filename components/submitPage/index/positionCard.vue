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
        <v-row no-gutters class="green lighten-5 px-4 py-9px">
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
                <p class="mb-2 font-weight-light">
                  {{ position.label }}
                  <span
                    class="pl-2 b-1 grey--text text--lighten-1 font-weight-light"
                    >{{ position.labelEn }}</span
                  >
                </p>
              </v-col>
              <v-col cols="12" class="pl-0 position-bottom">
                <v-select
                  v-if="position.number <= 2"
                  :items="positionFields"
                  item-text="label"
                  item-value="label"
                  outlined
                  dense
                  placeholder="เลือกตำแหน่งสหกิจหรือฝึกงาน"
                  clearable
                  :class="position.number === 1 ? 'pr-md-4' : 'pr-lg-4'"
                />
                <v-select
                  v-else-if="position.number === 2"
                  :items="WorkplaceFields"
                  item-text="label"
                  item-value="label"
                  outlined
                  dense
                  placeholder="เลือกประจำศูนย์"
                  clearable
                  class="pr-md-4"
                />

                <v-select
                  v-else-if="position.number === 3"
                  :items="WorkplaceFields"
                  item-text="label"
                  item-value="label"
                  outlined
                  dense
                  placeholder="เลือกการฝึกงาน"
                  clearable
                  class="pr-md-4"
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
  layout: "form",
  data() {
    return {
      // format currency
      salaryFrom: 0,
      salaryFromDisplay: "",
      salaryTo: 0,
      salaryToDisplay: "",
      // validation salary
      salaryFromError: false,
      salaryFromErrorMessage: "",
      salaryToError: false,
      salaryToErrorMessage: "",
      // texts
      steps: [
        { number: 1, label: "ประวัติส่วนตัว" },
        { number: 2, label: "ประวัติการศึกษา" },
        { number: 3, label: "ประวัติการทำงาน" },
        { number: 4, label: "ประวัติครอบครัว" },
        { number: 5, label: "ทักษะและความสามารถ" },
        { number: 6, label: "ประวัติเพิ่มเติม" },
      ],
      positions: [
        { number: 1, label: "ตำแหน่งสหกิจหรือฝึกงาน", labelEn: "Position" },
        { number: 2, label: "ประจำศูนย์", labelEn: "Workplace" },
        { number: 3, label: "รูปแบบการฝึกงาน", labelEn: "Internship Format" },
      ],
      positionFields: [
        { number: 1, label: "programer" },
        { number: 2, label: "designer" },
        { number: 3, label: "manager" },
        { number: 4, label: "analyst" },
      ],
      WorkplaceFields: [
        { number: 1, label: "Bangkok" },
        { number: 2, label: "Chiang Mai" },
        { number: 3, label: "Phuket" },
        { number: 4, label: "Khon Kaen" },
      ],
      Provinces: [
        { number: 1, label: "กรุงเทพมหานคร" },
        { number: 2, label: "กระบี่" },
        { number: 3, label: "กาญจนบุรี" },
        { number: 4, label: "กาฬสินธุ์" },
        { number: 5, label: "กำแพงเพชร" },
        { number: 6, label: "ขอนแก่น" },
        { number: 7, label: "จันทบุรี" },
        { number: 8, label: "ฉะเชิงเทรา" },
        { number: 9, label: "ชลบุรี" },
        { number: 10, label: "ชัยนาท" },
        { number: 11, label: "ชัยภูมิ" },
        { number: 12, label: "ชุมพร" },
        { number: 13, label: "เชียงราย" },
        { number: 14, label: "เชียงใหม่" },
        { number: 15, label: "ตรัง" },
        { number: 16, label: "ตราด" },
        { number: 17, label: "ตาก" },
        { number: 18, label: "นครนายก" },
        { number: 19, label: "นครปฐม" },
        { number: 20, label: "นครพนม" },
        { number: 21, label: "นครราชสีมา" },
        { number: 22, label: "นครศรีธรรมราช" },
        { number: 23, label: "นครสวรรค์" },
        { number: 24, label: "นราธิวาส" },
        { number: 25, label: "น่าน" },
        { number: 26, label: "บึงกาฬ" },
        { number: 27, label: "บุรีรัมย์" },
        { number: 28, label: "ประจวบคีรีขันธ์" },
        { number: 29, label: "ปทุมธานี" },
        { number: 30, label: "ปราจีนบุรี" },
        { number: 31, label: "ปัตตานี" },
        { number: 32, label: "พะเยา" },
        { number: 33, label: "พระนครศรีอยุธยา" },
        { number: 34, label: "พังงา" },
        { number: 35, label: "พัทลุง" },
        { number: 36, label: "พิจิตร" },
        { number: 37, label: "พิษณุโลก" },
        { number: 38, label: "เพชรบุรี" },
        { number: 39, label: "เพชรบูรณ์" },
        { number: 40, label: "แพร่" },
        { number: 41, label: "พัทลุง" },
        { number: 42, label: "ภูเก็ต" },
        { number: 43, label: "มหาสารคาม" },
        { number: 44, label: "มุกดาหาร" },
        { number: 45, label: "แม่ฮ่องสอน" },
        { number: 46, label: "ยโสธร" },
        { number: 47, label: "ยะลา" },
        { number: 48, label: "ร้อยเอ็ด" },
        { number: 49, label: "ระนอง" },
        { number: 50, label: "ระยอง" },
        { number: 51, label: "ราชบุรี" },
        { number: 52, label: "ลพบุรี" },
        { number: 53, label: "ลำปาง" },
        { number: 54, label: "ลำพูน" },
        { number: 55, label: "เลย" },
        { number: 56, label: "ศรีสะเกษ" },
        { number: 57, label: "สกลนคร" },
        { number: 58, label: "สงขลา" },
        { number: 59, label: "สตูล" },
        { number: 60, label: "สมุทรปราการ" },
        { number: 61, label: "สมุทรสงคราม" },
        { number: 62, label: "สมุทรสาคร" },
        { number: 63, label: "สระแก้ว" },
        { number: 64, label: "สระบุรี" },
        { number: 65, label: "สิงห์บุรี" },
        { number: 66, label: "สุโขทัย" },
        { number: 67, label: "สุพรรณบุรี" },
        { number: 68, label: "สุราษฎร์ธานี" },
        { number: 69, label: "สุรินทร์" },
        { number: 70, label: "หนองคาย" },
        { number: 71, label: "หนองบัวลำภู" },
        { number: 72, label: "อำนาจเจริญ" },
        { number: 73, label: "อุดรธานี" },
        { number: 74, label: "อุตรดิตถ์" },
        { number: 75, label: "อุทัยธานี" },
        { number: 76, label: "อุบลราชธานี" },
        { number: 77, label: "ยะลา" },
      ],
      previewUrl: null,
      isProfileComplete: false,
      // date
      menu1: false,
      date1: null,
      formattedDate1: "",
      menu2: false,
      date2: null,
      formattedDate2: "",
      menu3: false,
      date3: null,
      formattedDate3: "",
      // gender
      selectedGender: null,
      // address
      useSameAddress: false,
      soldier: "",
    };
  },
  computed: {
    todayDate() {
      return new Date().toISOString().substr(0, 10);
    },
    calculatedAge() {
      if (!this.date3) {
        return "";
      }
      const today = new Date();
      const birth = new Date(this.date3);
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      // ถ้ายังไม่ถึงเดือนเกิด หรือถึงเดือนเกิดแต่ยังไม่ถึงวันเกิด ให้ลบ 1 ปี
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birth.getDate())
      ) {
        age--;
      }
      return age.toString();
    },
  },
  methods: {
    updateDate1(val) {
      const d = new Date(val);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      this.formattedDate1 = d.toLocaleDateString("th-TH", options);
      this.menu1 = false;
    },
    updateDate2(val) {
      const d = new Date(val);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      this.formattedDate2 = d.toLocaleDateString("th-TH", options);
      this.menu2 = false;
    },
    updateDate3(val) {
      const d = new Date(val);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      this.formattedDate3 = d.toLocaleDateString("th-TH", options);
      this.menu3 = false;
    },
    isNumber(evt) {
      const charCode = evt.which ? evt.which : evt.keyCode;
      // อนุญาตเฉพาะตัวเลข 0-9
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        if (this.previewUrl) {
          URL.revokeObjectURL(this.previewUrl);
        }
        this.previewUrl = URL.createObjectURL(file);
      }
      this.isProfileComplete = true;
    },
    formatSalary(value, type) {
      const inputValue = typeof value === "string" ? value : value.target.value;
      const numValue = inputValue.replace(/\D/g, "");
      if (!numValue) {
        if (type === "from") {
          this.salaryFromDisplay = "";
          this.salaryFrom = 0;
        } else {
          this.salaryToDisplay = "";
          this.salaryTo = 0;
        }
        this.validateSalary();
        return;
      }
      const num = parseInt(numValue);
      const formatted = num.toLocaleString("en-US");
      if (type === "from") {
        this.salaryFromDisplay = formatted;
        this.salaryFrom = num;
      } else {
        this.salaryToDisplay = formatted;
        this.salaryTo = num;
      }
      // Validate real-time
      this.validateSalary();
    },
    validateSalary() {
      // Reset errors
      this.salaryFromError = false;
      this.salaryFromErrorMessage = "";
      this.salaryToError = false;
      this.salaryToErrorMessage = "";
      // ตรวจสอบว่ากรอกข้อมูล
      if (!this.salaryFrom && this.salaryTo) {
        this.salaryFromError = true;
        this.salaryFromErrorMessage = "กรุณากรอกเงินเดือนต่ำสุด";
        return false;
      }
      if (this.salaryFrom && !this.salaryTo) {
        this.salaryToError = true;
        this.salaryToErrorMessage = "กรุณากรอกเงินเดือนสูงสุด";
        return false;
      }
      // ตรวจสอบว่าเงินเดือนสูงสุดมากกว่าหรือเท่ากับต่ำสุด
      if (this.salaryFrom && this.salaryTo && this.salaryTo < this.salaryFrom) {
        this.salaryToError = true;
        this.salaryToErrorMessage =
          "เงินเดือนสูงสุดต้องมากกว่าหรือเท่ากับเงินเดือนต่ำสุด";
        return false;
      }
      // ตรวจสอบว่าไม่ติดลบ
      if (this.salaryFrom < 0) {
        this.salaryFromError = true;
        this.salaryFromErrorMessage = "เงินเดือนต้องเป็นจำนวนบวก";
        return false;
      }
      if (this.salaryTo < 0) {
        this.salaryToError = true;
        this.salaryToErrorMessage = "เงินเดือนต้องเป็นจำนวนบวก";
        return false;
      }
      return true;
    },
  },
};
</script>
<style>
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
.v-list-item:hover {
  background-color: #e9ffeb !important;
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
.color-label .v-label {
  color: rgb(0, 0, 0);
  font-size: 0.75rem !important;
  font-weight: 500;
}
.custom-label {
  font-size: 0.75rem !important;
  font-weight: 500;
}
.custom-label .v-label {
  font-size: 0.75rem !important;
  font-weight: 500;
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
.text-center input {
  text-align: center;
}
.py-9px {
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}

.custom-radio-group.v-input--selection-controls {
  margin-top: 12px;
}
.custom-radio-group .v-input__slot {
  padding: 0px;
  margin: 0px;
  margin-bottom: 8px;
}
.v-messages {
  display: none !important;
}
.v-text-field__details {
  display: none !important;
}
</style>
