<template>
  <v-row class="ma-md-0">
    <v-col class="mt-3 pa-0 mt-md-0 pb-md-0">
      <v-card
        rounded="lg"
        class="px-0 pt-0 mt-3 mt-md-0"
        :class="
          $vuetify.breakpoint.mdAndUp ? 'shadow-card' : 'shadow-card-none'
        "
      >
        <v-row no-gutters class="green lighten-5 pl-4 pr-0 py-9px">
          <v-col cols="10" class="d-flex align-center">
            <p
              class="primary--text lighten-1 text-body-2 mb-0 font-weight-medium"
            >
              เอกสารประกอบ / Supporting Documents
            </p>
          </v-col>
        </v-row>
        <v-row no-gutters class="pa-4" v-if="documents.length === 0"> </v-row>

        <!-- Documents List Section -->
        <v-row no-gutters v-else>
          <v-col cols="12">
            <!-- Document Items -->
            <div
              v-for="(doc, index) in documents"
              :key="index"
              class="document-item d-flex align-center pa-3"
            >
              <!-- PDF Icon -->
              <div class="pdf-icon mr-3">
                <v-icon color="white" size="12">mdi-file-pdf-box</v-icon>
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
                    <p class="mb-0 text-body-2 font-weight-medium grey--text">
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
                <v-btn icon small @click="viewDocument(doc)" class="mr-2">
                  <v-icon color="primary">mdi-eye-outline</v-icon>
                </v-btn>
                <v-btn icon small @click="downloadDocument(doc)" class="mr-2">
                  <v-icon color="primary">mdi-download</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "form",
  mounted() {
    this.documents = [...this.$fileStore.docFile];
  },

  data() {
    return {
      dialog: false,
      documents: [],
    };
  },
  methods: {
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

.shadow-card {
  box-shadow: 0.5px 0.5px 6px rgba(0, 0, 0, 0.15) !important;
}

.shadow-card-none {
  box-shadow: none !important;
}

.custom-label {
  font-size: 0.75rem !important;
  font-weight: 500;
}

.py-9px {
  padding-top: 9px !important;
  padding-bottom: 9px !important;
}

.border-dashed {
  border: 2px dashed #e0e0e0 !important;
  cursor: pointer;
  transition: border-color 0.3s;
}

.border-dashed:hover {
  border-color: #4caf50 !important;
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
</style>
