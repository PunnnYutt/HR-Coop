<template>
  <div class="form-body">
    <div class="form-first-section">
      <div class="form-title-section">
        <p>
          ประวัติการศึกษา / Education background
          <span style="color: red">*</span>
        </p>
        <div class="form-title-section-add">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00016 4.66634C7.6335 4.66634 7.3335 4.96634 7.3335 5.33301V7.33301H5.3335C4.96683 7.33301 4.66683 7.63301 4.66683 7.99967C4.66683 8.36634 4.96683 8.66634 5.3335 8.66634H7.3335V10.6663C7.3335 11.033 7.6335 11.333 8.00016 11.333C8.36683 11.333 8.66683 11.033 8.66683 10.6663V8.66634H10.6668C11.0335 8.66634 11.3335 8.36634 11.3335 7.99967C11.3335 7.63301 11.0335 7.33301 10.6668 7.33301H8.66683V5.33301C8.66683 4.96634 8.36683 4.66634 8.00016 4.66634ZM8.00016 1.33301C4.32016 1.33301 1.3335 4.31967 1.3335 7.99967C1.3335 11.6797 4.32016 14.6663 8.00016 14.6663C11.6802 14.6663 14.6668 11.6797 14.6668 7.99967C14.6668 4.31967 11.6802 1.33301 8.00016 1.33301ZM8.00016 13.333C5.06016 13.333 2.66683 10.9397 2.66683 7.99967C2.66683 5.05967 5.06016 2.66634 8.00016 2.66634C10.9402 2.66634 13.3335 5.05967 13.3335 7.99967C13.3335 10.9397 10.9402 13.333 8.00016 13.333Z"
              fill="#58A144"
            />
          </svg>

          <p @click="addEducation">เพิ่มประวัติการศึกษา</p>
        </div>
      </div>
      <div
        class="form-input-section"
        v-for="(item, index) in education_info"
        :key="index"
        :class="{ 'first-form-input-section': index === 0 }"
      >
        <div class="form-input-section-delete" v-if="index !== 0">
          <div class="delete-button" @click="delEducation(index)">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00016 12.6667C4.00016 13.0203 4.14064 13.3594 4.39069 13.6095C4.64074 13.8595 4.97987 14 5.3335 14H10.6668C11.0205 14 11.3596 13.8595 11.6096 13.6095C11.8597 13.3594 12.0002 13.0203 12.0002 12.6667V4.66667H4.00016V12.6667ZM5.3335 6H10.6668V12.6667H5.3335V6ZM10.3335 2.66667L9.66683 2H6.3335L5.66683 2.66667H3.3335V4H12.6668V2.66667H10.3335Z"
                fill="#989898"
              />
            </svg>
          </div>
        </div>
        <div>
          <Dropdown
            label-th="ระดับการศึกษา"
            label-en="Level"
            placeholder="เลือกระดับการศึกษา"
            max-width="250px"
            height="56px"
            :choices="['ปริญญาตรี', 'ปริญญาโท', 'ปริญญาเอก']"
            v-model="item.Level"
          />

          <InputBox
            label-th="ชื่อสถานศึกษา"
            label-en="Institute"
            placeholder="ระบุชื่อสถานศึกษา"
            max-width="516px"
            height="56px"
            v-model="item.Institute"
          />

          <div class="edu-year-section">
            <div class="edu-year-section-title">
              <span>ปีที่เริ่มศึกษา-ปีที่จบ</span>
              <span>Start year - End year</span>
            </div>
            <div class="edu-year-section-date">
              <date-picker
                placeholder="วว/ดด/ปปปป"
                height="32px"
                maxWidth="114px"
                locale="th"
                date-format="th-TH"
                v-model="item.StartYear"
              />
              <p>-</p>
              <date-picker
                placeholder="วว/ดด/ปปปป"
                height="32px"
                maxWidth="114px"
                locale="th"
                date-format="th-TH"
                v-model="item.EndYear"
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
          />

          <InputBox
            label-th="สาขาวิชา"
            label-en="Major"
            placeholder="ระบุสาขาวิชา"
            v-model="item.Major"
          />

          <InputBox
            label-th="คณะ"
            label-en="Faculty"
            placeholder="ระบุคณะ"
            v-model="item.Faculty"
          />

          <InputBox
            label-th="เกรดเฉลี่ย"
            label-en="G.P.A"
            placeholder="ระบุเกรดเฉลี่ย"
            type="number"
            v-model="item.GPA"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";
import InputBox from "../components/InputBox.vue";
import DatePicker from "../components/DatePicker.vue";
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

  methods: {
    addEducation() {
      this.education_info.push({
        Level: "",
        Institute: "",
        StartYear: "",
        EndYear: "",
        Qualifications: "",
        Major: "",
        Faculty: "",
        GPA: "",
      });
      console.log(this.education_info);
    },
    delEducation(index) {
      this.education_info.splice(index, 1);
    },
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

div.form-title-section-add {
  width: 137px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-title-section-add > p {
  user-select: none;
}

.form-title-section-add > p:hover {
  text-decoration: underline;
  cursor: pointer;
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

.delete-button {
  width: 100%;
  max-width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;

  border-radius: 4px;
  border: 1px solid #f2f2f2;
  box-shadow: 0px 0px 4px 0px #0000000a;
}

.delete-button:hover {
  cursor: pointer;
  background-color: #cccccc;
}

.form-input-section > div.form-input-section-delete {
  width: 100%;
  max-width: 1080px;
  height: 32px;

  display: flex;
  justify-content: flex-end;
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
