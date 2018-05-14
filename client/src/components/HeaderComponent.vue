<template>
  <header id="header-component" class="component-container">
    <img src="../assets/mevn.png">
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss">
	@import '../scss/_variables.scss';

	header#header-component{
    width: 100%;
    height: 3.125rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-bottom: 2px solid lighten($gray, 70%);

    img{
      width: auto;
      height: 2rem;
    }
	}
</style>
