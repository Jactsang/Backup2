import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { Cropper, CircleStencil } from "vue-advanced-cropper";
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

Vue.config.productionTip = false

Vue.use(Vuesax, {
 // options here
})

Vue.component(Cropper);
Vue.component(CircleStencil);
Vue.component(VueQrcode.name, VueQrcode);

new Vue({
 router,
 store,
 render: h => h(App)
}).$mount('#app')
