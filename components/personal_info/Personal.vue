<template>
  <div class="form-first-section">
    <div class="form-title-section">
      <p>ประวัติส่วนตัว / Personal</p>
    </div>
    <div class="form-input-section">
      <div class="upload-section">
        <div>
          <div class="upload-area">
            <input type="file" />
            <svg
              width="40"
              height="27"
              viewBox="0 0 40 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.25 10.0667C31.6902 7.22953 30.1627 4.67476 27.9284 2.83874C25.6942 1.00272 22.8918 -0.000653737 20 3.19561e-07C15.1833 3.19561e-07 11 2.73333 8.91667 6.73333C6.46706 6.99805 4.20168 8.15868 2.55581 9.9922C0.909952 11.8257 -0.00028617 14.2028 6.74879e-08 16.6667C6.74879e-08 19.3188 1.05357 21.8624 2.92893 23.7377C4.8043 25.6131 7.34784 26.6667 10 26.6667H31.6667C32.761 26.6667 33.8447 26.4511 34.8557 26.0323C35.8667 25.6135 36.7854 24.9997 37.5592 24.2259C38.333 23.4521 38.9469 22.5334 39.3657 21.5224C39.7845 20.5113 40 19.4277 40 18.3333C40 13.9333 36.5833 10.3667 32.25 10.0667ZM31.6667 23.3333H10C8.23189 23.3333 6.5362 22.631 5.28595 21.3807C4.03571 20.1305 3.33333 18.4348 3.33333 16.6667C3.33333 13.25 5.88333 10.4 9.26667 10.05L11.05 9.86667L11.8833 8.28333C12.6498 6.7913 13.8131 5.53969 15.2452 4.66632C16.6773 3.79296 18.3226 3.3317 20 3.33333C24.3667 3.33333 28.1333 6.43333 28.9833 10.7167L29.4833 13.2167L32.0333 13.4C33.2862 13.4843 34.4607 14.04 35.3204 14.9553C36.18 15.8706 36.6611 17.0776 36.6667 18.3333C36.6667 19.6594 36.1399 20.9312 35.2022 21.8689C34.2645 22.8065 32.9927 23.3333 31.6667 23.3333ZM13.3333 15H17.5833V20H22.4167V15H26.6667L20 8.33333L13.3333 15Z"
                fill="#58A144"
              />
            </svg>
          </div>
          <p class="thai-text">อัปโหลดรูปประจำตัว</p>
          <p class="eng-text">Upload Profile image</p>
        </div>
      </div>
      <div class="upper-section">
        <div>
          <div class="radio-butt">
            <RadioButton
              label-th="คำนำหน้าชื่อ"
              group="คำนำหน้าชื่อ"
              :required="true"
              :choices="{ นาย: null, นาง: null, นางสาว: null }"
            />
          </div>
          <div class="input-box">
            <InputBox
              label-th="ชื่อ (ภาษาไทย)"
              :required="true"
              placeholder="ชื่อ (ภาษาไทย)"
            />

            <InputBox
              label-th="นามสกุล (ภาษาไทย)"
              :required="true"
              placeholder="นามสกุล (ภาษาไทย)"
            />

            <InputBox
              label-th="ชื่อเล่น (ภาษาไทย)"
              :required="true"
              placeholder="ชื่อเล่น (ภาษาไทย)"
              maxWidth="280px"
            />
          </div>
        </div>
        <div>
          <div class="radio-butt">
            <RadioButton
              label-th="Name title"
              group="Name title"
              :required="true"
              :choices="{ 'Mr.': null, 'Mrs.': null, 'Ms.': null }"
            />
          </div>
          <div class="input-box">
            <InputBox label-th="Name" :required="true" placeholder="Name" />

            <InputBox
              label-th="Surname"
              :required="true"
              placeholder="Surname"
            />

            <InputBox
              label-th="Nickname"
              :required="true"
              placeholder="Nickname"
              maxWidth="280px"
            />
          </div>
        </div>

        <div>
          <div class="input-box">
            <InputBox
              label-th="หมายเลขบัตรประชาชน"
              label-en="I.D. Card No."
              :required="true"
              placeholder="0-0000-00000-00-0"
            />

            <InputBox
              label-th="ออกบัตรโดยเขต/อำเภอ"
              :required="true"
              placeholder="ระบุเขต/อำเภอที่ออกบัตร"
            />

            <InputBox
              label-th="วันที่ออกบัตร"
              label-en="Issue date"
              :required="true"
              placeholder="วว/ดด/ปปปป"
              maxWidth="135px"
              height="32px"
            />

            <InputBox
              label-th="วันที่หมดอายุ "
              label-en="Expiry date"
              Expiry
              date
              :required="true"
              placeholder="วว/ดด/ปปปป"
              maxWidth="135px"
              height="32px"
            />
          </div>
        </div>
      </div>
      <div class="lower-section">
        <div>
          <InputBox
            label-th="วันเกิด"
            label-en="Date of Birth"
            :required="true"
            placeholder="วว/ดด/ปปปป"
            max-width="132px"
          />
          <div class="input-unit">
            <InputBox
              label-th="อายุ"
              label-en="Age"
              placeholder="0"
              max-width="54px"
            />
            <div
              style="
                max-width: 19px;
                width: 100%;
                height: 32px;
                margin: 0px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              "
            >
              <p class="unit-th">ปี.</p>
              <p class="unit-en">years.</p>
            </div>
          </div>

          <div class="input-unit">
            <InputBox
              label-th="ส่วนสูง"
              label-en="Height"
              placeholder="0"
              max-width="75px"
            />
            <div
              style="
                max-width: 19px;
                width: 100%;
                height: 32px;
                margin: 0px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              "
            >
              <p class="unit-th">ซม.</p>
              <p class="unit-en">cm.</p>
            </div>
          </div>

          <div class="input-unit">
            <InputBox
              label-th="น้ำหนัก"
              label-en="weight"
              placeholder="0"
              max-width="82px"
            />
            <div
              style="
                max-width: 19px;
                width: 100%;
                height: 32px;
                margin: 0px;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
              "
            >
              <p class="unit-th">กก.</p>
              <p class="unit-en">kg.</p>
            </div>
          </div>

          <Dropdown
            label-th="หมู่เลือด"
            label-en="Blood Group"
            placeholder="เลือกหมู่เลือด"
            max-width="120px"
            :choices="['A', 'B', 'AB', 'O']"
          />
          <InputBox
            label-th="โรคประจำตัว"
            label-en="Any physical disability or disease?"
            placeholder="ระบุโรคประจำตัว"
            max-width="399px"
          />
        </div>
        <div>
          <InputBox
            label-th="สัญชาติ"
            label-en="Nationality"
            placeholder="ระบุสัญชาติ"
          />
          <InputBox
            label-th="เชื้อชาติ"
            label-en="Race"
            placeholder="ระบุเชื้อชาติ"
          />
          <InputBox
            label-th="ศาสนา"
            label-en="Religion"
            placeholder="ระบุศาสนา"
          />
        </div>
        <div>
          <RadioButton
            label-th="สถานภาพ"
            label-en="Marrried Status"
            group="สถานภาพ"
            :choices="{ โสด: 'Single', สมรส: 'Maried', หย่าร้าง: 'Divorce' }"
            maxWidth="371px"
            height="32px"
          />

          <RadioButton
            label-th="สถานะทางทหาร"
            label-en="Military Service"
            group="สถานะทางทหาร"
            :choices="{
              ได้รับการยกเว้น: 'Exempted',
              ศึกษาวิชาทหาร: 'Military Studies',
              ผ่านการเกณฑ์ทหาร: 'Discharged',
              อื่นๆ: 'Others',
            }"
            maxWidth="599px"
            height="32px"
          />
        </div>
        <div>
          <InputBox
            label-th="เบอร์โทรศัพท์"
            label-en="Telephone No."
            placeholder="090-000-0000"
          />
          <InputBox
            label-th="อีเมล"
            label-en="Email"
            placeholder="HR_inet@one.th"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<InputBox />
<script>
import Dropdown from "../Dropdown.vue";
import InputBox from "../InputBox.vue";
import RadioButton from "../RadioButton.vue";
export default {
  components: {
    Dropdown,
    InputBox,
    RadioButton,
  },
};
</script>

<style scoped>
div.form-first-section {
  width: 100%;
  height: 704px;
  max-width: 1064px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px #00000029;
  border-radius: 8px;
  margin-top: 16px;
}

div.form-title-section {
  width: 100%;
  height: 40px;
  max-width: 1064px;
  background-color: #f0f9ee;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 9px 0px 9px 16px;
  box-sizing: border-box;
}

div.form-title-section > p {
  color: #58a144;
  font-weight: 600;
  font-family: "Sarabun", sans-serif;
  line-height: 22px;
  font-size: 14px;
  margin: auto;
}

div.form-input-section {
  width: 100%;
  height: 664px;
  max-width: 1064px;
  margin: auto;

  display: grid;
  grid-template-areas:
    "image upper"
    "lower lower";

  grid-template-columns: 1fr 3fr;
  grid-template-rows: 4fr 6fr;
}

.upload-section {
  width: 100%;
  height: 100%;
  grid-area: image;
  margin: 0px;
}

.upload-section > div {
  width: 100%;
  max-width: 184px;
  height: 254px;
  margin: 18px auto 40px auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.upload-area {
  width: 100%;
  max-width: 184px;
  height: 198px;
  opacity: 1;
  border: 1px solid #58a144;
  border-width: 1px;
  border-radius: 4px;
  border-style: dashed;
  background-color: #f0f9ee;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}

.upload-area input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0; /* invisible but still clickable */
  cursor: pointer;
}

.upload-section p {
  margin: 0px;
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  font-size: 12px;
}

.upload-section p.thai-text {
  color: #58a144;
}

.upload-section p.eng-text {
  color: #989898;
}

.upper-section {
  width: 100%;
  height: 100%;
  grid-area: upper;
  margin: 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.upper-section > div {
  width: 100%;
  height: 84px;
  max-width: 780px;
  margin: 0px;
}

.upper-section div:nth-child(3) {
  width: 100%;
  height: 56px;
  max-width: 780px;
  margin-bottom: 8px;
}

/* first group’s radio */
.upper-section > div:nth-child(1) .radio-butt {
  width: 100%;
  height: 20px;
  max-width: 316px;
  margin-bottom: 8px;
}

/* second (last) group’s radio */
.upper-section > div:nth-child(2) .radio-butt {
  width: 100%;
  height: 20px;
  max-width: 289px;
  margin-bottom: 8px;
}

.upper-section .input-box {
  width: 100%;
  height: 56px;

  display: flex;
  justify-content: space-between;
}

.lower-section {
  width: 100%;
  height: 100%;
  grid-area: lower;
  margin: 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.lower-section > div {
  width: 100%;
  margin: 0px;
  margin-left: 16px;

  display: flex;
  justify-content: space-between;
}

.lower-section > div:nth-child(1) {
  height: 56px;
  max-width: 1032px;
}

.lower-section > div:nth-child(2) {
  height: 56px;
  max-width: 728px;
}

.lower-section > div:nth-child(3) {
  height: 88px;
  max-width: 599px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.lower-section > div:nth-child(4) {
  height: 56px;
  max-width: 480px;
  margin-bottom: 24px;
}

.input-unit {
  max-width: 84px;
  width: 100%;
  height: 56px;
  margin: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.input-unit:nth-of-type(3) {
  max-width: 105px;
}

.input-unit:nth-of-type(4) {
  max-width: 112px;
}
.unit-th {
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  font-size: 12px;
  margin: 0px;
  color: #333333;
}

.unit-en {
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  font-size: 12px;
  margin: 0px;
  color: #989898;
}
</style>

105px 112px
