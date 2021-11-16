import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import localForage from 'localforage';
import Fruits from './modules/fruits';

const vuexLocal = new VuexPersistence({
  storage: localForage,
  asyncStorage: true,
});

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    Fruits
  },
  plugins: [vuexLocal.plugin]
})
