<template>
  <v-row class="mx-md-0 mt-md-0 mb-4">
    <v-col class="mt-3 pa-0 mt-md-0 pb-md-0">
      <v-card
        rounded="lg"
        class="px-0 pb-3 pt-0 mt-3 mt-md-0"
        :class="
          $vuetify.breakpoint.mdAndUp ? 'shadow-card' : 'shadow-card-none'
        "
      >
        <v-row no-gutters class="bg-header px-4 py-9px">
          <v-col cols="12">
            <p
              class="primary--text lighten-1 text-body-2 mb-0 font-weight-medium"
            >
              ประวัติส่วนตัว / Personal
            </p>
          </v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col cols="12" md="3">
            <v-row no-gutters class="pl-10 py-4">
              <v-col
                cols="12"
                class="d-flex flex-column align-center justify-center pl-0 pr-6 pt-1"
                no-gutters
              >
                <v-row cols="12">
                  <v-hover
                    v-if="!isProfileComplete"
                    v-slot="{ isHovering, props }"
                  >
                    <v-col
                      v-bind="props"
                      class="d-flex flex-column align-center justify-center upload-card"
                    >
                      <v-icon
                        color="primary"
                        style="font-size: 40px !important"
                        :class="isHovering ? 'hovering' : 'not-hovering'"
                      >
                        mdi-cloud-upload-outline
                      </v-icon>
                    </v-col>
                  </v-hover>
                  <input ref="fileInput" type="file" class="d-none" />

                  <v-col v-if="previewUrl" class="mt-4 upload-preview">
                    <img
                      :src="previewUrl"
                      alt="Preview"
                      max-width="200px"
                      max-height="210px"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <p class="primary--text mt-5 custom-label">
                    อัปโหลดรูปประจำตัว
                  </p>
                </v-row>
                <v-row>
                  <p class="text-caption grey--text lighten-5 mt-2">
                    Upload Profile image
                  </p>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="9" class="pl-6 pl-md-0">
            <v-row>
              <v-col
                cols="12"
                no-gutters
                class="d-flex justify-start align-center mt-12 mt-md-0 pb-0 pt-0 pl-4"
              >
                <v-radio-group
                  v-model="formData.namePrefix"
                  row
                  class="color-label custom-label custom-radio-group remove-message readOnlyRadio"
                  readonly
                >
                  <template #label>
                    <span class="custom-label black--text"
                      >คำนำหน้าชื่อ<span class="red--text"> * </span>:</span
                    >
                  </template>
                  <v-radio
                    label="นาย"
                    value="one"
                    class="color-label custom-radio text-caption black--text"
                    >test</v-radio
                  >
                  <v-radio
                    label="นาง"
                    value="two"
                    class="color-label custom-radio text-caption black--text"
                    >test</v-radio
                  >
                  <v-radio
                    label="นางสาว"
                    value="three"
                    class="color-label custom-radio text-caption black--text"
                    >test</v-radio
                  >
                </v-radio-group>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="d-flex justify-center align-center pt-0 px-4 pb-0"
              >
                <v-col>
                  <v-row>
                    <v-col
                      class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                    >
                      <p class="custom-label">
                        ชื่อ (ภาษาไทย)<span class="red--text"> * </span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pl-0 pr-md-0 pb-0">
                      <v-text-field
                        label="ชื่อ (ภาษาไทย)"
                        outlined
                        dense
                        single-line
                        required
                        class="input-box displayOnly"
                        v-model="formData.firstNameTh"
                        readonly
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="d-flex justify-center align-center pt-0 px-md-0 pb-0"
              >
                <v-col>
                  <v-row>
                    <v-col
                      class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                    >
                      <p class="custom-label">
                        นามสกุล (ภาษาไทย)<span class="red--text"> * </span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pl-0 pr-md-4 pb-0">
                      <v-text-field
                        label="นามสกุล (ภาษาไทย)"
                        outlined
                        dense
                        single-line
                        required
                        class="input-box displayOnly"
                        v-model="formData.lastNameTh"
                        readonly
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="d-flex justify-center align-center pt-0 pl-md-0 pb-md-0"
              >
                <v-col>
                  <v-row>
                    <v-col
                      class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                    >
                      <p class="custom-label">
                        ชื่อเล่น (ภาษาไทย)<span class="red--text"> * </span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pl-0 pb-0 pr-4">
                      <v-text-field
                        label="ชื่อเล่น (ภาษาไทย)"
                        outlined
                        dense
                        single-line
                        required
                        class="input-box displayOnly"
                        v-model="formData.nickNameTh"
                        readonly
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
              <v-col
                cols="12"
                no-gutters
                class="d-flex justify-start align-center pb-0 pt-md-0 pl-4"
              >
                <v-radio-group
                  v-model="formData.namePrefix"
                  row
                  class="color-label custom-label mt-1 mt-md-0 remove-message readOnlyRadio"
                  readonly
                >
                  <template #label>
                    <span class="custom-label"
                      >Name title<span class="red--text"> * </span>:</span
                    >
                  </template>
                  <v-radio
                    label="Mr."
                    value="one"
                    class="color-label custom-radio"
                    >test</v-radio
                  >
                  <v-radio
                    label="Mrs."
                    value="two"
                    class="color-label custom-radio"
                    >test</v-radio
                  >
                  <v-radio
                    label="MS."
                    value="three"
                    class="color-label custom-radio"
                    >test</v-radio
                  >
                </v-radio-group>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="d-flex justify-center align-center pt-md-0 px-md-4 pb-md-0"
              >
                <v-col>
                  <v-row>
                    <v-col
                      class="d-flex justify-start align-center pt-0 pl-0 pb-2 pr-md-0"
                    >
                      <p class="custom-label">
                        Name<span class="red--text"> * </span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pl-0 pr-md-0 pb-0">
                      <v-text-field
                        label="Name"
                        outlined
                        dense
                        single-line
                        required
                        class="input-box displayOnly"
                        v-model="formData.firstNameEn"
                        readonly
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="d-flex justify-center align-center pl-md-0 pr-md-4 pt-0 pb-md-0"
              >
                <v-col>
                  <v-row>
                    <v-col
                      class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                    >
                      <p class="custom-label">
                        Surname<span class="red--text"> * </span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pl-0 pr-md-0 pb-0">
                      <v-text-field
                        label="Surname"
                        outlined
                        dense
                        single-line
                        required
                        class="input-box displayOnly"
                        v-model="formData.lastNameEn"
                        readonly
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="d-flex justify-center align-center pt-0 pl-md-0 pb-md-0"
              >
                <v-col>
                  <v-row>
                    <v-col
                      class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                    >
                      <p class="custom-label">
                        Nickname<span class="red--text"> * </span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pl-0 pr-md-4 pb-0">
                      <v-text-field
                        label="Nickname"
                        outlined
                        dense
                        single-line
                        required
                        class="input-box displayOnly"
                        v-model="formData.nickNameEn"
                        readonly
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="d-flex justify-center align-center pr-md-0 pl-md-4 pt-0 pb-md-2"
              >
                <v-col>
                  <v-row>
                    <v-col
                      class="d-flex justify-start align-center mt-3 mt-md-0 pt-0 pl-0 pr-md-0 pb-2"
                    >
                      <p class="custom-label">
                        หมายเลขบัตรประชาชน
                        <span class="text-caption grey--text lighten-5"
                          >I.D. Card No.</span
                        ><span class="red--text"> * </span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pl-0 pr-md-4 pb-0">
                      <v-text-field
                        label="0-0000-00000-00-0"
                        v-model="formData.citizenId"
                        outlined
                        dense
                        single-line
                        required
                        class="input-box displayOnly"
                        readonly
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
              <v-col
                cols="12"
                md="3"
                class="d-flex justify-center align-center pt-0 pr-md-0 pl-md-0 pb-md-2"
              >
                <v-col>
                  <v-row>
                    <v-col
                      class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                    >
                      <p class="custom-label">
                        ระบุเขต/อำเภอที่ออกบัตร<span class="red--text">
                          *
                        </span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pl-0 pr-md-0 pb-0">
                      <v-text-field
                        label="ระบุเขต/อำเภอที่ออกบัตร"
                        outlined
                        dense
                        single-line
                        required
                        class="input-box displayOnly"
                        v-model="formData.idIssueDistrict"
                        readonly
                      />
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
              <v-col
                cols="12"
                md="5"
                class="d-flex justify-start align-start pt-0 pb-0 pl-md-4 pb-md-2"
              >
                <v-col cols="6">
                  <v-row>
                    <v-col class="pt-0 pl-0 pb-2">
                      <p class="custom-label">
                        วันที่ออกบัตร
                        <span class="text-caption grey--text lighten-5"
                          >Issue date</span
                        ><span class="red--text"> * </span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pl-0 pr-4 pb-0">
                      <v-menu
                        ref="menu"
                        v-model="menu1"
                        :close-on-content-click="false"
                        :nudge-top="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template #activator="{ on, attrs }">
                          <v-text-field
                            v-model="formData.formattedIssueDate"
                            placeholder="วว/ดด/ปปปป"
                            outlined
                            dense
                            readonly
                            v-bind="attrs"
                            v-on="on"
                            class="date_box input-box displayOnly"
                            required
                          >
                            <template #append> </template>
                          </v-text-field>
                        </template>
                        <v-date-picker
                          v-model="formData.idIssueDate"
                          locale="th"
                          scrollable
                          :max="todayDate"
                          class="compact-date-picker displayOnly"
                          readonly
                        />
                      </v-menu>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <v-col class="pt-0 pl-0 pb-2">
                      <p class="custom-label">
                        วันที่หมดอายุ<span
                          class="text-caption grey--text lighten-5"
                        >
                          Expiry date </span
                        ><span class="red--text"> * </span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="pt-0 pl-0 pr-4 pb-0">
                      <v-menu
                        ref="menu"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :nudge-top="40"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template #activator="{ on, attrs }">
                          <v-text-field
                            v-model="formData.formattedExpiryDate"
                            placeholder="วว/ดด/ปปปป"
                            outlined
                            dense
                            readonly
                            class="date_box input-box displayOnly"
                            v-bind="attrs"
                            v-on="on"
                            required
                          >
                            <template #append> </template>
                          </v-text-field>
                        </template>
                        <v-date-picker
                          v-model="formData.idExpiryDate"
                          locale="th"
                          scrollable
                          class="compact-date-picker"
                        />
                      </v-menu>
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            md="3"
            class="d-flex justify-start align-start pt-0 pb-0 pl-3 pr-md-0"
          >
            <v-col cols="8" class="pt-md-0">
              <v-row>
                <v-col
                  class="d-flex justify-start align-center pt-0 pl-4 pb-2 mt-md-4"
                >
                  <p class="custom-label">
                    วันเกิด
                    <span class="text-caption grey--text lighten-5"
                      >Date of Birth</span
                    ><span class="red--text"> * </span>
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="pt-0 pl-4 pr-4 pb-0">
                  <v-menu
                    ref="menu"
                    v-model="menu3"
                    :close-on-content-click="false"
                    :nudge-top="200"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template #activator="{ on, attrs }">
                      <v-text-field
                        v-model="formData.formattedBirthDate"
                        placeholder="วว/ดด/ปปปป"
                        outlined
                        dense
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        class="date_box input-box displayOnly"
                        required
                      >
                        <template #append> </template>
                      </v-text-field>
                    </template>
                    <v-date-picker
                      v-model="formData.BirthDate"
                      locale="th"
                      scrollable
                      :max="todayDate"
                      class="compact-date-picker"
                    />
                  </v-menu>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-row>
                <v-col class="d-flex justify-start align-center pt-0 pl-0 pb-2">
                  <p class="custom-label pb-0 mt-md-1">
                    อายุ
                    <span class="text-caption grey--text lighten-5"> Age </span>
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="7" class="pt-0 pl-0 pr-2 pb-0">
                  <v-text-field
                    v-model="formData.age"
                    outlined
                    dense
                    hide-details="auto"
                    class="mb-26px text-center input-box displayOnly"
                    placeholder="0"
                    readonly
                  />
                </v-col>
                <v-col cols="3">
                  <v-row>
                    <p class="custom-label">ปี</p>
                  </v-row>
                  <v-row>
                    <p class="custom-label">Years</p>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
          <v-col md="9" class="py-0 d-sm-flex flex-sm-row pl-md-0">
            <v-col class="py-0 pl-3 pt-md-3">
              <v-row>
                <v-col
                  class="d-flex justify-start align-center pt-0 pl-6 pb-2 mt-md-1"
                >
                  <p class="custom-label">
                    โรคประจำตัว
                    <span class="text-caption grey--text lighten-5">
                      Any physical disability or disease?
                    </span>
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="pt-0 pl-0 pr-4 pb-md-6">
                  <v-text-field
                    label="ระบุโรคประจำตัว"
                    outlined
                    dense
                    single-line
                    class="input-box date_box displayOnly"
                    v-model="formData.disease"
                    readonly
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-col>
        </v-row>
        <v-col>
          <v-row>
            <v-col
              cols="12"
              md="4"
              class="d-flex justify-center align-center pt-0 px-4 pb-0"
            >
              <v-col>
                <v-row>
                  <v-col
                    class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                  >
                    <p class="custom-label">
                      สัญชาติ<span class="text-caption grey--text lighten-5">
                        Nationality
                      </span>
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pt-0 pl-0 pr-md-0 pb-md-2">
                    <v-text-field
                      label="ระบุสัญชาติ"
                      outlined
                      dense
                      single-line
                      required
                      class="input-box displayOnly"
                      v-model="formData.nationality"
                      readonly
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-col>
            <v-col
              cols="12"
              md="4"
              class="d-flex justify-center align-center pt-0 px-md-0 pb-0"
            >
              <v-col>
                <v-row>
                  <v-col
                    class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                  >
                    <p class="custom-label">
                      เชื้อชาติ<span class="text-caption grey--text lighten-5">
                        Race
                      </span>
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pt-0 pl-0 pr-md-4 pb-0 pb-md-2">
                    <v-text-field
                      label="ระบุเชื้อชาติ"
                      outlined
                      dense
                      single-line
                      required
                      class="input-box displayOnly"
                      v-model="formData.race"
                      readonly
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-col>
            <v-col
              cols="12"
              md="4"
              class="d-flex justify-center align-center pt-0 pl-md-0 pb-md-0"
            >
              <v-col>
                <v-row>
                  <v-col
                    class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                  >
                    <p class="custom-label">
                      ศาสนา<span class="text-caption grey--text lighten-5">
                        Religion
                      </span>
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="pt-0 pl-0 pb-0 pr-1 pb-md-2">
                    <v-text-field
                      label="ระบุศาสนา"
                      outlined
                      dense
                      single-line
                      required
                      class="input-box displayOnly"
                      v-model="formData.religion"
                      readonly
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-col>
          </v-row>
        </v-col>
        <v-row>
          <v-col>
            <v-row class="pt-4 pt-md-0">
              <v-col cols="12" md="1" class="pl-6">
                <v-row
                  class="d-flex flex-md-column flex-row align-center align-md-start pb-md-6"
                >
                  <p class="custom-label mb-0 mr-2 mr-md-0 pl-md-4 doc">
                    สถานะทางทหาร :
                  </p>
                  <p class="text-caption grey--text lighten-5 mb-0 pl-md-4 doc">
                    Military Service
                  </p>
                </v-row>
              </v-col>
              <v-col cols="12" md="9" class="py-0 ml-md-9">
                <v-radio-group
                  v-model="formData.soldierStatus"
                  row
                  class="color-label custom-label mt-1 mt-md-0 py-md-0 date_box remove-message readOnlyRadio"
                  readonly
                >
                  <v-col
                    cols="12"
                    md="4"
                    class="d-flex flex-row flex-md-colum align-md-start mr-md-0 pa-md-0 pt-0"
                  >
                    <v-radio value="three" class="color-label custom-radio">
                      <template #label>
                        <v-col class="pa-0">
                          <p>ได้รับการยกเว้น</p>
                          <p class="text-caption grey--text lighten-5">
                            Exempted
                          </p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-radio value="one" class="color-label custom-radio">
                      <template #label>
                        <v-col class="pa-0">
                          <p>ศึกษาวิชาทหาร</p>
                          <p class="text-caption grey--text lighten-5">
                            Military Studies
                          </p>
                        </v-col>
                      </template>
                    </v-radio>
                  </v-col>
                  <v-col
                    cols="12"
                    md="6"
                    class="d-flex flex-row flex-md-colum align-md-start pa-md-0 py-0"
                  >
                    <v-radio value="two" class="color-label custom-radio">
                      <template #label>
                        <v-col class="pa-0">
                          <p>ผ่านการเกณฑ์ทหาร</p>
                          <p class="text-caption grey--text lighten-5">
                            Discharged
                          </p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-radio value="zero" class="color-label custom-radio">
                      <template #label>
                        <v-col class="pa-0">
                          <p>อื่นๆ</p>
                          <p class="text-caption grey--text lighten-5">
                            Others
                          </p>
                        </v-col>
                      </template>
                    </v-radio>
                    <v-col
                      v-if="formData.soldierStatus === 'zero'"
                      class="d-flex flex-row flex-md-colum align-md-start pa-0"
                    >
                      <v-text-field
                        label="ระบุอื่นๆ"
                        outlined
                        dense
                        single-line
                        class="input-box margin-zero-message displayOnly"
                        v-model="formData.soldierOther"
                        readonly
                      />
                    </v-col>
                  </v-col>
                </v-radio-group>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="pl-3 pr-2 pr-md-3 mt-md-2">
          <v-col cols="12" md="6">
            <v-row>
              <v-col class="d-flex justify-start align-center pt-0 pl-4 pb-2">
                <p class="custom-label">
                  เบอร์โทรศัพท์
                  <span class="text-caption grey--text lighten-5">
                    Telephone No.
                  </span>
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pt-0 pl-4 pr-md-4 pb-md-0">
                <v-text-field
                  v-model="formData.phoneNumber"
                  label="090-000-0000"
                  outlined
                  dense
                  single-line
                  class="input-box displayOnly"
                  required
                  readonly
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="6" class="py-md-0 pr-md-4 mt-md-3">
            <v-row>
              <v-col class="d-flex justify-start align-center pt-0 pl-0 pb-2">
                <p class="custom-label">
                  อีเมล
                  <span class="text-caption grey--text lighten-5">
                    E-mail
                  </span>
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pt-0 pl-0 pb-md-0">
                <v-text-field
                  label="HR_inet@one.th"
                  outlined
                  dense
                  single-line
                  class="input-box displayOnly"
                  required
                  v-model="formData.email"
                  readonly
                />
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
  mounted() {
    // ✅ DEEP COPY - No reference to store
    const storeData = this.$store.state.pages;
    if ("email" in storeData[6]) {
      const storeDataCopy = JSON.parse(JSON.stringify(storeData));
      this.formData = storeDataCopy[6];
      this.formData.profileImage = this.$fileStore.imageFile;

      if (this.formData.profileImage) {
        this.previewUrl = URL.createObjectURL(this.formData.profileImage);
        this.isProfileComplete = true;
      }
    }
  },
  beforeDestroy() {
    if (this.previewUrl) {
      URL.revokeObjectURL(this.previewUrl);
    }
  },
  data() {
    return {
      formData: {
        position: "",
        workplace: "",
        internshipFormat: "",

        namePrefix: "",
        firstNameTh: "",
        lastNameTh: "",
        nickNameTh: "",

        firstNameEn: "",
        lastNameEn: "",
        nickNameEn: "",

        citizenId: "",
        idIssueDistrict: "",
        idIssueDate: null,
        formattedIssueDate: "",
        formattedExpiryDate: "",
        idExpiryDate: null,

        formattedBirthDate: "",
        BirthDate: null,
        age: "",
        disease: "",

        nationality: "",
        race: "",
        religion: "",

        soldierStatus: "",
        soldierOther: "",

        phoneNumber: "",
        email: "",

        profileImage: null,
      },

      previewUrl: null,
      isProfileComplete: false,
    };
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

::v-deep .v-list-item:hover {
  background-color: #f0f9ee !important;
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

::v-deep .color-label .v-label {
  color: rgb(0, 0, 0);
  font-size: 0.75rem !important;
  font-weight: 500;
}

.custom-label {
  font-size: 0.75rem !important;
  font-weight: 500;
}

::v-deep .custom-radio .v-label {
  font-size: 0.75rem !important;
  font-weight: 500;
}

::v-deep .custom-radio-group > .v-label {
  font-size: 0.75rem !important;
  font-weight: 500;
}

::v-deep .custom-label .v-label {
  font-size: 0.75rem !important;
  font-weight: 500;
}

::v-deep .custom-select-size .v-select__selection {
  font-size: 0.75rem !important;
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

::v-deep .text-center input {
  text-align: center;
}

.py-9px {
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}

::v-deep .custom-radio-group.v-input--selection-controls {
  margin-top: 12px;
}

.custom-radio-group .v-input__slot {
  padding: 0px;
  margin: 0px;
  margin-bottom: 8px;
}

.date_box .v-messages {
  display: none !important;
}

.date_box .v-text-field__details {
  display: none !important;
}

::v-deep .input-box .v-input__slot {
  min-height: 32px !important;
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

::v-deep .input-select .v-input__control {
  min-height: 32px !important;
  height: 32px !important;
}

::v-deep .input-select input {
  padding: 0 !important;
  font-size: 14px !important;
  height: 32px !important;
}

::v-deep .input-box input {
  padding: 0 !important;
  font-size: 14px !important;
  height: 32px !important;
}

::v-deep .input-box .v-label {
  font-size: 12px !important;
  top: 50% !important;
  transform: translateY(-50%) scale(1) !important;
  color: #cdcbcb;
}

.input-box .v-text-field__details {
  padding-top: 2px !important;
}

::v-deep .centered-input .v-input__slot {
  align-items: center !important;
}

::v-deep .align-center-icon {
  display: flex;
  align-items: center;
  height: 100%;
}

::v-deep .v-input__append-inner {
  margin-top: 5px !important;
}

::v-deep .compact-date-picker .v-picker__title {
  height: 81px !important;
}

::v-deep .margin-zero-message .v-messages {
  margin-bottom: 0px !important;
}

::v-deep .margin-zero-message .v-text-field__details {
  margin-bottom: 0px !important;
}

.remove-message >>> .v-messages {
  display: none !important;
}

.remove-message .v-text-field__details {
  display: none !important;
}

.remove-message::v-deep .v-messages {
  display: none !important;
}

::v-deep .remove-message .v-messages {
  display: none !important;
}

::v-deep .input-select.v-text-field--outlined fieldset {
  border-color: #e6e6e6 !important;
  /* เทา */
}

::v-deep .input-select.v-input.error--text.v-text-field--outlined fieldset {
  border-color: #e53935 !important;
  /* สีแดง error */
}

::v-deep .input-select.v-input--is-focused fieldset {
  border-color: #4caf50 !important;
  /* เขียวเข้ม */
  border-width: 2px !important;
}

::v-deep .input-box.v-text-field--outlined fieldset {
  border-color: #e6e6e6 !important;
  /* เทา */
}

::v-deep .input-box.v-input.error--text.v-text-field--outlined fieldset {
  border-color: #e53935 !important;
  /* สีแดง error */
}

::v-deep .input-box.v-input--is-focused fieldset {
  border-color: #4caf50 !important;
  /* เขียวเข้ม */
  border-width: 2px !important;
}

::v-deep .custom-radio .v-icon {
  color: #4caf50 !important;
  /* สีของจุดวงกลม */
}

::v-deep .custom-select .v-input__append-inner .v-icon {
  color: #4caf50 !important;
  font-size: 16px;
}

.doc {
  display: inline-block;
  white-space: nowrap;
}

.bg-header {
  background-color: #f0f9ee;
}

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

.displayOnly.v-text-field--outlined fieldset {
  border: none !important;
}
</style>
