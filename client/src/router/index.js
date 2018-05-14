import Vue from 'vue'
import store from '../store.js'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
 	routes: store.state.routes
})
