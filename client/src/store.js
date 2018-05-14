import Vue from 'vue'
import Vuex from 'vuex'
import HomeComponent from '@/components/HomeComponent'
import StateComponent from '@/components/state/StateComponent'
import TemplateComponent from '@/components/template/TemplateComponent'
import LifeCycleComponent from '@/components/lifecycle/LifeCycleComponent'
import BindingsComponent from '@/components/bindings/BindingsComponent'

import ToolsComponent from '@/components/tools/ToolsComponent'
import AxiosComponent from '@/components/tools/axios/AxiosComponent'
import VuexComponent from '@/components/tools/vuex/VuexComponent'

Vue.use(Vuex)

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/template',
      name: 'Vue Template Style',
      component: TemplateComponent
    },
    {
      path: '/state',
      name: 'state',
      component: StateComponent
    },
    {
      path: '/lifecycle',
      name: 'Lifecycle Events',
      component: LifeCycleComponent
    },
    {
      path: '/bindings',
      name: 'Class and Style Bindings',
      component: BindingsComponent
    },
    {
      path: '/addional-tools',
      name: 'Additional Tools',
      component: ToolsComponent,
      children: [
        {
          path: 'axios',
          name: 'Axios',
          component: AxiosComponent
        },
        {
          path: 'vuex',
          name: 'VueX',
          component: VuexComponent
        }
      ]
    }
  ]

const store = new Vuex.Store({
  state: {
    routes: routes
  }
})

export default store
