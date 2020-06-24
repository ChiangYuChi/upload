import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueI18n from "vue-i18n";
import 'swiper/css/swiper.css';
import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css';
import tw from "./language/tw";
import us from "./language/en";





Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, )
Vue.use(VueI18n);
Vue.locale = () => {};

const messages = {

  tc: tw,
  en: us
};



const i18n = new VueI18n({

  locale: localStorage.getItem("language") || "tc",
  messages
})


new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  i18n
})


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
})