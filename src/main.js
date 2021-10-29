import Vue from 'vue'
import App from './App.vue'
import SortedTablePlugin from "vue-sorted-table"
import AsyncComputed from 'vue-async-computed'

Vue.use(SortedTablePlugin);
Vue.use(AsyncComputed)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
