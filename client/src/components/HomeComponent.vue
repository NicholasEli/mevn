<template>
  <main id="home-component" class="component-container">
    <div>
      <img src="../assets/mevn.png">
      <router-link to="/state">START</router-link>
    </div>
  </main>
</template>

<script>
import Router from 'vue-router'

export default {
  name: 'HomeComponent',
}
</script>

<style lang="scss">
  @import '../scss/_variables.scss';

  main#home-component{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img{
        margin-bottom: 1rem;
      }

      a{
        font-size: 1.3rem;
        color: $gray;
        text-decoration: none;
        transition: all 200ms;
        &:hover{          
          color: $blue;
        }
      }
    }
  }
</style>
