import Vuex from 'vuex';
import Vue from 'vue';
import guestInfo from './modules/guestInfo';

// Load Vuex
Vue.use(Vuex);

// Create Store
export default new Vuex.Store({
    modules: {
        guestInfo
    }
});