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
                        <p class="text-caption grey--text lighten-5">
                          Driving licence
                        </p>
                      </v-row>
                    </v-col>
                    <v-col cols="4">
                      <v-row no-gutters class="align-center">
                        <v-col cols="4" class="pa-0">
                          <v-checkbox
                            v-model="formData.drivingLicense.car"
                            dense
                            class="custom-radio remove-message"
                          >
                            <template #label>
                              <v-col class="pa-0">
                                <p class="custom-label black--text">รถยนต์</p>
                                <p class="text-caption grey--text lighten-5">
                                  Car
                                </p>
                              </v-col>
                            </template>
                          </v-checkbox>
                        </v-col>
                        <v-col cols="4" class="pa-0">
                          <v-checkbox
                            v-model="formData.drivingLicense.motorcycle"
                            dense
                            class="custom-radio remove-message"
                          >
                            <template #label>
                              <v-col class="pa-0 custom-radio">
                                <p class="custom-label black--text">
                                  มอเตอร์ไซต์
                                </p>
                                <p class="text-caption grey--text lighten-5">
                                  Motorcycle
                                </p>
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
                        <p class="text-caption grey--text lighten-5">
                          Can you work in upcountry?
                        </p>
                      </v-row>
                    </v-col>
                    <v-col cols="4">
                      <v-row no-gutters class="align-center">
                        <v-col md="3" class="pl-md-0 pt-md-0">
                          <v-radio-group
                            v-model="formData.workUpcountry"
                            row
                            :rules="[(v) => !!v || '']"
                            class="color-label custom-label remove-message pl-md-0 mt-0 mt-md-0"
                          >
                            <v-col
                              cols="12"
                              md="5"
                              class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                            >
                              <v-radio
                                value="yes"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="text-caption black--text">ได้</p>
                                    <p
                                      class="text-caption grey--text lighten-5"
                                    >
                                      Yes
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="no"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col cols="12" class="pa-0">
                                    <p class="doc text-caption black--text">
                                      ไม่ได้
                                    </p>
                                    <p
                                      class="text-caption grey--text lighten-5"
                                    >
                                      No
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
                          ท่านเคยให้ถูกออกจากงาน หรือเลิกจ้างหรือไม่
                          <span class="red--text">*</span>
                        </p>
                      </v-row>
                      <v-row no-gutters>
                        <p class="text-caption grey--text lighten-5">
                          Have you ever been discharged from employment for any
                          reason?
                        </p>
                      </v-row>
                    </v-col>
                    <v-col cols="4">
                      <v-row no-gutters class="align-center">
                        <v-col md="3" class="pl-md-0 pt-md-0">
                          <v-radio-group
                            v-model="formData.dischargedFromWork"
                            row
                            :rules="[(v) => !!v || '']"
                            class="color-label custom-label remove-message pl-md-0 mt-0 mt-md-0"
                          >
                            <v-col
                              cols="12"
                              md="4"
                              class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                            >
                              <v-radio
                                value="no"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="doc text-caption black--text">
                                      ไม่เคย
                                    </p>
                                    <p
                                      class="text-caption grey--text lighten-5"
                                    >
                                      No
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="yes"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="text-caption black--text">เคย</p>
                                    <p
                                      class="text-caption grey--text lighten-5"
                                    >
                                      Yes
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
                          ท่านเคยถูกจำคุก หรือโทษทางอาญาหรือไม่
                          <span class="red--text">*</span>
                        </p>
                      </v-row>
                      <v-row no-gutters>
                        <p class="text-caption grey--text lighten-5">
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
                            :rules="[(v) => !!v || '']"
                            class="color-label custom-label remove-message pl-md-0 mt-0 mt-md-0"
                          >
                            <v-col
                              cols="12"
                              md="4"
                              class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                            >
                              <v-radio
                                value="no"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="doc text-caption black--text">
                                      ไม่เคย
                                    </p>
                                    <p
                                      class="text-caption grey--text lighten-5"
                                    >
                                      No
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="yes"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="text-caption black--text">เคย</p>
                                    <p
                                      class="text-caption grey--text lighten-5"
                                    >
                                      Yes
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
                          ท่านสูบบุหรี่หรือไม่ <span class="red--text">*</span>
                        </p>
                      </v-row>
                      <v-row no-gutters>
                        <p class="text-caption grey--text lighten-5">
                          Do you smoke cigarettes?
                        </p>
                      </v-row>
                    </v-col>
                    <v-col cols="4">
                      <v-row no-gutters class="align-center">
                        <v-col md="3" class="pl-md-0 pt-md-0">
                          <v-radio-group
                            v-model="formData.smoking"
                            row
                            :rules="[(v) => !!v || '']"
                            class="color-label custom-label remove-message pl-md-0 mt-0 mt-md-0"
                          >
                            <v-col
                              cols="12"
                              md="4"
                              class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                            >
                              <v-radio
                                value="non-smoker"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="text-caption black--text">
                                      ไม่สูบ
                                    </p>
                                    <p
                                      class="text-caption grey--text lighten-5 doc"
                                    >
                                      Non-smoker
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="occasional"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="doc text-caption black--text">
                                      สูบบางครั้ง
                                    </p>
                                    <p
                                      class="text-caption grey--text lighten-5 doc"
                                    >
                                      Occasional smoker
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="regular"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="doc text-caption black--text">
                                      สูบเป็นประจํา
                                    </p>
                                    <p
                                      class="text-caption grey--text lighten-5 doc"
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
                        <p class="text-caption grey--text lighten-5">
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
                            :rules="[(v) => !!v || '']"
                            class="color-label custom-label remove-message pl-md-0 mt-0 mt-md-0"
                          >
                            <v-col
                              cols="12"
                              md="4"
                              class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                            >
                              <v-radio
                                value="non-drinker"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="text-caption black--text">
                                      ไม่ดื่ม
                                    </p>
                                    <p
                                      class="text-caption grey--text lighten-5 doc"
                                    >
                                      Non-drinker
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="occasional"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="text-caption black--text">
                                      ดื่มบางครั้ง
                                    </p>
                                    <p
                                      class="text-caption grey--text lighten-5 doc"
                                    >
                                      Occasional drinker
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="regular"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="doc text-caption black--text">
                                      ดื่มเป็นประจำ
                                    </p>
                                    <p
                                      class="text-caption grey--text lighten-5 doc"
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
                        <p class="text-caption grey--text lighten-5">
                          You have deficiencies or obstacles in the body. Or any
                          part of the organ is deformed or not
                        </p>
                      </v-row>
                    </v-col>
                    <v-col cols="4">
                      <v-row no-gutters class="align-center">
                        <v-col md="3" class="pl-md-0 pt-md-0">
                          <v-radio-group
                            v-model="formData.disability"
                            row
                            :rules="[(v) => !!v || '']"
                            class="color-label custom-label remove-message pl-md-0 mt-0 mt-md-0"
                          >
                            <v-col
                              cols="12"
                              md="4"
                              class="d-flex flex-row flex-md-colum mr-md-0 px-md-0 pt-0 pd-md-0"
                            >
                              <v-radio
                                value="no"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="doc text-caption black--text">
                                      ไม่เคย
                                    </p>
                                    <p
                                      class="text-caption grey--text lighten-5"
                                    >
                                      No
                                    </p>
                                  </v-col>
                                </template>
                              </v-radio>
                              <v-radio
                                value="yes"
                                class="color-label custom-radio"
                              >
                                <template #label>
                                  <v-col class="pa-0">
                                    <p class="text-caption black--text">เคย</p>
                                    <p
                                      class="text-caption grey--text lighten-5"
                                    >
                                      Yes
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
                  <v-row no-gutters class="pl-4 py-4 pb-4">
                    <v-col>
                      <v-row no-gutters>
                        <p class="custom-label pb-2">
                          ท่านทราบข่าวสารการสมัครฝึกงานจาก
                          <span class="text-caption grey--text lighten-5"
                            >How did you hear about this Internship
                            application?</span
                          >
                        </p>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="5" class="pt-0 pl-0 pr-md-4">
                          <v-select
                            v-model="formData.howDidYouHear"
                            :items="howto"
                            multiple
                            append-icon="mdi-chevron-down"
                            append-icon-color="primary"
                            item-text="label"
                            item-value="value"
                            outlined
                            dense
                            :rules="[(v) => !!v || '']"
                            placeholder="เลือกข่าวสารการสมัครงาน"
                            clearable
                            :menu-props="{ maxHeight: 240 }"
                            chips
                            small-chips
                            hide-details
                            class="remove-message input-box input-select custom-height"
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
                        เอกสารประกอบ / Supporting Documents
                      </p>
                    </v-col>
                  </v-row>
                  <v-row
                    no-gutters
                    class="pa-4"
                    v-if="formData.documents.length === 0"
                  >
                    <v-col
                      cols="12"
                      class="border-dashed text-center py-8"
                      @click="opendialog"
                    >
                      <v-card elevation="0">
                        <v-icon color="green" class="font-48"
                          >mdi-cloud-upload-outline</v-icon
                        >
                        <div class="mt-2">
                          <p class="green--text custom-label mb-2">
                            อัปโหลดเอกสาร
                          </p>
                          <p class="grey--text mb-0 font-10">
                            กรุณาอัปโหลดเอกสารประกอบ เช่น สำเนาบัตรประชาชน,
                          </p>
                          <p class="grey--text font-10">
                            สำเนาทะเบียนบ้าน, Transcript
                          </p>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>

                  <!-- Documents List Section -->
                  <v-row no-gutters v-else>
                    <v-col cols="12">
                      <!-- Document Items -->
                      <div
                        v-for="(doc, index) in formData.documents"
                        :key="index"
                        class="document-item d-flex align-center pa-3"
                      >
                        <!-- PDF Icon -->
                        <div class="pdf-icon mr-3">
                          <v-icon color="white" size="12"
                            >mdi-file-pdf-box</v-icon
                          >
                        </div>

                        <!-- Document Info -->
                        <div class="flex-grow-1">
                          <v-row no-gutters>
                            <v-col>
                              <p class="mb-1 text-body-2 font-weight-medium">
                                {{ doc.name }}
                              </p>
                            </v-col>
                            <v-col>
                              <p
                                class="mb-0 text-body-2 font-weight-medium grey--text"
                              >
                                ({{ doc.type }})
                              </p>
                            </v-col>
                          </v-row>
                          <p class="mb-0 text-caption grey--text">
                            {{ doc.date }} {{ doc.time }} {{ doc.size }}
                          </p>
                        </div>

                        <!-- Action Buttons -->
                        <div class="d-flex align-center">
                          <v-btn
                            icon
                            small
                            @click="viewDocument(doc)"
                            class="mr-2"
                          >
                            <v-icon color="primary">mdi-eye-outline</v-icon>
                          </v-btn>
                          <v-btn
                            icon
                            small
                            @click="downloadDocument(doc)"
                            class="mr-2"
                          >
                            <v-icon color="primary">mdi-download</v-icon>
                          </v-btn>
                          <v-btn icon small @click="removeDocument(index)">
                            <v-icon color="primary">mdi-close</v-icon>
                          </v-btn>
                        </div>
                      </div>

                      <!-- Upload More Button -->
                      <div class="text-center mt-4 mb-4">
                        <v-btn outlined color="green" small @click="opendialog">
                          <v-icon small left>mdi-upload</v-icon>
                          อัปโหลดเอกสาร
                        </v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog" max-width="500" persistent>
        <v-card>
          <v-card-title
            class="font-16 green--text bg-header d-flex justify-space-between align-center py-2"
          >
            <span></span>
            <span>อัปโหลดเอกสาร</span>
            <v-btn icon small @click="closeDialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="pt-4">
            <v-row>
              <v-col cols="3" class="doc d-flex align-center">
                <span>ประเภทเอกสาร :</span>
              </v-col>
              <v-col cols="9">
                <v-select
                  color="grey lighten-2"
                  v-model="documentType"
                  :items="documentTypes"
                  append-icon="mdi-chevron-down"
                  append-icon-color="primary"
                  outlined
                  dense
                  hide-details
                  class="custom-height input-select input-select-2"
                  placeholder="กรุณาเลือกประเภทเอกสาร"
                >
                </v-select>
              </v-col>
            </v-row>

            <v-card
              elevation="0"
              class="border-dashed-upload text-center py-8 mt-4"
              @click="handleUpload"
            >
              <v-icon color="green" class="font-48"
                >mdi-cloud-upload-outline</v-icon
              >
              <p class="green--text custom-label mt-2 mb-0">
                อัปโหลดไฟล์เอกสาร
              </p>
            </v-card>

            <div v-if="uploadedFiles.length > 0" class="mt-4">
              <div
                v-for="(file, index) in uploadedFiles"
                :key="index"
                class="d-flex align-center pa-3 mb-2 file-item"
              >
                <v-icon
                  color="red"
                  class="mr-3"
                  style="font-size: 36px !important"
                  >mdi-file-pdf-box</v-icon
                >
                <div class="flex-grow-1">
                  <p class="mb-0 text-body-2">{{ file.name }}</p>
                  <p class="mb-0 text-caption grey--text">
                    {{ formatDate(file) }} {{ formatTime(file) }}
                    {{ formatFileSize(file.size) }}
                  </p>
                </div>
                <v-btn icon small @click="viewFile(file)">
                  <v-icon small class="primary--text">mdi-eye-outline</v-icon>
                </v-btn>
                <v-btn icon small @click="downloadFile(file)">
                  <v-icon small class="primary--text">mdi-download</v-icon>
                </v-btn>
                <v-btn icon small @click="removeFile(index)">
                  <v-icon small class="primary--text">mdi-close</v-icon>
                </v-btn>
              </div>
            </div>
            <input
              ref="fileInput"
              type="file"
              hidden
              accept=".pdf"
              multiple
              @change="onFileChange"
            />
          </v-card-text>
          <v-card-actions class="px-6 pb-4 d-flex justify-center">
            <v-btn text outlined color="grey" @click="closeDialog">
              ยกเลิก
            </v-btn>
            <v-btn
              color="green"
              class="white--text"
              :disabled="uploadedFiles.length === 0 || !documentType"
              @click="submitDocument"
            >
              ตกลง
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
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

  beforeDestroy() {
    this.$store.commit("SET_ETC_DATA", this.formData);
    this.$fileStore.docFile = this.formData.documents;
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
    opendialog() {
      this.dialog = true;
      this.$store.commit("SET_Footer", false);
    },
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
      this.$store.commit("SET_Footer", true);
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
      this.formData.documents.splice(index, 1);
    },
    closeDialog() {
      this.dialog = false;
      this.resetForm();
      this.$store.commit("SET_Footer", true);
    },
    resetForm() {
      this.documentType = null;
      this.uploadedFiles = [];
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

.shadow-card-none {
  box-shadow: none !important;
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

::v-deep .input-select input {
  padding: 0 !important;
  font-size: 14px !important;
  height: 32px !important;
}

::v-deep .input-box input {
  padding: 0 !important;
  font-size: 14px;
  height: 32px !important;
}

::v-deep .input-select-2 .v-select__selection {
  font-size: 0.75rem !important; /* 12px */
}

.v-input.v-input--checkbox.v-input--dense {
  margin: 0 !important;
  padding: 0 !important;
}

.border-dashed {
  border: 1px dashed #ff0000;
  border-radius: 8px;
}

.v-text-field__details {
  display: none !important;
}

.border-dashed {
  border: 2px dashed #e0e0e0 !important;
  cursor: pointer;
  transition: border-color 0.3s;
}

.border-dashed:hover {
  border-color: #4caf50 !important;
}

.border-dashed-upload {
  border: 2px dashed #4caf50 !important;
  background-color: #f1f8f4 !important;
  cursor: pointer;
  transition: all 0.3s;
}

.border-dashed-upload:hover {
  background-color: #e8f5e9 !important;
}

.file-item {
  box-shadow: 0.5px 0.5px 6px rgba(60, 60, 60, 0.15) !important;
}

.document-item {
  background-color: #ffffff;
  border-bottom: 2px solid #fafafa !important;
  transition: background-color 0.2s;
}

.document-item:hover {
  background-color: #f5f5f5;
}

.pdf-icon {
  width: 36px;
  height: 36px;
  background-color: #f44336;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.document-select .v-input__slot {
  border-color: #e0e0e0 !important;
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

::v-deep .custom-select-size .v-select__selection {
  font-size: 0.75rem !important;
}

.document-select:hover .v-input__slot {
  border-color: #bdbdbd !important;
}

.document-select.v-input--is-focused .v-input__slot {
  border-color: #58a144 !important;
  border-width: 2px;
}

.document-select.v-select--is-menu-active .v-input__slot {
  border-color: #58a144 !important;
}

.font-48 {
  font-size: 48px !important;
}
.v-icon.font-48 {
  font-size: 48px !important;
}
.font-10 {
  font-size: 10px;
}
.font-16 {
  font-size: 16px;
}
.doc {
  display: inline-block;
  white-space: nowrap;
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

::v-deep .custom-height .v-input__slot {
  min-height: 32px !important;
  max-height: 32px !important;
}

::v-deep .custom-height .v-select__selections {
  align-items: center !important;
  padding-top: 4px !important;
  padding-bottom: 4px !important;
}

::v-deep .input-select .v-input__append-inner {
  margin-top: 0 !important;
  align-self: center !important;
}

::v-deep .input-select .v-list-item:hover {
  background-color: #f0f9ee !important;
}

::v-deep .input-box label {
  font-size: 0.75rem !important;
}

::v-deep .input-box label {
  font-size: 0.75rem !important;
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

::v-deep .input-select.v-text-field--outlined fieldset {
  border-color: #e6e6e6 !important; /* เทา */
}
::v-deep .input-select.v-input.error--text.v-text-field--outlined fieldset {
  border-color: #e53935 !important; /* สีแดง error */
}
::v-deep .input-select.v-input--is-focused fieldset {
  border-color: #4caf50 !important; /* เขียวเข้ม */
  border-width: 2px !important;
}

::v-deep .custom-radio .v-icon {
  color: #4caf50 !important; /* สีของจุดวงกลม */
}

::v-deep .input-select .v-input__append-inner .v-icon {
  color: #4caf50 !important;
  font-size: 16px;
}

.bg-header {
  background-color: #f0f9ee;
}
</style>
