<template>
  <div class="form-first-section">
    <div class="form-title-section">
      <p>
        ประวัติการศึกษา / Education background
        <span style="color: red">*</span>
      </p>
    </div>
    <div
      class="form-input-section"
      v-for="(item, index) in education_info"
      :key="index"
      :class="{ 'first-form-input-section': index === 0 }"
    >
      <div>
        <Dropdown
          label-th="ระดับการศึกษา"
          label-en="Level"
          placeholder="เลือกระดับการศึกษา"
          max-width="250px"
          height="56px"
          :choices="['ปริญญาตรี', 'ปริญญาโท', 'ปริญญาเอก']"
          v-model="item.Level"
          :changeAble="false"
        />

        <InputBox
          label-th="ชื่อสถานศึกษา"
          label-en="Institute"
          placeholder="ระบุชื่อสถานศึกษา"
          max-width="516px"
          height="56px"
          v-model="item.Institute"
          :changeAble="false"
        />

        <div class="edu-year-section">
          <div class="edu-year-section-title">
            <span>ปีที่เริ่มศึกษา-ปีที่จบ</span>
            <span>Start year - End year</span>
          </div>
          <div class="edu-year-section-date">
            <date-picker
              height="32px"
              maxWidth="114px"
              locale="th"
              date-format="th-TH"
              v-model="item.StartYear"
              :changeAble="false"
              placeholder="2560"
            />
            <p>-</p>
            <date-picker
              height="32px"
              maxWidth="114px"
              locale="th"
              date-format="th-TH"
              v-model="item.EndYear"
              :changeAble="false"
              placeholder="2560"
            />
          </div>
        </div>
      </div>
      <div>
        <InputBox
          label-th="วุฒิการศึกษา"
          label-en="Qualifications"
          placeholder="0000"
          v-model="item.Qualifications"
          :changeAble="false"
        />

        <InputBox
          label-th="สาขาวิชา"
          label-en="Major"
          placeholder="ระบุสาขาวิชา"
          v-model="item.Major"
          :changeAble="false"
        />

        <InputBox
          label-th="คณะ"
          label-en="Faculty"
          placeholder="ระบุคณะ"
          v-model="item.Faculty"
          :changeAble="false"
        />

        <InputBox
          label-th="เกรดเฉลี่ย"
          label-en="G.P.A"
          placeholder="ระบุเกรดเฉลี่ย"
          type="number"
          v-model="item.GPA"
          :changeAble="false"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "../../Dropdown.vue";
import InputBox from "../../InputBox.vue";
import DatePicker from "../../DatePicker.vue";
export default {
  layout: "form",

  data() {
    return {
      education_info: [
        {
          Level: "",
          Institute: "",
          StartYear: "",
          EndYear: "",
          Qualifications: "",
          Major: "",
          Faculty: "",
          GPA: "",
        },
      ],
      myDate: "",
    };
  },
  components: {
    Dropdown,
    InputBox,
    DatePicker,
  },

  mounted() {
    const storeData = this.$store.state.pages;
    if (storeData[2] && storeData[2].length > 0) {
      this.education_info = JSON.parse(JSON.stringify(storeData));
      this.education_info = this.education_info[2];
      console.log("HIIIIIIIII");
    }
  },
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
  padding: 24px 24px 0px 24px;
}

div.form-first-section {
  width: 100%;
  min-height: 200px;
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
  height: 176px;
  padding: 0px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 24px;
  border-bottom: 1px solid #f2f2f2;
}

div.first-form-input-section {
  padding: 24px 16px 24px 16px;
}

.form-input-section > div {
  width: 100%;
  height: 56px;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
}

.edu-year-section {
  width: 100%;
  max-width: 250px;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.edu-year-section-title {
  width: 100%;
  max-width: 250px;
  height: 16px;
}
.edu-year-section-title > span {
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  font-size: 12px;
}
.edu-year-section-title > span:nth-child(2) {
  color: #989898;
}

.edu-year-section-date {
  width: 100%;
  max-width: 250px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
