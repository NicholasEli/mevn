<template>
  <div id="template-component" class="page-wrapper component-container">
    <HeaderComponent />
    <AsideComponent />
    <main>
        <h1 class="heading">Vue Template Style</h1>
        <p>Vue.js uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance’s data. All Vue.js templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers.</p>

        <p>Under the hood, Vue compiles the templates into Virtual DOM render functions. Combined with the reactivity system, Vue is able to intelligently figure out the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.</p>
        <div class="example-wrapper">
          <img class="example" src="../../assets/template.png">
        </div>
    </main>   
  </div>
</template>

<script>
import AsideComponent from  '../AsideComponent'
import HeaderComponent from  '../HeaderComponent'

export default {
  name: 'TemplateComponent',
  components: {
    AsideComponent,
    HeaderComponent
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
