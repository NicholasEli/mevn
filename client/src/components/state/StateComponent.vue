<template>
  <div id="state-component" class="page-wrapper component-container">
  	<HeaderComponent />
  	<AsideComponent />
    <main>
    		<h1 class="heading">Data and Methods</h1>
    		<p>Data and Methods
When a Vue instance is created, it adds all the properties found in its data object to Vue’s reactivity system. When the values of those properties change, the view will “react”, updating to match the new values.</p>
      <button v-on:click="changeState()">Change State</button>
      <div class="example-wrapper" v-if="!active">
				<img class="example" src="../../assets/methodsData.png">
      </div>
      <div v-if="active">
        <br/>
        <p>You have change the state!</p>
      </div>
    </main>		
  </div>
</template>

<script>
import AsideComponent from  '../AsideComponent'
import HeaderComponent from  '../HeaderComponent'

export default {
  name: 'StateComponent',
  components: {
  	AsideComponent,
  	HeaderComponent
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    changeState(){
      this.active ? this.active = false : this.active = true
    }
  }
}
</script>

<style lang="scss">
	@import '../../scss/_variables.scss';
	div#state-component{
		main{
			
		}
	}
</style>
