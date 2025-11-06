<template>
  <div class="form-body">
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
            label-th="เบอร์โทรศัพท์"
            label-en="Telephone"
            :required="true"
            placeholder="090-000-0000"
            v-model="fatherInfo.tel"
            max-width="508px"
          />

          <InputBox
            label-th="ที่อยู่/สถานที่ทำงาน"
            label-en="Address"
            placeholder="ระบุที่อยู่/สถานที่ทำงาน"
            v-model="fatherInfo.address"
            max-width="508px"
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
            label-th="เบอร์โทรศัพท์"
            label-en="Telephone"
            :required="true"
            placeholder="090-000-0000"
            v-model="motherInfo.tel"
            max-width="508px"
          />

          <InputBox
            label-th="ที่อยู่/สถานที่ทำงาน"
            label-en="Address"
            placeholder="ระบุที่อยู่/สถานที่ทำงาน"
            v-model="motherInfo.address"
            max-width="508px"
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
import RadioButton from "../components/RadioButton.vue";
import InputBox from "../components/InputBox.vue";
export default {
  layout: "form",
  components: { RadioButton, InputBox },
  data() {
    return {
      fatherInfo: {
        nameTitle: "",
        sureName: "",
        name: "",
        sureName: "",
        job: "",
        tel: "",
        address: "",
      },

      motherInfo: {
        nameTitle: "",
        sureName: "",
        name: "",
        sureName: "",
        job: "",
        tel: "",
        address: "",
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

  mounted() {
    const storeData = this.$store.state.pages;
    console.log("mount" + storeData);
    if (storeData[3] && storeData[3].length > 0) {
      const familyData = JSON.parse(JSON.stringify(storeData));
      console.log("FAMMMMM" + familyData);
      this.fatherInfo = familyData[0];
      this.motherInfo = familyData[1];
      this.emergencyInfo = familyData[2];
    }
  },

  beforeDestroy() {
    this.$store.commit("SET_FAMILY_DATA", [
      this.fatherInfo,
      this.motherInfo,
      this.emergencyInfo,
    ]);
  },
  methods: {},
};
</script>

<style scoped>
div.form-body {
  width: 100%;
  max-width: 1128px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #00000029;
  box-sizing: border-box;
  padding: 24px 32px 8px 32px;
}

div.form-first-section {
  width: 100%;
  min-height: 236px;
  max-width: 1064px;
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
