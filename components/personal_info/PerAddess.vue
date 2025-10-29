<template>
  <div class="form-first-section">
    <div class="form-title-section">
      <p>ที่อยู่ปัจจุบัน / Present address</p>
    </div>
    <div class="form-input-section">
      <div class="radio-butt">
        <RadioButton
          :label-th="null"
          group="ที่อยู่"
          :choices="{
            ใช้ที่อยู่เดียวกับที่อยู่ตามบัตรประชาชน: null,
          }"
          height="20px"
          maxWidth="220px"
          :toggle="true"
        />
        <p>Copy all field from Registered Address</p>
      </div>
      <div>
        <InputBox
          label-th="บ้านเลขที่"
          label-en="Address"
          :required="true"
          placeholder="บ้านเลขที่"
          max-width="120px"
        />

        <InputBox label-th="หมู่ที่" placeholder="0" max-width="40px" />

        <InputBox
          label-th="ถนน/ซอย"
          label-en="Street"
          placeholder="ระบุถนน/ซอย"
          max-width="240px"
        />

        <Dropdown
          label-th="จังหวัด"
          label-en="Province"
          :required="true"
          placeholder="เลือกจังหวัด"
          max-width="180px"
          :choices="['โคราช', 'นครราชสีมา', 'ราชสีมาวิทยาลัย']"
        />

        <Dropdown
          label-th="เขต/อำเภอ"
          label-en="District "
          :required="true"
          placeholder="เลือกเขต/อำเภอ"
          max-width="180px"
          :choices="['เมือง', 'ปากช่อง', 'พิมาย', 'ปากหมา']"
        />

        <Dropdown
          label-th="แขวง/ตำบล"
          label-en=""
          :required="true"
          placeholder="เลือกแขวง/ตำบล"
          max-width="180px"
          :choices="['A', 'B', 'AB', 'O']"
        />
      </div>
      <div>
        <InputBox
          label-th="รหัสไปรษณีย์"
          label-en="Postal code"
          :required="true"
          placeholder="0000"
          max-width="156px"
        />
      </div>
    </div>
  </div>
</template>

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
  height: 260px;
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
  height: 220px;
  max-width: 1064px;
  padding: 24px 16px 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.form-input-section > div {
  width: 100%;
  height: 56px;
  max-width: 1032px;
  display: flex;
  justify-content: space-between;
}

.form-input-section > .radio-butt {
  width: 100%;
  height: 20px;
  max-width: 417px;
  display: flex;
  align-items: center;
}

.radio-butt p {
  color: grey;
  font-weight: 400;
  font-family: "Sarabun", sans-serif;
  line-height: 16px;
  font-size: 12px;
  margin: 0px;
}
</style>
