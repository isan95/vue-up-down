import Vue from 'vue';
import App from './App.vue';
import  { router }  from './router';
import store from './store';
import VeeValidate from 'vee-validate';
import Vuex from 'vuex';

import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';
/*
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faCloudUploadAlt
} from '@fortawesome/free-solid-svg-icons';
*/
//library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faCloudUploadAlt);


Vue.use(VeeValidate);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
//Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')