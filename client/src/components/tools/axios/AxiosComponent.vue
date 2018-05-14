<template>
  <div id="axios-component" class="component-container">
    <h1 class="heading">Class and Style Bindings</h1>
      <p>Axios is a promised based http client with polyfils for browser support.</p>
      <button v-on:click="req()">Fire an Axios Request</button>
      <hr v-if="data">
      <h4 v-if="data">{{data.title}}</h4>
      <p v-if="data">{{data.description}}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AxiosComponent',
  data() {
    return {
      data: null
    }
  },
  methods: {
    req(){
      axios.get('http://localhost:8081/posts')
      .then((res) => {
        this.data = res.data
      })
      .catch((err) => {
        console.err(err)
      })
    }
  }
}
</script>

