<!-- this component is not meant to be understood as part of demo, however this is an example of embeded views work.  Please view sub components to continue demo -->

<template>
	<div id="tools-component" class="page-wrapper component-container">
		<HeaderComponent />
	  <AsideComponent />
	  <main>
			<router-view></router-view>
	  </main>
	</div>
</template>

<script>
import Router from 'vue-router'
import AsideComponent from  '../AsideComponent'
import HeaderComponent from  '../HeaderComponent'

export default {
  name: 'ToolsComponent',
  components: {
    AsideComponent,
    HeaderComponent
  }
}
</script>

<style lang="scss">
  @import '../../scss/_variables.scss';

</style>
