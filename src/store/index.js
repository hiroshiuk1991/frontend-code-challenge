import Vue from 'vue'
import Vuex from 'vuex'
import images from './modules/images'
import SuiVue from 'semantic-ui-vue';

Vue.use(Vuex);
Vue.use(SuiVue);

export default new Vuex.Store({
  modules: {
    images
  }
})
