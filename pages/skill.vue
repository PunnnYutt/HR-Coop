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
                  <v-row no-gutters class="bg-header pl-4 pr-0 py-9px">
                    <v-col cols="10" class="d-flex align-center">
                      <p
                        class="primary--text lighten-1 text-body-2 mb-0 font-weight-medium"
                      >
                        ทักษะและความสามารถ (ทักษะทางคอมพิวเตอร์) / Computer
                        skills
                      </p>
                    </v-col>
                    <v-col cols="2" class="pl-6">
                      <v-btn
                        class="btn-add-skill primary--text ml-6 pl-2 pr-2 height-20px"
                        @click="addRowHandler"
                      >
                        <v-icon start class="icon-plus"
                          >mdi-plus-circle-outline</v-icon
                        >
                        <span class="text-body-2">เพิ่มทักษะ</span>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row
                    no-gutters
                    class="pl-3 pt-0"
                    v-for="(row, index) in rows"
                    :key="row.id"
                  >
                    <v-col>
                      <v-row v-if="index > 0" class="pr-3">
                        <v-divider></v-divider>
                      </v-row>
                      <v-row
                        no-gutters
                        :class="index == 0 ? 'pl-md-1' : 'pt-3 pl-1 mt-md-0'"
                      >
                        <v-col md="1" class="pt-4 px-0">
                          <v-col class="pa-0">
                            <p class="custom-label">ทักษะที่ {{ index + 1 }}</p>
                          </v-col>
                          <v-col class="px-0 pt-0 pb-0 mb-4">
                            <p class="text-caption grey--text lighten-5">
                              No {{ index + 1 }}.
                            </p>
                          </v-col>
                        </v-col>
                        <v-col md="4" class="pt-md-4 px-md-0">
                          <v-col class="pt-0 pl-0 pb-md-0 pr-md-4">
                            <v-text-field
                              outlined
                              dense
                              max-height="36px"
                              hide-details="auto"
                              class="ma-0 input-box"
                              placeholder="ระบุทักษะ"
                              v-model="row.skill"
                              :rules="[
                                  v => !!v || 'กรุณาระบุทักษะ',
                                ]"
                            />
                          </v-col>
                        </v-col>
                        <v-col md="1" class="px-0 pt-md-4">
                          <p class="custom-label">ระดับทักษะ :</p>
                          <p class="text-caption grey--text lighten-5">Skill level</p>
                        </v-col>
                        <v-col md="3" class="pl-md-0 pt-md-3">
                          <v-radio-group
                            v-model="row.choice"
                            row
                            :rules="[
                              v => !!v || '',
                            ]"
                            :class="index == rows.length - 1 ? 'remove-message color-label custom-label pl-md-0 mt-0 mt-md-0':'color-label custom-label pl-md-0 mt-0 mt-md-0'"
                          >
                            <v-col
                              cols="12"
                              md="4"
                              class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pb-md-2"
                            >
                              <v-radio
                                value="three"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="text-caption black--text" >ดีมาก</p>
                                    <p class="text-caption grey--text lighten-5">
                                      Excellent
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="one"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="text-caption black--text">ดี</p>
                                    <p class="text-caption grey--text lighten-5">
                                      Good
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="two"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="text-caption black--text">พอใช้</p>
                                    <p class="text-caption grey--text lighten-5">
                                      fair
                                    </p>
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
                            <v-icon color="grey" class="icon-delete"
                              >mdi-trash-can-outline</v-icon
                            >
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

  mounted() {
    const storeData = this.$store.state.pages;
    if (storeData[4] && storeData[4].length > 0) {
      const vuexData = JSON.parse(JSON.stringify(storeData));
      this.rows = vuexData[4];
    }
  },

  beforeDestroy() {
    this.$store.commit("SET_SKILL_DATA", this.rows);
  },

  data() {
    return {
      rows: [
        { id: 1, skill: "", choice: "" },
        { id: 2, skill: "", choice: "" },
        { id: 3, skill: "", choice: "" },
      ],
    };
  },
  methods: {
    addRowHandler() {
      this.rows.push({ id: Date.now(), skil: "", choice: "" });
    },
    removeRow(id) {
      this.rows = this.rows.filter((row) => row.id !== id);
    },
  },
};
</script>
<style scoped>
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

.v-application p {
  margin-bottom: 0px !important;
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
.btn-add-skill {
  box-shadow: none !important;
  background-color: transparent !important;
}
.btn-delete {
  height: 32px !important;
  min-width: 32px !important;
}
.icon-delete {
  font-size: 18px !important;
}

.height-20px {
  height: 20px !important;
}
.py-9px {
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}
.icon-plus {
  height: 20px !important;
  width: 20px !important;
}

.v-icon.v-icon {
  font-size: 16px !important;
}
.label-width {
  width: 50px !important;
}

::v-deep .input-box .v-input__slot {
  min-height: 36px !important;
}
.remove-message >>> .v-messages {
  display: none !important;
}

.remove-message::v-deep .v-messages {
  display: none !important;
}

::v-deep .remove-message .v-messages {
  display: none !important;
}

.input-box input {
  padding: 0 !important;
  font-size: 14px;
  height: 32px !important;
}
::v-deep .input-box label {
  font-size: 0.75rem !important;
}

::v-deep .input-box label {
  font-size: 0.75rem !important;
}

/* ลดขนาด input text */
::v-deep .input-box input {
  font-size: 0.75rem !important;
}

/* ลดขนาด placeholder */
::v-deep .input-box input::placeholder {
  font-size: 0.75rem !important;
  opacity: 0.6;
}

::v-deep .input-box.v-text-field--outlined fieldset {
  border-color: #e6e6e6 !important; /* เทา */
}
::v-deep .input-box.v-input.error--text.v-text-field--outlined fieldset {
  border-color: #e53935 !important; /* สีแดง error */
}
::v-deep .input-box.v-input--is-focused fieldset {
  border-color: #4caf50 !important; /* เขียวเข้ม */
  border-width: 2px !important;
}

::v-deep .custom-radio .v-icon {
  color: #4caf50 !important; /* สีของจุดวงกลม */
}

.bg-header{
  background-color: #f0f9ee;
}
</style>
