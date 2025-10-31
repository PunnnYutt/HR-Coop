<template>
  <v-app class="form-body">
    <v-container class="form-body-inner pt-0">
      <v-row :class="$vuetify.breakpoint.mdAndUp ? '' : 'show-display'">
        <v-col
          class="pa-0 mt-3"
          :class="$vuetify.breakpoint.mdAndUp ? '' : 'show-display'"
        >
          <v-card
          elevation="0"
          rounded="lg"
          class="mb-3 pb-6 px-2 pt-2"
          max-width="1128"
          min-width="1128"
          :class="$vuetify.breakpoint.mdAndUp ? '' : 'show-display'"
          >
            <v-row class="ma-md-0">
              <v-col class="mt-3 pa-0 px-md-4 pt-md-4 mt-md-0 pb-md-0">
                <v-card
                  rounded="lg"
                  class="px-0 pt-0 mt-3 mt-md-0"
                  :class="
                    $vuetify.breakpoint.mdAndUp
                      ? 'shadow-card'
                      : 'shadow-card-none'
                  "
                >
                  <v-row no-gutters class="green lighten-5 py-2 pr-3 pl-4 mb-4">
                    <v-col cols="10" class="pt-1">
                      <p
                        class="primary--text lighten-1 mb-0 font-weight-medium"
                      >
                        ทักษะและความสามารถ  (ทักษะทางคอมพิวเตอร์)  / Computer skills
                      </p>
                    </v-col>
                    <v-col cols="2" class="pl-6">
                      <v-btn
                      class="btn-add-skill primary--text pl-6 pr-0"  
                      @click="addRowHandler"
                      >
                      <v-icon start class="mr-3">mdi-plus-circle-outline</v-icon>
                      <span class="text-body-1">เพิ่มทักษะ</span>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="pl-3 pt-0" v-for="(row, index) in rows" :key="row.id">
                    <v-col>
                      <v-row v-if="index > 0" class="pr-3">
                      <v-divider class="mt-3"></v-divider>
                    </v-row>
                    <v-row class="pt-1 pl-1">
                      <v-col md="1">
                      <p>ทักษะที่ {{ index+1 }}</p>
                      <p class="grey--text">No {{ index+1 }}.</p>
                    </v-col>
                    <v-col md="4">
                      <v-col class="pt-1 pl-0 pr-md-4">
                        <v-text-field
                          outlined
                          dense
                          hide-details="auto"
                          class="ma-0"
                          placeholder="ระบุทักษะ"
                        />
                      </v-col>
                    </v-col>
                    <v-col md="1" class="px-0">
                      <p>ระดับทักษะ :</p>
                      <p class="grey--text">Skill level</p>
                    </v-col>
                    <v-col md="3">
                      <v-radio-group v-model="row.choice" row class="color-label custom-label pl-md-1 mt-1 mt-md-1">
                        <v-col cols="12" md="4" class=" d-flex flex-row flex-md-colum mr-md-0 pa-md-0 pt-0">
                        <v-radio value="three" class="color-label custom-radio">
                          <template #label>
                            <v-col class="pa-0">
                              <p>ดีมาก</p>
                              <p class="text-caption text--secondary">Excellen</p>
                            </v-col>
                          </template>
                        </v-radio>
                        <v-radio value="one" class="color-label custom-radio">
                          <template #label>
                            <v-col class="pa-0">
                              <p>ดี</p>
                              <p class="text-caption text--secondary">Good</p>
                            </v-col>
                          </template>
                        </v-radio>
                        <v-radio value="two" class="color-label custom-radio">
                            <template #label>
                              <v-col class="pa-0">
                                <p>พอใช้</p>
                                <p class="text-caption text--secondary">fiar</p>
                              </v-col>
                            </template>
                          </v-radio>
                        </v-col>
                      </v-radio-group>
                    </v-col>
                    <v-col md="2" class="pt-5">
                      <v-btn
                        v-if="rows.length > 1"
                        outlined
                        color="grey"
                        @click="removeRow(row.id)"
                        class="px-0 btn-delete"
                      >
                        <v-icon color="grey" class="icon-delete">mdi-trash-can-outline</v-icon>
                      </v-btn>
                    </v-col>
                    </v-row>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  layout: "form",
  data () {
    return {
      rows: [
         { id: 1,skil: '', choice: '' },
         { id: 2,skil: '', choice: '' },
         { id: 3,skil: '', choice: '' },

      ],
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
        { number: 1, label: 'ตำแหน่งสหกิจหรือฝึกงาน', labelEn: 'Position' },
        { number: 2, label: 'ประจำศูนย์', labelEn: 'Workplace' },
        { number: 3, label: 'รูปแบบการฝึกงาน', labelEn: 'Internship Format' }
      ],
      positionFields: [
        { number: 1, label: "programer" },
        { number: 2, label: "designer" },
        { number: 3, label: "manager" },
        { number: 4, label: "analyst" },
      ],
      WorkplaceFields: [
        { number: 1, label: 'Bangkok' },
        { number: 2, label: 'Chiang Mai' },
        { number: 3, label: 'Phuket' },
        { number: 4, label: 'Khon Kaen' }
      ],
      Provinces: [
        { number: 1, label: 'กรุงเทพมหานคร' },
        { number: 2, label: 'กระบี่' },
        { number: 3, label: 'กาญจนบุรี' },
        { number: 4, label: 'กาฬสินธุ์' },
        { number: 5, label: 'กำแพงเพชร' },
        { number: 6, label: 'ขอนแก่น' },
        { number: 7, label: 'จันทบุรี' },
        { number: 8, label: 'ฉะเชิงเทรา' },
        { number: 9, label: 'ชลบุรี' },
        { number: 10, label: 'ชัยนาท' },
        { number: 11, label: 'ชัยภูมิ' },
        { number: 12, label: 'ชุมพร' },
        { number: 13, label: 'เชียงราย' },
        { number: 14, label: 'เชียงใหม่' },
        { number: 15, label: 'ตรัง' },
        { number: 16, label: 'ตราด' },
        { number: 17, label: 'ตาก' },
        { number: 18, label: 'นครนายก' },
        { number: 19, label: 'นครปฐม' },
        { number: 20, label: 'นครพนม' },
        { number: 21, label: 'นครราชสีมา' },
        { number: 22, label: 'นครศรีธรรมราช' },
        { number: 23, label: 'นครสวรรค์' },
        { number: 24, label: 'นราธิวาส' },
        { number: 25, label: 'น่าน' },
        { number: 26, label: 'บึงกาฬ' },
        { number: 27, label: 'บุรีรัมย์' },
        { number: 28, label: 'ประจวบคีรีขันธ์' },
        { number: 29, label: 'ปทุมธานี' },
        { number: 30, label: 'ปราจีนบุรี' },
        { number: 31, label: 'ปัตตานี' },
        { number: 32, label: 'พะเยา' },
        { number: 33, label: 'พระนครศรีอยุธยา' },
        { number: 34, label: 'พังงา' },
        { number: 35, label: 'พัทลุง' },
        { number: 36, label: 'พิจิตร' },
        { number: 37, label: 'พิษณุโลก' },
        { number: 38, label: 'เพชรบุรี' },
        { number: 39, label: 'เพชรบูรณ์' },
        { number: 40, label: 'แพร่' },
        { number: 41, label: 'พัทลุง' },
        { number: 42, label: 'ภูเก็ต' },
        { number: 43, label: 'มหาสารคาม' },
        { number: 44, label: 'มุกดาหาร' },
        { number: 45, label: 'แม่ฮ่องสอน' },
        { number: 46, label: 'ยโสธร' },
        { number: 47, label: 'ยะลา' },
        { number: 48, label: 'ร้อยเอ็ด' },
        { number: 49, label: 'ระนอง' },
        { number: 50, label: 'ระยอง' },
        { number: 51, label: 'ราชบุรี' },
        { number: 52, label: 'ลพบุรี' },
        { number: 53, label: 'ลำปาง' },
        { number: 54, label: 'ลำพูน' },
        { number: 55, label: 'เลย' },
        { number: 56, label: 'ศรีสะเกษ' },
        { number: 57, label: 'สกลนคร' },
        { number: 58, label: 'สงขลา' },
        { number: 59, label: 'สตูล' },
        { number: 60, label: 'สมุทรปราการ' },
        { number: 61, label: 'สมุทรสงคราม' },
        { number: 62, label: 'สมุทรสาคร' },
        { number: 63, label: 'สระแก้ว' },
        { number: 64, label: 'สระบุรี' },
        { number: 65, label: 'สิงห์บุรี' },
        { number: 66, label: 'สุโขทัย' },
        { number: 67, label: 'สุพรรณบุรี' },
        { number: 68, label: 'สุราษฎร์ธานี' },
        { number: 69, label: 'สุรินทร์' },
        { number: 70, label: 'หนองคาย' },
        { number: 71, label: 'หนองบัวลำภู' },
        { number: 72, label: 'อำนาจเจริญ' },
        { number: 73, label: 'อุดรธานี' },
        { number: 74, label: 'อุตรดิตถ์' },
        { number: 75, label: 'อุทัยธานี' },
        { number: 76, label: 'อุบลราชธานี' },
        { number: 77, label: 'ยะลา' }
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
      soldier: ''
    }
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
    addRowHandler() {
      this.rows.push({ id: Date.now(),skil: '', choice: ''  }) 
    },
    removeRow(id) {
      this.rows = this.rows.filter(row => row.id !== id)
    },
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

.btn-add-skill {
  box-shadow: none !important;
  background-color: transparent !important;
}
.btn-delete{
  height: 32px !important;
  min-width: 32px !important;
}
.icon-delete{
  font-size: 18px !important;
}
</style>
