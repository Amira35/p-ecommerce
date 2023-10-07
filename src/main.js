import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//pinia
import {createPinia} from 'pinia'
const pinia = createPinia()

//mitt
import mitt from 'mitt'
const Emitter = mitt()

//Swipper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
export default createVuetify({
  components: {
    VSkeletonLoader,
  },
})

const vuetify = createVuetify({
  components,
  directives,
})


createApp(App).use(vuetify).provide('Emitter' , Emitter).use(router).use(pinia).mount('#app')
