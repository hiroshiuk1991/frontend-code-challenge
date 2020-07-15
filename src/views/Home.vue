<template>
  <div class="intro">
    <h1>Welcome to Image Finder App</h1>
    <button @click="()=>$router.push('images')">See Images</button>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Varela+Round");
#app {
  font-family: "Varela Round", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>