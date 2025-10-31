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
                  <v-row no-gutters class="green lighten-5 py-2 pr-3 pl-4 mb-4">
                    <v-col cols="10" class="pt-1">
                      <p
                        class="primary--text lighten-1 mb-0 font-weight-medium"
                      >
                        ทักษะและความสามารถ  (ทักษะทางคอมพิวเตอร์)  / Computer skills
                      </p>
                    </v-col>
                    <v-col cols="2" class="pl-6">
                      <v-btn
                      class="btn-add-skill primary--text pl-6 pr-0"  
                      @click="addRowHandler"
                      >
                      <v-icon start class="mr-3">mdi-plus-circle-outline</v-icon>
                      <span class="text-body-1">เพิ่มทักษะ</span>
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row no-gutters class="pl-3 pt-0" v-for="(row, index) in rows" :key="row.id">
                    <v-col>
                      <v-row v-if="index > 0" class="pr-3">
                      <v-divider class="mt-3"></v-divider>
                    </v-row>
                    <v-row class="pt-1 pl-1">
                      <v-col md="1">
                      <p>ทักษะที่ {{ index+1 }}</p>
                      <p class="grey--text">No {{ index+1 }}.</p>
                    </v-col>
                    <v-col md="4">
                      <v-col class="pt-1 pl-0 pr-md-4">
                        <v-text-field
                          outlined
                          dense
                          hide-details="auto"
                          class="ma-0"
                          placeholder="ระบุทักษะ"
                        />
                      </v-col>
                    </v-col>
                    <v-col md="1" class="px-0">
                      <p>ระดับทักษะ :</p>
                      <p class="grey--text">Skill level</p>
                    </v-col>
                    <v-col md="3">
                      <v-radio-group v-model="row.choice" row class="color-label custom-label pl-md-1 mt-1 mt-md-1">
                        <v-col cols="12" md="4" class=" d-flex flex-row flex-md-colum mr-md-0 pa-md-0 pt-0">
                        <v-radio value="three" class="color-label custom-radio">
                          <template #label>
                            <v-col class="pa-0">
                              <p>ดีมาก</p>
                              <p class="text-caption text--secondary">Excellen</p>
                            </v-col>
                          </template>
                        </v-radio>
                        <v-radio value="one" class="color-label custom-radio">
                          <template #label>
                            <v-col class="pa-0">
                              <p>ดี</p>
                              <p class="text-caption text--secondary">Good</p>
                            </v-col>
                          </template>
                        </v-radio>
                        <v-radio value="two" class="color-label custom-radio">
                            <template #label>
                              <v-col class="pa-0">
                                <p>พอใช้</p>
                                <p class="text-caption text--secondary">fiar</p>
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
                        <v-icon color="grey" class="icon-delete">mdi-trash-can-outline</v-icon>
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
  data () {
    return {
      rows: [
         { id: 1,skil: '', choice: '' },
         { id: 2,skil: '', choice: '' },
         { id: 3,skil: '', choice: '' },

      ],
    }
  },
  methods: {
    addRowHandler() {
      this.rows.push({ id: Date.now(),skil: '', choice: ''  }) 
    },
    removeRow(id) {
      this.rows = this.rows.filter(row => row.id !== id)
    },
  },
};
</script>
<style>
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
.btn-delete{
  height: 32px !important;
  min-width: 32px !important;
}
.icon-delete{
  font-size: 18px !important;
}
</style>
