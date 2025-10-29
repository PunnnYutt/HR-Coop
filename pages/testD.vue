<template>
  <v-app>
    <v-container class=" py-20 ">
      <v-row v-if="$vuetify.breakpoint.smAndDown">
        <v-col class="pa-0">
          <v-card
            elevation="0"
            rounded="lg"
            color="#ffffff"
            class="px-3 pb-3 pt-2"
            height="49"
          >
            <v-row align="center" class="py-0" no-gutters>
              <v-col cols="6" class="d-flex justify-start">
                <h6 class="font-weight-bold mb-0 custom-label">ใบสมัครงาน</h6>
              </v-col>

              <v-col cols="6">
                <v-row align="center" justify="end" no-gutters>
                  <v-col cols="auto" class="mr-2">
                    <h6 class="font-weight-medium mb-0">ประวัติส่วนตัว</h6>
                  </v-col>
                  <v-col cols="auto">
                    <v-avatar color="#f0f9ee" class="avatar-border" size="32">
                      <span class="primary--text text-body-2">2/6</span>
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col class="pa-md-0">
          <v-card
            elevation="0"
            rounded="lg"
            color="#ffffff"
            class="px-3 pb-3 pt-2"
          >
          <v-row>
            <v-col cols="auto" class="pt-4" align-center justify-start>
              <h6 class="subtitle-1 font-weight-bold mb-1">ใบสมัครงาน</h6>
              <v-img
            src="https://job.science.cmu.ac.th/upload/company/1-2024-01-24-926040289.png"
            contain
            max-height="38"
            max-width="79"
            class="mr-3 logo-img"
           />
            </v-col>
            <v-col cols="10" class="pt-8">
              <v-row justify="center" no-gutters>
                <v-col v-for="step in steps" :key="step.number" cols="2" class="text-center position-relative">
                  <div v-if="step.number < 6" class="stepper-line" />
                  <v-avatar :color="step.number <= 2 ? 'primary' : 'grey lighten-1'" size="32" class="stepper-avatar">
                    <span v-if="step.number >= 2" class="white--text text-body-2">{{ step.number }}</span>
                    <span v-else class="white--text text-body-2 d-flex align-center justify-center pl-1">
                    <v-icon small color="white" class="mr-1">mdi-check</v-icon>
                    </span>
                  </v-avatar>
                </v-col>
              </v-row>
              <v-row justify="center" dense no-gutters class="mt-2">
                <v-col v-for="step in steps" :key="'label-' + step.number" cols="2" class="text-center" :class="step.number <= 2 ? '' : 'grey--text'">
                  {{ step.label }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row :class="$vuetify.breakpoint.mdAndUp ? '' : 'show-display'">
        <v-col class="pa-0 mt-3" :class="$vuetify.breakpoint.mdAndUp ? '' : 'show-display'">
            <v-card
            elevation="0"
            rounded="lg"
            class="pa-0"
            :class="$vuetify.breakpoint.mdAndUp ? '' : 'show-display'"
            >
              <v-row class="ma-md-0">
                <v-col class="mt-3 pa-0 px-md-4 py-md-4 mt-md-0">
                  <v-card
                    rounded="lg"
                    class="px-0 pb-3 pt-0 mt-3 mt-md-0"
                    :class="$vuetify.breakpoint.mdAndUp ? 'shadow-card' : 'shadow-card-none'"
                  >
                    <v-row no-gutters class="green lighten-5 py-2 px-3 mb-3">
                      <v-col cols="10">
                        <p class="primary--text lighten-1 mb-0 font-weight-medium">ที่อยู่ตามบัตรประชาชน / Registered address</p>
                      </v-col>
                      <v-col cols="2">
                        test
                      </v-col>
                    </v-row>
                      <v-row class="pb-md-3 pl-6 pl-md-0 pr-3">
                        <v-col cols="12" md="2" class="pl-md-9">
                          <v-row>
                            <v-col class="d-flex justify-start align-center pt-0 pl-0 pb-1">
                              <p class="custom-label">บ้านเลขที่  <span class="grey--text"> Address </span><span class="red--text">*</span></p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="pt-0 pl-0 ">
                              <v-text-field
                                outlined
                                dense
                                hide-details="auto"
                                class="ma-0"
                                placeholder="บ้านเลขที่"
                              />
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="4" md="1">
                          <v-row>
                            <v-col class="d-flex justify-start align-center pt-0 pl-0 pb-1">
                              <p class="custom-label">หมู่ที่ </p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="pt-0 pl-0 ">
                              <v-text-field
                                outlined
                                dense
                                hide-details="auto"
                                class="ma-0"
                                placeholder="0"
                              />
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="8" md="3">
                          <v-row>
                            <v-col class="d-flex justify-start align-center pt-0 pl-0 pb-1">
                              <p class="custom-label">ถนน/ซอย <span class="grey--text"> Street </span></p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="pt-0 pl-0 ">
                              <v-text-field
                                outlined
                                dense
                                hide-details="auto"
                                class="ma-0"
                                placeholder="ระบุถนน/ซอย"
                              />
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="6" md="2">
                          <v-row>
                            <v-col class="d-flex justify-start align-center pt-0 pl-0 pb-1">
                              <p class="custom-label">จังหวัด <span class="grey--text"> Province </span><span class="red--text">*</span></p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="pt-0 pl-0 pb-0 pb-md-3">
                              <v-select
                                :items="positionFields"
                                item-text="label"
                                item-value="label"
                                outlined
                                dense
                                placeholder="เลือกจังหวัด"
                                clearable
                              />
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="6" md="2">
                          <v-row>
                            <v-col class="d-flex justify-start align-center pt-0 pl-0 pb-1">
                              <p class="custom-label">เขต/อำเภอ <span class="grey--text"> E-mail </span></p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="pt-0 pl-0 pb-0 pb-md-3">
                              <v-select
                                :items="positionFields"
                                item-text="label"
                                item-value="label"
                                outlined
                                dense
                                placeholder="เลือกเขต/อำเภอ"
                                clearable
                              />
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="6" md="2" class="pr-md-6">
                          <v-row>
                            <v-col class="d-flex justify-start align-center pt-0 pl-0 pb-1">
                              <p class="custom-label">แขวง/ตำบล <span class="grey--text"> E-mail </span></p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="pt-0 pl-0 ">
                              <v-select
                                :items="positionFields"
                                item-text="label"
                                item-value="label"
                                outlined
                                dense
                                placeholder="เลือกแขวง/ตำบล"
                                clearable
                              />
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="6" md="3" class="pl-md-9">
                          <v-row>
                            <v-col class="d-flex justify-start align-center pt-0 pl-0 pb-1">
                              <p class="custom-label">รหัสไปรษณี <span class="grey--text"> Postal code </span><span class="red--text">*</span></p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="pt-0 pl-0 ">
                              <v-text-field
                                outlined
                                dense
                                hide-details="auto"
                                class="ma-0"
                                placeholder="00000"
                              />
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
  data () {
    return {
      // format currency
      salaryFrom: 0,
      salaryFromDisplay: '',
      salaryTo: 0,
      salaryToDisplay: '',
      // validation salary
      salaryFromError: false,
      salaryFromErrorMessage: '',
      salaryToError: false,
      salaryToErrorMessage: '',
      // texts
      steps: [
        { number: 1, label: 'ประวัติส่วนตัว' },
        { number: 2, label: 'ประวัติการศึกษา' },
        { number: 3, label: 'ประวัติการทำงาน' },
        { number: 4, label: 'ประวัติครอบครัว' },
        { number: 5, label: 'ทักษะและความสามารถ' },
        { number: 6, label: 'ประวัติเพิ่มเติม' }
      ],
      positions: [
        { number: 1, label: 'ตำแหน่งงานที่ 1', labelEn: 'Position 1' },
        { number: 2, label: 'ตำแหน่งงานที่ 2', labelEn: 'Position 2' },
        { number: 3, label: 'สถานที่ทำงาน', labelEn: 'Workplace' },
        { number: 4, label: 'เงินเดือนที่คาดหวัง', labelEn: 'Expected Salary' }
      ],
      positionFields: [
        { number: 1, label: 'programer' },
        { number: 2, label: 'designer' },
        { number: 3, label: 'manager' },
        { number: 4, label: 'analyst' }
      ],
      WorkplaceFields: [
        { number: 1, label: 'Bangkok' },
        { number: 2, label: 'Chiang Mai' },
        { number: 3, label: 'Phuket' },
        { number: 4, label: 'Khon Kaen' }
      ],
      previewUrl: null,
      isProfileComplete: false,
      // date
      menu1: false,
      date1: null,
      formattedDate1: '',
      menu2: false,
      date2: null,
      formattedDate2: '',
      menu3: false,
      date3: null,
      formattedDate3: '',
      // gender
      selectedGender: null
    }
  },
  computed: {
    todayDate () {
      return new Date().toISOString().substr(0, 10)
    },
    calculatedAge () {
      if (!this.date3) { return '' }
      const today = new Date()
      const birth = new Date(this.date3)
      let age = today.getFullYear() - birth.getFullYear()
      const monthDiff = today.getMonth() - birth.getMonth()
      // ถ้ายังไม่ถึงเดือนเกิด หรือถึงเดือนเกิดแต่ยังไม่ถึงวันเกิด ให้ลบ 1 ปี
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--
      }
      return age.toString()
    }
  },
  methods: {
    updateDate1 (val) {
      const d = new Date(val)
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
      this.formattedDate1 = d.toLocaleDateString('th-TH', options)
      this.menu1 = false
    },
    updateDate2 (val) {
      const d = new Date(val)
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
      this.formattedDate2 = d.toLocaleDateString('th-TH', options)
      this.menu2 = false
    },
    updateDate3 (val) {
      const d = new Date(val)
      const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
      this.formattedDate3 = d.toLocaleDateString('th-TH', options)
      this.menu3 = false
    },
    isNumber (evt) {
      const charCode = evt.which ? evt.which : evt.keyCode
      // อนุญาตเฉพาะตัวเลข 0-9
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault()
      }
    },
    triggerFileInput () {
      this.$refs.fileInput.click()
    },
    onFileChange (event) {
      const file = event.target.files[0]
      if (file) {
        if (this.previewUrl) {
          URL.revokeObjectURL(this.previewUrl)
        }
        this.previewUrl = URL.createObjectURL(file)
      }
      this.isProfileComplete = true
    },
    formatSalary (value, type) {
      const inputValue = typeof value === 'string' ? value : value.target.value
      const numValue = inputValue.replace(/\D/g, '')
      if (!numValue) {
        if (type === 'from') {
          this.salaryFromDisplay = ''
          this.salaryFrom = 0
        } else {
          this.salaryToDisplay = ''
          this.salaryTo = 0
        }
        this.validateSalary()
        return
      }
      const num = parseInt(numValue)
      const formatted = num.toLocaleString('en-US')
      if (type === 'from') {
        this.salaryFromDisplay = formatted
        this.salaryFrom = num
      } else {
        this.salaryToDisplay = formatted
        this.salaryTo = num
      }
      // Validate real-time
      this.validateSalary()
    },
    validateSalary () {
      // Reset errors
      this.salaryFromError = false
      this.salaryFromErrorMessage = ''
      this.salaryToError = false
      this.salaryToErrorMessage = ''
      // ตรวจสอบว่ากรอกข้อมูล
      if (!this.salaryFrom && this.salaryTo) {
        this.salaryFromError = true
        this.salaryFromErrorMessage = 'กรุณากรอกเงินเดือนต่ำสุด'
        return false
      }
      if (this.salaryFrom && !this.salaryTo) {
        this.salaryToError = true
        this.salaryToErrorMessage = 'กรุณากรอกเงินเดือนสูงสุด'
        return false
      }
      // ตรวจสอบว่าเงินเดือนสูงสุดมากกว่าหรือเท่ากับต่ำสุด
      if (this.salaryFrom && this.salaryTo && this.salaryTo < this.salaryFrom) {
        this.salaryToError = true
        this.salaryToErrorMessage = 'เงินเดือนสูงสุดต้องมากกว่าหรือเท่ากับเงินเดือนต่ำสุด'
        return false
      }
      // ตรวจสอบว่าไม่ติดลบ
      if (this.salaryFrom < 0) {
        this.salaryFromError = true
        this.salaryFromErrorMessage = 'เงินเดือนต้องเป็นจำนวนบวก'
        return false
      }
      if (this.salaryTo < 0) {
        this.salaryToError = true
        this.salaryToErrorMessage = 'เงินเดือนต้องเป็นจำนวนบวก'
        return false
      }
      return true
    }
  }
}
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
  border: 1px solid #58A144 !important;
  border-radius: 50% ;
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
  border: 2px dashed #4CAF50;
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
</style>
