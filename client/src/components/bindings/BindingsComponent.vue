<template>
  <div id="bindings-component" class="page-wrapper component-container">
    <HeaderComponent />
    <AsideComponent />
    <main>
      <h1 class="heading">Template Bindings</h1>
      <p>Template bindings are used to render logic, styles and attributes. The all consist of the <span class="text-green">v-</span> identifier, made up of the following examples:</p>
      <ul>
        <li v-for="item in bindings">
          {{item}}
        </li>
      </ul>
      <div class="example-wrapper">
        <img class="example" src="../../assets/bindings.png">
      </div>
    </main>
  </div>
</template>

<script>
import AsideComponent from  '../AsideComponent'
import HeaderComponent from  '../HeaderComponent'

export default {
  name: 'BindingsComponent',
  data() {
    return {
      bindings: ['v-for="item in obj"', 'v-on:event="{ someEvent() }"', 'v-style="{ key: "value" }"']
    }
  },
  components: {
    AsideComponent,
    HeaderComponent
  },
}
</script>

<style lang="scss">
  @import '../../scss/_variables.scss';

  #bindings-component{
    main{
      ul{
        margin-left: 1rem;
        li{
          list-style-type: circle;
          padding: .5rem 0;
          color: darken($green, 15%);
        }
      }
    }
  }
</style>

