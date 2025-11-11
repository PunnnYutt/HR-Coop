const fileStore = {
  // We'll store our file from the form here
  docFile: [],
  imageFile: null,
};

// 'inject' makes it available on the Nuxt context (this.$fileStore)
export default (context, inject) => {
  inject("fileStore", fileStore);
};
