<template>
  <div>
    <div class="form-first-section">
      <div class="form-title-section">
        <p>ประวัติบิดา / Father</p>
      </div>
      <div class="form-input-section">
        <div class="name-title">
          <radio-button
            labelTh="คำนำหน้าชื่อ"
            labelEn="Name title"
            :required="true"
            :choices="{ นาย: null }"
            group="father"
            height="20px"
            maxWidth="300px"
            v-model="fatherInfo.nameTitle"
          />
        </div>
        <div class="name-section">
          <InputBox
            label-th="ชื่อ"
            label-en="Name"
            :required="true"
            placeholder="ชื่อ(ภาษาไทย)"
            v-model="fatherInfo.name"
            max-width="333px"
          />

          <InputBox
            label-th="นามสกุล"
            label-en="Surename"
            :required="true"
            placeholder="นามสกุล(ภาษาไทย)"
            v-model="fatherInfo.sureName"
            max-width="333px"
          />

          <InputBox
            label-th="อาชีพ"
            label-en="Job"
            :required="true"
            placeholder="ระบุอาชีพ"
            v-model="fatherInfo.job"
            max-width="333px"
          />
        </div>
        <div class="tel-section">
          <InputBox
            label-th="วุฒิการศึกษา"
            label-en="Qualifications"
            placeholder="ระบุวุฒิการศึกษา เช่น วิทยาศาสตร์บัณฑิต"
            v-model="fatherInfo.qualifications"
          />

          <InputBox
            label-th="สาขาวิชา"
            label-en="Major"
            placeholder="ระบุสาขาวิชา"
            v-model="fatherInfo.major"
          />

          <InputBox
            label-th="คณะ"
            label-en="Faculty"
            placeholder="ระบุคณะ"
            v-model="fatherInfo.faculty"
          />

          <InputBox
            label-th="เกรดเฉลี่ย"
            label-en="G.P.A"
            placeholder="ระบุเกรดเฉลี่ย"
            v-model="fatherInfo.gpa"
          />
        </div>
      </div>
    </div>

    <div class="form-first-section">
      <div class="form-title-section">
        <p>ประวัติมารดา / Mother</p>
      </div>
      <div class="form-input-section">
        <div class="name-title">
          <radio-button
            labelTh="คำนำหน้าชื่อ"
            labelEn="Name title"
            :required="true"
            :choices="{ นาง: null, นางสาว: null }"
            group="mother"
            height="20px"
            maxWidth="300px"
            v-model="motherInfo.nameTitle"
          />
        </div>
        <div class="name-section">
          <InputBox
            label-th="ชื่อ"
            label-en="Name"
            :required="true"
            placeholder="ชื่อ(ภาษาไทย)"
            v-model="motherInfo.name"
            max-width="333px"
          />

          <InputBox
            label-th="นามสกุล"
            label-en="Surename"
            :required="true"
            placeholder="นามสกุล(ภาษาไทย)"
            v-model="motherInfo.sureName"
            max-width="333px"
          />

          <InputBox
            label-th="อาชีพ"
            label-en="Job"
            :required="true"
            placeholder="ระบุอาชีพ"
            v-model="motherInfo.job"
            max-width="333px"
          />
        </div>
        <div class="tel-section">
          <InputBox
            label-th="วุฒิการศึกษา"
            label-en="Qualifications"
            placeholder="ระบุวุฒิการศึกษา เช่น วิทยาศาสตร์บัณฑิต"
            v-model="motherInfo.qualifications"
          />

          <InputBox
            label-th="สาขาวิชา"
            label-en="Major"
            placeholder="ระบุสาขาวิชา"
            v-model="motherInfo.major"
          />

          <InputBox
            label-th="คณะ"
            label-en="Faculty"
            placeholder="ระบุคณะ"
            v-model="motherInfo.faculty"
          />

          <InputBox
            label-th="เกรดเฉลี่ย"
            label-en="G.P.A"
            placeholder="ระบุเกรดเฉลี่ย"
            v-model="motherInfo.gpa"
          />
        </div>
      </div>
    </div>

    <div class="form-first-section">
      <div class="form-title-section">
        <p>
          บุคคลที่ให้ติดต่อได้โดยตรงกรณีฉุกเฉิน / Emergency Contact
          <span style="color: red">*</span>
        </p>
      </div>

      <div class="form-input-section">
        <div class="ermergency-input">
          <InputBox
            label-th="บุคคลที่ให้ติดต่อได้โดยตรงกรณีฉุกเฉิน"
            label-en="Fullname"
            placeholder="ระบุชื่อ-นามสกุล"
            v-model="emergencyInfo.fullName"
            max-width="333px"
          />

          <InputBox
            label-th="ความสัมพันธ์"
            label-en="Relationship"
            placeholder="ระบุความสัมพันธ์"
            v-model="emergencyInfo.relation"
            max-width="333px"
          />

          <InputBox
            labelTh="เบอร์โทรศัพท์"
            labelEn="Telephone"
            placeholder="090-000-0000"
            v-model="emergencyInfo.tel"
            max-width="333px"
          />
        </div>

        <radio-button
          :choices="{
            ใช้ที่อยู่เดียวกับที่อยู่ตามบัตรประชาชน:
              'Copy all filed Registered Address',
          }"
          group="emergency"
          height="20px"
          maxWidth="390px"
          v-model="thaiIDinfo"
        />

        <InputBox
          label-th="สถานที่ติดต่อ"
          label-en="Address"
          placeholder="ระบุที่อยู่"
          max-width="1032px"
          v-model="emergencyInfo.address"
        />
      </div>
    </div>
  </div>
</template>

<script>
import RadioButton from "../../RadioButton.vue";
import InputBox from "../../InputBox.vue";
export default {
  layout: "form",
  components: { RadioButton, InputBox },
  data() {
    return {
      testDate: null,
      fatherInfo: {
        nameTitle: "",
        sureName: "",
        name: "",
        sureName: "",
        job: "",
        qualifications: "",
        major: "",
        faculty: "",
        gpa: "",
      },

      motherInfo: {
        nameTitle: "",
        sureName: "",
        name: "",
        sureName: "",
        job: "",
        qualifications: "",
        major: "",
        faculty: "",
        gpa: "",
      },

      emergencyInfo: {
        fullName: "",
        relation: "",
        tel: "",
        address: "",
      },

      thaiIDinfo: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
div.form-first-section {
  width: 100%;
  min-height: 236px;
  max-width: 1080px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px #00000029;
  border-radius: 8px;
  margin-bottom: 16px;
}

div.form-title-section {
  width: 100%;
  height: 40px;
  background-color: #f0f9ee;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 9px 16px 9px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}

div.form-title-section p {
  color: #58a144;
  font-weight: 600;
  font-family: "Sarabun", sans-serif;
  line-height: 22px;
  font-size: 14px;
}

div.form-input-section {
  width: 100%;
  height: 196px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 1px solid #f2f2f2;
}

.name-title {
  width: 100%;
  max-width: 1032px;
  height: 20px;
}

.name-section {
  width: 100%;
  max-width: 1032px;
  height: 56px;
  display: flex;
  justify-content: space-between;
}

.tel-section {
  width: 100%;
  max-width: 1032px;
  height: 56px;
  display: flex;
  justify-content: space-between;
}

.ermergency-input {
  width: 100%;
  max-width: 1032px;
  height: 56px;
  display: flex;
  justify-content: space-between;
}
</style>
