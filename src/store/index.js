import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import gsp from "./gsp";

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      gsp,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
