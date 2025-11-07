export const state = () => ({
  pages: {
    1: {
      /* fields for page1 */
    },
    2: [],
    3: [],
    4: [],
    5: {},
    6: {
      /* fields for page6 */
    },
  },
});

export const mutations = {
  SET_EDUCATION_DATA(state, payload) {
    state.pages[2] = [...payload];
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
};
