<template>
  <v-row class="mx-md-0 mt-0 mb-4">
    <v-col class="mt-3 pa-0 mt-md-0 pb-md-0">
      <v-card
        rounded="lg"
        class="px-0 pt-0 mt-3 mt-md-0"
        :class="
          $vuetify.breakpoint.mdAndUp ? 'shadow-card' : 'shadow-card-none'
        "
      >
        <v-row no-gutters class="green lighten-5 pl-4 pr-0 py-9px">
          <v-col cols="10" class="d-flex align-center">
            <p
              class="primary--text lighten-1 text-body-2 mb-0 font-weight-medium"
            >
              สอบถามเพิ่มเติม / More Informations
              <span class="red--text">*</span>
            </p>
          </v-col>
        </v-row>
        <v-row no-gutters class="pl-4 py-4">
          <v-col cols="2">
            <v-row no-gutters>
              <p class="custom-label">
                ใบอนุญาตขับขี่ <span class="red--text">*</span>
              </p>
            </v-row>
            <v-row no-gutters>
              <p class="custom-label grey--text">Driving licence</p>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row no-gutters class="align-center readOnlyCheckbox">
              <v-col cols="4" class="pa-0">
                <v-checkbox
                  v-model="formData.drivingLicense.car"
                  dense
                  class="custom-radio"
                  readonly
                >
                  <template #label>
                    <v-col class="pa-0">
                      <p class="custom-label black--text">รถยนต์</p>
                      <p class="text-caption text--secondary">Car</p>
                    </v-col>
                  </template>
                </v-checkbox>
              </v-col>
              <v-col cols="4" class="pa-0">
                <v-checkbox
                  v-model="formData.drivingLicense.motorcycle"
                  dense
                  class="custom-radio"
                  readonly
                >
                  <template #label>
                    <v-col class="pa-0 custom-radio">
                      <p class="custom-label black--text">มอเตอร์ไซต์</p>
                      <p class="text-caption text--secondary">Motorcycle</p>
                    </v-col>
                  </template>
                </v-checkbox>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters class="pl-4 py-4 pb-0">
          <v-col cols="5">
            <v-row no-gutters>
              <p class="custom-label">
                ท่านสามารถไปปฎิบัติงานต่างจังหวัดได้หรือไม่
                <span class="red--text">*</span>
              </p>
            </v-row>
            <v-row no-gutters>
              <p class="custom-label grey--text">Can you work in upcountry?</p>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row no-gutters class="align-center">
              <v-col md="3" class="pl-md-0 pt-md-0">
                <v-radio-group
                  v-model="formData.workUpcountry"
                  row
                  class="color-label custom-label pl-md-0 mt-0 mt-md-0 readOnlyRadio"
                >
                  <v-col
                    cols="12"
                    md="5"
                    class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                  >
                    <v-radio
                      value="yes"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p>ได้</p>
                          <p class="text-caption text--secondary">Yes</p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-radio
                      value="no"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col cols="12" class="pa-0">
                          <p style="display: inline-block; white-space: nowrap">
                            ไม่ได้
                          </p>
                          <p class="text-caption text--secondary">No</p>
                        </v-col>
                      </template>
                    </v-radio>
                  </v-col>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters class="pl-4 py-4 pb-0">
          <v-col cols="5">
            <v-row no-gutters>
              <p class="custom-label">
                ท่านเคยให้ถูกออกจากงาน หรือเลิกจ้างหรือไม่
                <span class="red--text">*</span>
              </p>
            </v-row>
            <v-row no-gutters>
              <p class="custom-label grey--text">
                Have you ever been discharged from employment for any reason?
              </p>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row no-gutters class="align-center">
              <v-col md="3" class="pl-md-0 pt-md-0">
                <v-radio-group
                  v-model="formData.dischargedFromWork"
                  row
                  class="color-label custom-label pl-md-0 mt-0 mt-md-0 readOnlyRadio"
                >
                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                  >
                    <v-radio
                      value="no"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p style="display: inline-block; white-space: nowrap">
                            ไม่เคย
                          </p>
                          <p class="text-caption text--secondary">No</p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-radio
                      value="yes"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p>เคย</p>
                          <p class="text-caption text--secondary">Yes</p>
                        </v-col>
                      </template>
                    </v-radio>
                  </v-col>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters class="pl-4 py-4 pb-0">
          <v-col cols="5">
            <v-row no-gutters>
              <p class="custom-label">
                ท่านเคยถูกจำคุก หรือโทษทางอาญาหรือไม่
                <span class="red--text">*</span>
              </p>
            </v-row>
            <v-row no-gutters>
              <p class="custom-label grey--text">
                Have you ever been imprisoned or required indirectly?
              </p>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row no-gutters class="align-center">
              <v-col md="3" class="pl-md-0 pt-md-0">
                <v-radio-group
                  v-model="formData.imprisoned"
                  row
                  class="color-label custom-label pl-md-0 mt-0 mt-md-0 readOnlyRadio"
                >
                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                  >
                    <v-radio
                      value="no"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p style="display: inline-block; white-space: nowrap">
                            ไม่เคย
                          </p>
                          <p class="text-caption text--secondary">No</p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-radio
                      value="yes"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p>เคย</p>
                          <p class="text-caption text--secondary">Yes</p>
                        </v-col>
                      </template>
                    </v-radio>
                  </v-col>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters class="pl-4 py-4 pb-0">
          <v-col cols="5">
            <v-row no-gutters>
              <p class="custom-label">
                ท่านสูบบุหรี่หรือไม่ <span class="red--text">*</span>
              </p>
            </v-row>
            <v-row no-gutters>
              <p class="custom-label grey--text">Do you smoke cigarettes?</p>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row no-gutters class="align-center">
              <v-col md="3" class="pl-md-0 pt-md-0">
                <v-radio-group
                  v-model="formData.smoking"
                  row
                  class="color-label custom-label pl-md-0 mt-0 mt-md-0 readOnlyRadio"
                >
                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                  >
                    <v-radio
                      value="non-smoker"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p>ไม่สูบ</p>
                          <p
                            class="text-caption text--secondary"
                            style="display: inline-block; white-space: nowrap"
                          >
                            Non-smoker
                          </p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-radio
                      value="occasional"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p style="display: inline-block; white-space: nowrap">
                            สูบบางครั้ง
                          </p>
                          <p
                            class="text-caption text--secondary"
                            style="display: inline-block; white-space: nowrap"
                          >
                            Occasional smoker
                          </p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-radio
                      value="regular"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p style="display: inline-block; white-space: nowrap">
                            สูบเป็นประจํา
                          </p>
                          <p
                            class="text-caption text--secondary"
                            style="display: inline-block; white-space: nowrap"
                          >
                            Smoke regularly
                          </p>
                        </v-col>
                      </template>
                    </v-radio>
                  </v-col>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters class="pl-4 py-4 pb-0">
          <v-col cols="5">
            <v-row no-gutters>
              <p class="custom-label">
                ท่านดื่มเครื่องดื่มแอลกอฮอล์หรือไม่
                <span class="red--text">*</span>
              </p>
            </v-row>
            <v-row no-gutters>
              <p class="custom-label grey--text">
                Do you consume alcoholic beverages?
              </p>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row no-gutters class="align-center">
              <v-col md="3" class="pl-md-0 pt-md-0">
                <v-radio-group
                  v-model="formData.drinking"
                  row
                  class="color-label custom-label pl-md-0 mt-0 mt-md-0 readOnlyRadio"
                >
                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                  >
                    <v-radio
                      value="non-drinker"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p>ไม่ดื่ม</p>
                          <p
                            class="text-caption text--secondary"
                            style="display: inline-block; white-space: nowrap"
                          >
                            Non-drinker
                          </p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-radio
                      value="occasional"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p>ดื่มบางครั้ง</p>
                          <p
                            class="text-caption text--secondary"
                            style="display: inline-block; white-space: nowrap"
                          >
                            Occasional drinker
                          </p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-radio
                      value="regular"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p style="display: inline-block; white-space: nowrap">
                            ดื่มเป็นประจำ
                          </p>
                          <p
                            class="text-caption text--secondary"
                            style="display: inline-block; white-space: nowrap"
                          >
                            Regular drinker
                          </p>
                        </v-col>
                      </template>
                    </v-radio>
                  </v-col>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters class="pl-4 py-4 pb-0">
          <v-col cols="6">
            <v-row no-gutters>
              <p class="custom-label">
                ท่านมีข้อบกพร่องหรืออุปสรรคเกี่ยวกับร่างกาย
                หรืออวัยวะส่วนใดส่วนหนึ่งพิการหรือไม่
                <span class="red--text">*</span>
              </p>
            </v-row>
            <v-row no-gutters>
              <p class="custom-label grey--text">
                You have deficiencies or obstacles in the body. Or any part of
                the organ is deformed or not
              </p>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-row no-gutters class="align-center">
              <v-col md="3" class="pl-md-0 pt-md-0">
                <v-radio-group
                  v-model="formData.disability"
                  row
                  class="color-label custom-label pl-md-0 mt-0 mt-md-0 readOnlyRadio"
                >
                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                  >
                    <v-radio
                      value="no"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p style="display: inline-block; white-space: nowrap">
                            ไม่เคย
                          </p>
                          <p class="text-caption text--secondary">No</p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-radio
                      value="yes"
                      class="color-label custom-radio"
                      readonly
                    >
                      <template #label>
                        <v-col class="pa-0">
                          <p>เคย</p>
                          <p class="text-caption text--secondary">Yes</p>
                        </v-col>
                      </template>
                    </v-radio>
                  </v-col>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row no-gutters class="pl-4 py-4 pb-4">
          <v-col>
            <v-row no-gutters>
              <p class="custom-label pb-2">
                ท่านทราบข่าวสารการสมัครฝึกงานจาก
                <span class="grey--text"
                  >How did you hear about this Internship application?</span
                >
              </p>
            </v-row>
            <v-row no-gutters>
              <v-col cols="5" class="pt-0 pl-0 pr-md-4">
                <v-select
                  v-model="formData.howDidYouHear"
                  :items="howto"
                  multiple
                  item-text="label"
                  item-value="value"
                  outlined
                  dense
                  placeholder="เลือกข่าวสารการสมัครงาน"
                  :menu-props="{ maxHeight: 240 }"
                  chips
                  small-chips
                  readonly
                  append-icon=""
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip
                      v-if="index < 4"
                      small
                      color="green lighten-5"
                      text-color="primary"
                      class="ma-1"
                    >
                      {{ item.label }}
                    </v-chip>
                    <span
                      v-if="index === 4"
                      class="primary--text text-caption ml-2"
                    >
                      ...
                    </span>
                  </template>
                </v-select>
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
  mounted() {
    const storeData = this.$store.state.pages;
    if (storeData[5]["drivingLicense"]) {
      const vuexData = JSON.parse(JSON.stringify(storeData));
      this.formData = vuexData[5];
      this.formData.documents = [...this.$fileStore.docFile];
    }
  },
  data() {
    return {
      formData: {
        drivingLicense: {
          car: false,
          motorcycle: false,
        },
        workUpcountry: null,
        dischargedFromWork: null,
        imprisoned: null,
        smoking: null,
        drinking: null,
        disability: null,
        howDidYouHear: [],
        documents: [],
      },
      howto: [
        { value: "JobDB", label: "JobDB" },
        { value: "Linkln", label: "Linkln" },
        { value: "JobThai", label: "JobThai" },
        { value: "Work Life Cycle", label: "Work Life Cycle" },
        { value: "JobTopGun", label: "JobTopGun" },
        { value: "KhonKaenLink", label: "KhonKaenLink" },
        { value: "website", label: "เว็ปไซต์บริษัท" },
        { value: "Jobfinfin", label: "Jobfinfin" },
        { value: "Jobbkk", label: "Jobbkk" },
        { value: "TikTok", label: "TikTok" },
        { value: "Job.Gimyong", label: "Job.Gimyong" },
        { value: "contacted", label: "ได้รับการติดต่อจากบริษัท" },
        { value: "Job North Thailand", label: "Job North Thailand" },
        { value: "intern", label: "เคยเป็นนักศึกษาฝึกงาน" },
        { value: "jobfair", label: "Job Fair (ระบุมหาลัย)" },
        { value: "facebook", label: "Facebook (ระบุชื่อกลุ่ม/เพจ)" },
        {
          value: "friend",
          label: "เพื่อน/คนรู้จักในบริษัท (ระบุชื่อคนรู้จัก)",
        },
        { value: "other", label: "อื่นๆ (ระบุ)" },
      ],
      dialog: false,
      documentType: null,
      documentTypes: [
        "สำเนาบัตรประชาชน",
        "สำเนาทะเบียนบ้าน",
        "Transcript",
        "เอกสารอื่นๆ",
      ],
      uploadedFiles: [],
    };
  },
  watch: {
    formData: {
      handler(newVal) {
        console.log("Form data changed:", newVal);
        // You can emit to parent or perform other actions here
        this.$emit("input", newVal);
      },
      deep: true,
    },
  },
  methods: {
    formatDate(file) {
      const date = file.lastModified ? new Date(file.lastModified) : new Date();
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
    formatTime(file) {
      const date = file.lastModified ? new Date(file.lastModified) : new Date();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${hours}:${minutes}`;
    },
    handleUpload() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const files = Array.from(event.target.files);
      files.forEach((file) => {
        if (file.type === "application/pdf" && file.size <= 25 * 1024 * 1024) {
          this.uploadedFiles.push(file);
        } else {
          alert("กรุณาอัปโหลดไฟล์ PDF ขนาดไม่เกิน 25MB");
        }
      });
      this.$refs.fileInput.value = "";
    },
    removeFile(index) {
      this.uploadedFiles.splice(index, 1);
    },
    viewFile(file) {
      const url = URL.createObjectURL(file);
      window.open(url, "_blank");
    },
    downloadFile(file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(url);
    },
    formatFileSize(bytes) {
      if (bytes === 0) return "0 Bytes";
      const k = 1024;
      const sizes = ["Bytes", "KB", "MB", "GB"];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
    },
    submitDocument() {
      if (this.documentType && this.uploadedFiles.length > 0) {
        const currentDate = new Date();
        const dateStr = currentDate.toLocaleDateString("th-TH");
        const timeStr = currentDate.toLocaleTimeString("th-TH", {
          hour: "2-digit",
          minute: "2-digit",
        });

        this.uploadedFiles.forEach((file) => {
          this.formData.documents.push({
            name: file.name,
            type: this.documentType,
            date: dateStr,
            time: timeStr,
            size: this.formatFileSize(file.size),
            file: file,
          });
        });

        this.dialog = false;
        this.resetForm();
      }
    },
    viewDocument(doc) {
      if (doc.file) {
        const url = URL.createObjectURL(doc.file);
        window.open(url, "_blank");
      } else {
        alert("ไม่สามารถเปิดไฟล์ได้");
      }
    },
    downloadDocument(doc) {
      if (doc.file) {
        const url = URL.createObjectURL(doc.file);
        const a = document.createElement("a");
        a.href = url;
        a.download = doc.name;
        a.click();
        URL.revokeObjectURL(url);
      } else {
        alert("ไม่สามารถดาวน์โหลดไฟล์ได้");
      }
    },
    removeDocument(index) {
      if (confirm("คุณต้องการลบเอกสารนี้ใช่หรือไม่?")) {
        this.formData.documents.splice(index, 1);
      }
    },
    closeDialog() {
      this.dialog = false;
      this.resetForm();
    },
    resetForm() {
      this.documentType = null;
      this.uploadedFiles = [];
    },
  },
};
</script>

<style>
.readOnlyRadio .v-radio,
.readOnlyRadio .v-radio:hover,
.readOnlyRadio .v-radio:focus {
  cursor: default !important;
}

.readOnlyRadio .v-radio .v-input--selection-controls__ripple,
.readOnlyRadio .v-radio .v-ripple__container {
  display: none !important; /* hides the hover ripple */
}

.readOnlyRadio .v-radio input[type="radio"] {
  pointer-events: none; /* block interaction if needed */
}

/* 1. Target the Checkbox Component/Input area */
.readOnlyCheckbox .v-input--selection-controls {
  /* Prevent pointer/cursor interaction and change cursor appearance */
  cursor: default !important;
  pointer-events: none !important;
}

/* 2. Remove Hover/Focus effects and the Ripple */
.readOnlyCheckbox .v-input--selection-controls__ripple,
.readOnlyCheckbox
  .v-input--selection-controls__input:hover
  .v-input--selection-controls__ripple,
.readOnlyCheckbox .v-ripple__container {
  /* Hides the ripple effect on click and hover */
  display: none !important;
}

/* 3. Ensure the inner input element is untouchable (Optional but thorough) */
.readOnlyCheckbox input[type="checkbox"] {
  pointer-events: none;
}

/* 4. Visually dull the text (Optional) */
.readOnlyCheckbox label.v-label {
  opacity: 0.6; /* Dims the label text slightly */
}
</style>
