import { computed } from "vue";
import { useStore } from "vuex";

const useGsp = () => {
  const store = useStore();

  return {
    // Side Menu options
    // sideMenuOpen: computed(() => store.getters["ui/sideMenuOpen"]),
    sideMenuOpen: computed({
      get() {
        return store.getters["gsp/sideMenuOpen"];
      },
      set(val) {
        store.commit("gsp/toggleSideMenu");
      },
    }),
    toggleSideMenu() {
      store.commit("gsp/toggleSideMenu");
    },
  };
};

export default useGsp;
