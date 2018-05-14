<template>
  <aside id="aside-component" class="component-container">
    <ul>
      <li v-for="route in routes">
        <router-link :to="route.path" v-if="!route.children">{{route.name}}</router-link>
        <span v-if="route.children">{{route.name}}</span>
        <ul v-if="route.children">
          <li v-for="child in route.children">
            <router-link :to="`${route.path}/${child.path}`">{{child.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
import Router from 'vue-router'
import store from '../store.js'

export default {
  name: 'AsideComponent',
  data() {
    return {
      routes: store.state.routes 
    }
  }
}
</script>

<style lang="scss">
	@import '../scss/_variables.scss';

	aside#aside-component{
    width: 12rem;
    height: calc(100vh - 3.125rem);
    padding: 1rem 0;
    ul{
      li{
        a, span{
          display: inline-block;
          padding: .5rem 1rem;
          color: $gray;
          text-decoration: none;
          font-weight: 200;
          text-transform: capitalize;
          letter-spacing: 1px;
        }

        span{
          color: $blue;
        }

        a{
          transition: all 200ms;
          &:hover,
          &.router-link-active{
            color: $green;
          }
        }

        ul{
          margin-left: 1rem;
        }
      }
    }
	}
</style>
