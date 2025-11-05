export const state = () => ({
  pages: {
    1: {
      /* fields for page1 */
    },
    2: [],
    3: {
      /* fields for page3 */
    },
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
};
