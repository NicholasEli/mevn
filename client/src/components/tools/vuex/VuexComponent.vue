<template>
  <div id="vuex-component" class="component-container">
    <h1 class="heading">Vuex</h1>
      <p>Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.</p>

      <p>You can see an example of it in store.js, router/index.js and AsideComponent, The store is keeping the object for all the routes and then distributes them for use to Vue Router and AsideComponent.</p>

      <a href="https://vuex.vuejs.org/en/intro.html" target="_blank">See VueX</a>
  </div>
</template>

<script>

export default {
  name: 'VuexComponent'
}
</script>

<style lang="scss">
  @import '../../../scss/_variables.scss';

  #vuex-component{
    a{
      color: $green;
      text-decoration: none;
    }
  }
</style>

