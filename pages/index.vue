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
            class="mb-3 pa-2"
            max-width="1128"
            :class="$vuetify.breakpoint.mdAndUp ? '' : 'show-display'"
          >
            <v-row class="ma-md-0">
              <v-col class="mt-3 pa-0 px-md-4 pt-md-4 mt-md-0 pb-md-0">
                <v-card
                  rounded="lg"
                  class="px-0 pb-0 pt-0 mt-3 mt-md-0"
                  :class="
                    $vuetify.breakpoint.mdAndUp
                      ? 'shadow-card'
                      : 'shadow-card-none'
                  "
                >
                  <v-row no-gutters class="green lighten-5 px-4 py-9px">
                    <v-col cols="10">
                      <p
                        class="primary--text lighten-1 text-body-2 mb-0 font-weight-medium"
                      >
                        ตำแหน่งสหกิจหรือฝึกงาน / Position
                      </p>
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="pl-4 pt-4">
                    <v-col
                      v-for="position in positions"
                      :key="position.number"
                      cols="12"
                      md="6"
                      lg="4"
                      class="mb-4 custom-label"
                    >
                      <v-row no-gutters>
                        <v-col cols="12">
                          <p class="mb-2 font-weight-light pb-md-2">
                            {{ position.label }}
                            <span
                              class="pl-2 b-1 grey--text text--lighten-1 font-weight-light"
                              >{{ position.labelEn }}</span
                            >
                          </p>
                        </v-col>
                        <v-col cols="12" class="pl-0 position-bottom">
                          <v-select v-if="position.number <= 2" :items="positionFields" item-text="label"
                            item-value="label" outlined dense placeholder="เลือกตำแหน่งสหกิจหรือฝึกงาน" clearable
                            :class="position.number === 1 ? 'pr-md-4 input-select input-box custom-select-size' : 'pr-lg-4 input-select input-box custom-select-size'
                              " />
                          <v-select v-else-if="position.number === 2" :items="WorkplaceFields" item-text="label"
                            item-value="label" outlined dense placeholder="เลือกประจำศูนย์" clearable
                            class="pr-md-4 input-select input-box custom-select-size" />

                          <v-select v-else-if="position.number === 3" :items="WorkplaceFields" item-text="label"
                            item-value="label" outlined dense placeholder="เลือกการฝึกงาน" clearable
                            class="pr-md-4 input-select input-box custom-select-size" />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
            <v-row class="ma-md-0">
              <v-col class="mt-3 pa-0 pa-md-4 mt-md-0">
                <v-card
                  rounded="lg"
                  class="px-0 pb-3 pt-0 mt-3 mt-md-0"
                  :class="
                    $vuetify.breakpoint.mdAndUp
                      ? 'shadow-card'
                      : 'shadow-card-none'
                  "
                >
                  <v-row no-gutters class="green lighten-5 px-4 py-9px">
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
                                @click="triggerFileInput"
                              >
                                <v-icon
                                  color="primary"
                                  style="font-size: 40px !important"
                                  :class="
                                    isHovering ? 'hovering' : 'not-hovering'
                                  "
                                >
                                  mdi-cloud-upload-outline
                                </v-icon>
                              </v-col>
                            </v-hover>
                            <input
                              ref="fileInput"
                              type="file"
                              class="d-none"
                              @change="onFileChange"
                            />
                            <v-col
                              v-if="previewUrl"
                              class="mt-4 upload-preview"
                            >
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
                            <p class="grey--text mt-2 custom-label">
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
                            v-model="selectedGender"
                            row
                            class="color-label custom-label custom-radio-group remove-message"
                          >
                            <template #label>
                              <span class="custom-label"
                                >คำนำหน้าชื่อ<span class="red--text"> * </span
                                >:</span
                              >
                            </template>
                            <v-radio
                              label="นาย"
                              value="one"
                              class="color-label custom-radio text-caption"
                              >test</v-radio
                            >
                            <v-radio
                              label="นาง"
                              value="two"
                              class="color-label custom-radio text-caption"
                              >test</v-radio
                            >
                            <v-radio
                              label="นางสาว"
                              value="three"
                              class="color-label custom-radio text-caption"
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
                                  ชื่อ (ภาษาไทย)<span class="red--text">
                                    *
                                  </span>
                                </p>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col class="pt-0 pl-0 pr-md-0 pb-0">
                                <v-text-field
                                  label="ชื่อ (ภาษาไทย)"
                                  :rules="[
                                    (v) => !!v || 'กรุณากรอกชื่อ',
                                    (v) =>
                                      /^[ก-๙\s]+$/.test(v) ||
                                      'กรุณากรอกเฉพาะตัวอักษรภาษาไทย',
                                  ]"
                                  outlined
                                  dense
                                  single-line
                                  required
                                  class="input-box"
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
                                  นามสกุล (ภาษาไทย)<span class="red--text">
                                    *
                                  </span>
                                </p>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col class="pt-0 pl-0 pr-md-4 pb-0">
                                <v-text-field
                                  label="นามสกุล (ภาษาไทย)"
                                  :rules="[
                                    (v) => !!v || 'กรุณากรอกนามสกุล',
                                    (v) =>
                                      /^[ก-๙\s]+$/.test(v) ||
                                      'กรุณากรอกเฉพาะตัวอักษรภาษาไทย',
                                  ]"
                                  outlined
                                  dense
                                  single-line
                                  required
                                  class="input-box"
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
                                  ชื่อเล่น (ภาษาไทย)<span class="red--text">
                                    *
                                  </span>
                                </p>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col class="pt-0 pl-0 pb-0 pr-4">
                                <v-text-field
                                  label="ชื่อเล่น (ภาษาไทย)"
                                  :rules="[
                                    (v) => !!v || 'กรุณากรอกนามสกุล',
                                    (v) =>
                                      /^[ก-๙\s]+$/.test(v) ||
                                      'กรุณากรอกเฉพาะตัวอักษรภาษาไทย',
                                  ]"
                                  outlined
                                  dense
                                  single-line
                                  required
                                  class="input-box"
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
                            v-model="selectedGender"
                            row
                            class="color-label custom-label mt-1 mt-md-0 remove-message"
                          >
                            <template #label>
                              <span class="custom-label"
                                >Name title<span class="red--text"> * </span
                                >:</span
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
                                  :rules="[
                                    (v) => !!v || 'Please input name',
                                    (v) =>
                                      /^[A-Za-z\\s]+$/.test(v) ||
                                      'Please input English letters only',
                                  ]"
                                  outlined
                                  dense
                                  single-line
                                  required
                                  class="input-box"
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
                                  :rules="[
                                    (v) => !!v || 'Please input Surname',
                                    (v) =>
                                      /^[A-Za-z\\s]+$/.test(v) ||
                                      'Please input English letters only',
                                  ]"
                                  outlined
                                  dense
                                  single-line
                                  required
                                  class="input-box"
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
                                  :rules="[
                                    (v) => !!v || 'Please input Nickname',
                                    (v) =>
                                      /^[A-Za-z\\s]+$/.test(v) ||
                                      'Please input English letters only',
                                  ]"
                                  outlined
                                  dense
                                  single-line
                                  required
                                  class="input-box"
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
                                  <span class="grey--text">I.D. Card No.</span
                                  ><span class="red--text"> * </span>
                                </p>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col class="pt-0 pl-0 pr-md-4 pb-0">
                                <v-text-field
                                  label="0-0000-00000-00-0"
                                  v-model="citizenId"
                                  @input="formatCitizenId"
                                  :rules="[
                                    (v) => !!v || 'กรุณากรอกเลขบัตรประชาชน',
                                    (v) =>
                                      /^[0-9\-]+$/.test(v) ||
                                      'กรุณากรอกเฉพาะตัวเลข',
                                    (v) =>
                                      v.replace(/-/g, '').length === 13 ||
                                      'กรุณากรอกให้ครบ 13 หลัก',
                                    (v) =>
                                      validateThaiID(v.replace(/-/g, '')) ||
                                      'เลขบัตรประชาชนไม่ถูกต้อง',
                                  ]"
                                  outlined
                                  dense
                                  single-line
                                  required
                                  class="input-box"
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
                                  ระบุเขต/อำเภอที่ออกบัตร<span
                                    class="red--text"
                                  >
                                    *
                                  </span>
                                </p>
                              </v-col>
                            </v-row>
                            <v-row>
                              <v-col class="pt-0 pl-0 pr-md-0 pb-0">
                                <v-text-field
                                  label="ระบุเขต/อำเภอที่ออกบัตร"
                                  :rules="[
                                    (v) =>
                                      !!v || 'กรุณากรอกเขต/อำเภอที่ออกบัตร',
                                    (v) =>
                                      /^[ก-๙\s]+$/.test(v) ||
                                      'กรุณากรอกเฉพาะตัวอักษรภาษาไทย',
                                  ]"
                                  outlined
                                  dense
                                  single-line
                                  required
                                  class="input-box"
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
                                  <span class="grey--text">Issue date</span
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
                                      v-model="formattedDate1"
                                      placeholder="วว/ดด/ปปปป"
                                      outlined
                                      dense
                                      readonly
                                      v-bind="attrs"
                                      v-on="on"
                                      class="date_box input-box"
                                      :rules="[
                                        (v) => !!v || 'กรุณาระบุวันเกิด',
                                      ]"
                                      required
                                    >
                                      <template #append>
                                        <v-icon color="primary"
                                          >mdi-calendar</v-icon
                                        >
                                      </template>
                                    </v-text-field>
                                  </template>
                                  <v-date-picker
                                    v-model="date1"
                                    locale="th"
                                    scrollable
                                    :max="todayDate"
                                    @input="updateDate1"
                                    class="compact-date-picker"
                                  />
                                </v-menu>
                              </v-col>
                            </v-row>
                          </v-col>
                          <v-col cols="6">
                            <v-row>
                              <v-col class="pt-0 pl-0 pb-2">
                                <p class="custom-label">
                                  วันที่หมดอายุ<span class="grey--text">
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
                                      v-model="formattedDate2"
                                      placeholder="วว/ดด/ปปปป"
                                      outlined
                                      dense
                                      readonly
                                      class="date_box input-box"
                                      v-bind="attrs"
                                      v-on="on"
                                      :rules="[
                                        (v) => !!v || 'กรุณาระบุวันเกิด',
                                      ]"
                                      required
                                    >
                                      <template #append>
                                        <v-icon color="primary"
                                          >mdi-calendar</v-icon
                                        >
                                      </template>
                                    </v-text-field>
                                  </template>
                                  <v-date-picker
                                    v-model="date2"
                                    locale="th"
                                    scrollable
                                    @input="updateDate2"
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
                              <span class="grey--text">Date of Birth</span
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
                                  v-model="formattedDate3"
                                  placeholder="วว/ดด/ปปปป"
                                  outlined
                                  dense
                                  readonly
                                  v-bind="attrs"
                                  v-on="on"
                                  class="date_box input-box"
                                  :rules="[(v) => !!v || 'กรุณาระบุวันเกิด']"
                                  required
                                >
                                  <template #append>
                                    <v-icon color="primary"
                                      >mdi-calendar</v-icon
                                    >
                                  </template>
                                </v-text-field>
                              </template>
                              <v-date-picker
                                v-model="date3"
                                locale="th"
                                scrollable
                                :max="todayDate"
                                @input="updateDate3"
                                class="compact-date-picker"
                              />
                            </v-menu>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="4">
                        <v-row>
                          <v-col
                            class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                          >
                            <p class="custom-label pb-0 mt-md-1">
                              อายุ <span class="grey--text"> Age </span>
                            </p>
                          </v-col>
                        </v-row>
                        <v-row>
                          <v-col cols="7" class="pt-0 pl-0 pr-2 pb-0">
                            <v-text-field
                              v-model="calculatedAge"
                              outlined
                              dense
                              hide-details="auto"
                              class="mb-26px grey lighten-4 text-center input-box"
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
                            class="d-flex justify-start align-center pt-0 pl-0 pb-2 mt-md-1"
                          >
                            <p class="custom-label">
                              โรคประจำตัว
                              <span class="grey--text">
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
                              class="input-box date_box"
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
                                สัญชาติ<span class="grey--text">
                                  Nationality
                                </span>
                              </p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="pt-0 pl-0 pr-md-0 pb-md-2">
                              <v-text-field
                                label="ระบุสัญชาติ"
                                :rules="[(v) => !!v || 'กรุณาระบุสัญชาติ']"
                                outlined
                                dense
                                single-line
                                required
                                class="input-box"
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
                                เชื้อชาติ<span class="grey--text"> Race </span>
                              </p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="pt-0 pl-0 pr-md-4 pb-0">
                              <v-text-field
                                label="ระบุเชื้อชาติ"
                                :rules="[(v) => !!v || 'กรุณาระบุเชื้อชาติ']"
                                outlined
                                dense
                                single-line
                                required
                                class="input-box"
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
                                ศาสนา<span class="grey--text"> Religion </span>
                              </p>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col class="pt-0 pl-0 pb-0 pr-1">
                              <v-text-field
                                label="ระบุศาสนา"
                                :rules="[(v) => !!v || 'กรุณาระบุศาสนา']"
                                outlined
                                dense
                                single-line
                                required
                                class="input-box"
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
                        <v-col cols="12" md="2" class="pl-6">
                          <v-row
                            class="d-flex flex-md-column flex-row align-center align-md-start pb-md-6"
                          >
                            <p class="custom-label mb-0 mr-2 mr-md-0 pl-md-4">
                              สถานะทางทหาร :
                            </p>
                            <p class="grey--text custom-label mb-0 pl-md-4">
                              Military Service
                            </p>
                          </v-row>
                        </v-col>
                        <v-col cols="12" md="9" class="py-0">
                          <v-radio-group
                            v-model="soldier"
                            row
                            class="color-label custom-label mt-1 mt-md-0 py-md-0 date_box remove-message"
                          >
                            <v-col
                              cols="12"
                              md="4"
                              class="d-flex flex-row flex-md-colum align-md-start mr-md-0 pa-md-0 pt-0"
                            >
                              <v-radio
                                value="three"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p>ได้รับการยกเว้น</p>
                                    <p class="text-caption text--secondary">
                                      Exempted
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
                                    <p>ศึกษาวิชาทหาร</p>
                                    <p class="text-caption text--secondary">
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
                              <v-radio
                                value="two"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p>ผ่านการเกณฑ์ทหาร</p>
                                    <p class="text-caption text--secondary">
                                      Discharged
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="zero"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p>อื่นๆ</p>
                                    <p class="text-caption text--secondary">
                                      Others
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-col
                                v-if="soldier === 'zero'"
                                class="d-flex flex-row flex-md-colum align-md-start pa-0"
                              >
                                <v-text-field
                                  label="ระบุอื่นๆ"
                                  :rules="[(v) => !!v || 'กรุณาระบุอื่นๆ']"
                                  outlined
                                  dense
                                  single-line
                                  class="input-box margin-zero-message"
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
                        <v-col
                          class="d-flex justify-start align-center pt-0 pl-4 pb-2"
                        >
                          <p class="custom-label">
                            เบอร์โทรศัพท์
                            <span class="grey--text"> Telephone No. </span>
                          </p>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pt-0 pl-4 pr-md-4 pb-md-0">
                          <v-text-field
                            v-model="phoneNumber"
                            label="เบอร์โทรศัพท์"
                            :rules="[
                              (v) => !!v || 'กรุณากรอกเบอร์โทรศัพท์',
                              (v) =>
                                /^0[0-9]{2}-[0-9]{3}-[0-9]{4}$/.test(v) ||
                                'เบอร์โทรศัพท์ไม่ถูกต้อง',
                            ]"
                            outlined
                            dense
                            single-line
                            class="input-box"
                            required
                            @input="formatPhoneNumber"
                            @paste.prevent="handlePaste"
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="6" class="py-md-0 pr-md-4 mt-md-3">
                      <v-row>
                        <v-col
                          class="d-flex justify-start align-center pt-0 pl-0 pb-2"
                        >
                          <p class="custom-label">
                            อีเมล <span class="grey--text"> E-mail </span>
                          </p>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col class="pt-0 pl-0 pb-md-0">
                          <v-text-field
                            label="อีเมล"
                            :rules="[
                              (v) => !!v || 'กรุณากรอกอีเมล',
                              (v) =>
                                /.+@.+\..+/.test(v) || 'รูปแบบอีเมลไม่ถูกต้อง',
                            ]"
                            outlined
                            dense
                            single-line
                            class="input-box"
                            required
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
  layout: "form",
  data() {
    return {
      phoneNumber: "",
      // format currency
      salaryFrom: 0,
      salaryFromDisplay: "",
      salaryTo: 0,
      salaryToDisplay: "",
      // validation salary
      salaryFromError: false,
      salaryFromErrorMessage: "",
      salaryToError: false,
      salaryToErrorMessage: "",
      // texts
      steps: [
        { number: 1, label: "ประวัติส่วนตัว" },
        { number: 2, label: "ประวัติการศึกษา" },
        { number: 3, label: "ประวัติการทำงาน" },
        { number: 4, label: "ประวัติครอบครัว" },
        { number: 5, label: "ทักษะและความสามารถ" },
        { number: 6, label: "ประวัติเพิ่มเติม" },
      ],
      positions: [
        { number: 1, label: "ตำแหน่งสหกิจหรือฝึกงาน", labelEn: "Position" },
        { number: 2, label: "ประจำศูนย์", labelEn: "Workplace" },
        { number: 3, label: "รูปแบบการฝึกงาน", labelEn: "Internship Format" },
      ],
      positionFields: [
        { number: 1, label: "programer" },
        { number: 2, label: "designer" },
        { number: 3, label: "manager" },
        { number: 4, label: "analyst" },
      ],
      WorkplaceFields: [
        { number: 1, label: "Bangkok" },
        { number: 2, label: "Chiang Mai" },
        { number: 3, label: "Phuket" },
        { number: 4, label: "Khon Kaen" },
      ],
      Provinces: [
        { number: 1, label: "กรุงเทพมหานคร" },
        { number: 2, label: "กระบี่" },
        { number: 3, label: "กาญจนบุรี" },
        { number: 4, label: "กาฬสินธุ์" },
        { number: 5, label: "กำแพงเพชร" },
        { number: 6, label: "ขอนแก่น" },
        { number: 7, label: "จันทบุรี" },
        { number: 8, label: "ฉะเชิงเทรา" },
        { number: 9, label: "ชลบุรี" },
        { number: 10, label: "ชัยนาท" },
        { number: 11, label: "ชัยภูมิ" },
        { number: 12, label: "ชุมพร" },
        { number: 13, label: "เชียงราย" },
        { number: 14, label: "เชียงใหม่" },
        { number: 15, label: "ตรัง" },
        { number: 16, label: "ตราด" },
        { number: 17, label: "ตาก" },
        { number: 18, label: "นครนายก" },
        { number: 19, label: "นครปฐม" },
        { number: 20, label: "นครพนม" },
        { number: 21, label: "นครราชสีมา" },
        { number: 22, label: "นครศรีธรรมราช" },
        { number: 23, label: "นครสวรรค์" },
        { number: 24, label: "นราธิวาส" },
        { number: 25, label: "น่าน" },
        { number: 26, label: "บึงกาฬ" },
        { number: 27, label: "บุรีรัมย์" },
        { number: 28, label: "ประจวบคีรีขันธ์" },
        { number: 29, label: "ปทุมธานี" },
        { number: 30, label: "ปราจีนบุรี" },
        { number: 31, label: "ปัตตานี" },
        { number: 32, label: "พะเยา" },
        { number: 33, label: "พระนครศรีอยุธยา" },
        { number: 34, label: "พังงา" },
        { number: 35, label: "พัทลุง" },
        { number: 36, label: "พิจิตร" },
        { number: 37, label: "พิษณุโลก" },
        { number: 38, label: "เพชรบุรี" },
        { number: 39, label: "เพชรบูรณ์" },
        { number: 40, label: "แพร่" },
        { number: 41, label: "พัทลุง" },
        { number: 42, label: "ภูเก็ต" },
        { number: 43, label: "มหาสารคาม" },
        { number: 44, label: "มุกดาหาร" },
        { number: 45, label: "แม่ฮ่องสอน" },
        { number: 46, label: "ยโสธร" },
        { number: 47, label: "ยะลา" },
        { number: 48, label: "ร้อยเอ็ด" },
        { number: 49, label: "ระนอง" },
        { number: 50, label: "ระยอง" },
        { number: 51, label: "ราชบุรี" },
        { number: 52, label: "ลพบุรี" },
        { number: 53, label: "ลำปาง" },
        { number: 54, label: "ลำพูน" },
        { number: 55, label: "เลย" },
        { number: 56, label: "ศรีสะเกษ" },
        { number: 57, label: "สกลนคร" },
        { number: 58, label: "สงขลา" },
        { number: 59, label: "สตูล" },
        { number: 60, label: "สมุทรปราการ" },
        { number: 61, label: "สมุทรสงคราม" },
        { number: 62, label: "สมุทรสาคร" },
        { number: 63, label: "สระแก้ว" },
        { number: 64, label: "สระบุรี" },
        { number: 65, label: "สิงห์บุรี" },
        { number: 66, label: "สุโขทัย" },
        { number: 67, label: "สุพรรณบุรี" },
        { number: 68, label: "สุราษฎร์ธานี" },
        { number: 69, label: "สุรินทร์" },
        { number: 70, label: "หนองคาย" },
        { number: 71, label: "หนองบัวลำภู" },
        { number: 72, label: "อำนาจเจริญ" },
        { number: 73, label: "อุดรธานี" },
        { number: 74, label: "อุตรดิตถ์" },
        { number: 75, label: "อุทัยธานี" },
        { number: 76, label: "อุบลราชธานี" },
        { number: 77, label: "ยะลา" },
      ],
      previewUrl: null,
      isProfileComplete: false,
      // date
      menu1: false,
      date1: null,
      formattedDate1: "",
      menu2: false,
      date2: null,
      formattedDate2: "",
      menu3: false,
      date3: null,
      formattedDate3: "",
      today: new Date().toISOString().substr(0, 10),
      // gender
      selectedGender: null,
      // address
      useSameAddress: false,
      soldier: "",
      //citizen
      citizenId: "",
    };
  },
  computed: {
    todayDate() {
      return new Date().toISOString().substr(0, 10);
    },
    calculatedAge() {
      if (!this.date3) {
        return "";
      }
      const today = new Date();
      const birth = new Date(this.date3);
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      // ถ้ายังไม่ถึงเดือนเกิด หรือถึงเดือนเกิดแต่ยังไม่ถึงวันเกิด ให้ลบ 1 ปี
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birth.getDate())
      ) {
        age--;
      }
      return age.toString();
    },
  },
  methods: {
    formatPhoneNumber() {
      // ลบทุกอักขระที่ไม่ใช่ตัวเลข
      let cleaned = this.phoneNumber.replace(/\D/g, "");

      // จำกัดให้ไม่เกิน 10 ตัว
      cleaned = cleaned.substring(0, 10);

      // เพิ่มขีดตามรูปแบบ
      if (cleaned.length > 6) {
        this.phoneNumber = cleaned.replace(
          /(\d{3})(\d{3})(\d{0,4})/,
          "$1-$2-$3"
        );
      } else if (cleaned.length > 3) {
        this.phoneNumber = cleaned.replace(/(\d{3})(\d{0,3})/, "$1-$2");
      } else {
        this.phoneNumber = cleaned;
      }
    },
    handlePaste(event) {
      // ดึงข้อมูลจาก clipboard
      const pasted = (event.clipboardData || window.clipboardData).getData(
        "text"
      );

      // ลบอักขระที่ไม่ใช่ตัวเลข
      let cleaned = pasted.replace(/\D/g, "");

      // จำกัด 10 ตัว
      cleaned = cleaned.substring(0, 10);

      // ใส่ขีดอัตโนมัติ
      if (cleaned.length > 6) {
        this.phoneNumber = cleaned.replace(
          /(\d{3})(\d{3})(\d{0,4})/,
          "$1-$2-$3"
        );
      } else if (cleaned.length > 3) {
        this.phoneNumber = cleaned.replace(/(\d{3})(\d{0,3})/, "$1-$2");
      } else {
        this.phoneNumber = cleaned;
      }
    },
    formatCitizenId() {
      // ลบขีดเก่าก่อน
      let value = this.citizenId.replace(/\D/g, "");

      // จำกัดให้ไม่เกิน 13 หลัก
      value = value.slice(0, 13);

      // เพิ่มขีดตามตำแหน่ง
      if (value.length > 1) value = value.slice(0, 1) + "-" + value.slice(1);
      if (value.length > 6) value = value.slice(0, 6) + "-" + value.slice(6);
      if (value.length > 12) value = value.slice(0, 12) + "-" + value.slice(12);
      if (value.length > 15) value = value.slice(0, 15) + "-" + value.slice(15);

      this.citizenId = value;
    },
    validateThaiID(id) {
      if (!/^[0-9]{13}$/.test(id)) return false;
      let sum = 0;
      for (let i = 0; i < 12; i++) {
        sum += parseInt(id.charAt(i)) * (13 - i);
      }
      const checkDigit = (11 - (sum % 11)) % 10;
      return checkDigit === parseInt(id.charAt(12));
    },
    updateDate1(val) {
      const d = new Date(val);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      this.formattedDate1 = d.toLocaleDateString("th-TH", options);
      this.menu1 = false;
    },
    updateDate2(val) {
      const d = new Date(val);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      this.formattedDate2 = d.toLocaleDateString("th-TH", options);
      this.menu2 = false;
    },
    updateDate3(val) {
      const d = new Date(val);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      this.formattedDate3 = d.toLocaleDateString("th-TH", options);
      this.menu3 = false;
    },
    isNumber(evt) {
      const charCode = evt.which ? evt.which : evt.keyCode;
      // อนุญาตเฉพาะตัวเลข 0-9
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        if (this.previewUrl) {
          URL.revokeObjectURL(this.previewUrl);
        }
        this.previewUrl = URL.createObjectURL(file);
      }
      this.isProfileComplete = true;
    },
    formatSalary(value, type) {
      const inputValue = typeof value === "string" ? value : value.target.value;
      const numValue = inputValue.replace(/\D/g, "");
      if (!numValue) {
        if (type === "from") {
          this.salaryFromDisplay = "";
          this.salaryFrom = 0;
        } else {
          this.salaryToDisplay = "";
          this.salaryTo = 0;
        }
        this.validateSalary();
        return;
      }
      const num = parseInt(numValue);
      const formatted = num.toLocaleString("en-US");
      if (type === "from") {
        this.salaryFromDisplay = formatted;
        this.salaryFrom = num;
      } else {
        this.salaryToDisplay = formatted;
        this.salaryTo = num;
      }
      // Validate real-time
      this.validateSalary();
    },
    validateSalary() {
      // Reset errors
      this.salaryFromError = false;
      this.salaryFromErrorMessage = "";
      this.salaryToError = false;
      this.salaryToErrorMessage = "";
      // ตรวจสอบว่ากรอกข้อมูล
      if (!this.salaryFrom && this.salaryTo) {
        this.salaryFromError = true;
        this.salaryFromErrorMessage = "กรุณากรอกเงินเดือนต่ำสุด";
        return false;
      }
      if (this.salaryFrom && !this.salaryTo) {
        this.salaryToError = true;
        this.salaryToErrorMessage = "กรุณากรอกเงินเดือนสูงสุด";
        return false;
      }
      // ตรวจสอบว่าเงินเดือนสูงสุดมากกว่าหรือเท่ากับต่ำสุด
      if (this.salaryFrom && this.salaryTo && this.salaryTo < this.salaryFrom) {
        this.salaryToError = true;
        this.salaryToErrorMessage =
          "เงินเดือนสูงสุดต้องมากกว่าหรือเท่ากับเงินเดือนต่ำสุด";
        return false;
      }
      // ตรวจสอบว่าไม่ติดลบ
      if (this.salaryFrom < 0) {
        this.salaryFromError = true;
        this.salaryFromErrorMessage = "เงินเดือนต้องเป็นจำนวนบวก";
        return false;
      }
      if (this.salaryTo < 0) {
        this.salaryToError = true;
        this.salaryToErrorMessage = "เงินเดือนต้องเป็นจำนวนบวก";
        return false;
      }
      return true;
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
  background-color: 
#f0f9ee !important;
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

/* Vue 2 สามารถใช้ deep selector แบบนี้ได้ */
.remove-message::v-deep .v-messages {
  display: none !important;
}

/* หรือ */
::v-deep .remove-message .v-messages {
  display: none !important;
}
</style>
