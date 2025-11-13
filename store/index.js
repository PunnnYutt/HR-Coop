export const state = () => ({
  pages: {
    1: {
      /* fields for page1 */
    },
    2: [],
    3: [],
    4: [],
    5: {},
    6: {},
  },

  footerDisplay: true,

  // pageValidation: { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true },
});

export const mutations = {
  SET_EDUCATION_DATA(state, payload) {
    state.pages[2] = payload;
  },

  SET_FAMILY_DATA(state, payload) {
    state.pages[3] = payload;
  },

  SET_SKILL_DATA(state, payload) {
    state.pages[4] = payload;
  },

  SET_ETC_DATA(state, payload) {
    state.pages[5] = payload;
  },

  SET_INDEX_DATA(state, payload) {
    state.pages[6] = payload;
  },

  SET_Footer(state, payload) {
    state.footerDisplay = payload;
  },

  SET_Footer(state, payload) {
    state.footerDisplay = payload;
  },

  // SET_Validation(state, page, payload) {
  //   state.pageValidation[page] = state.pageValidation[page] && !payload;
  //   console.log("page:" + page);
  //   console.log("payload:" + payload);
  //   console.log("store:" + state.pageValidation[page]);
  // },
};
