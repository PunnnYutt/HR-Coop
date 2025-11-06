export const state = () => ({
  pages: {
    1: {
      /* fields for page1 */
    },
    2: [],
    3: [],
    4: {
      /* fields for page4 */
    },
    5: {
      /* fields for page5 */
    },
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
};
