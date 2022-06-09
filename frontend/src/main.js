import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)
// //example using Fontawesome v.5
// <font-awesome-icon :icon="['fas', 'user-secret']" />
// <font-awesome-icon :icon="['fab', 'youtube']" />
// <font-awesome-icon :icon="['far', 'address-book']" />


//vue toast notification
import VueToast from 'vue-toast-notification'
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css'
// import 'vue-toast-notification/dist/theme-sugar.css';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'popper.js/dist/popper.min.js'

createApp(App)
.use(router)
.use(VueToast)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
