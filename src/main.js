//import Vue from 'vue'
import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
//import vueHeadful from 'vue-headful';


//Vue.component('vue-headful', vueHeadful);

//Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app').component('vue-headful', vueHeadful)

// const app = createApp({
//   router,
//   App,
// });
// app.component('vue-headful', vueHeadful)
// app.mount('#app');

createApp(App)
  .use(router)
  .mount('#app')

//vue.config.productionTip = false
