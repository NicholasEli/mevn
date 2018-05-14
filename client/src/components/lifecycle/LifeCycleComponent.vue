<template>
  <div id="life-cycle-component" class="page-wrapper component-container">
    <HeaderComponent />
    <AsideComponent />
    <main>
      <h1 class="heading">Lifecycle</h1>
      <p>Below is a diagram for the instance lifecycle. You don’t need to fully understand everything going on right now, but as you learn and build more, it will be a useful reference.</p>
      <div class="example-wrapper">
        <img class="example" src="../../assets/lifecycle.png">
      </div>
    </main>
  </div>
</template>

<script>
import AsideComponent from  '../AsideComponent'
import HeaderComponent from  '../HeaderComponent'

export default {
  name: 'LifeCycleComponent',
  data() {
    return {
      
    }
  },
  components: {
    AsideComponent,
    HeaderComponent
  },
  beforeCreate(){

  },
  created(){
    
  },
  beforeMount(){

  },
  mounted(){

  },
  beforeUpdate(){

  },
  updated(){

  },
  beforeDestroy(){

  },
  destroyed(){
    
  }
}
</script>

