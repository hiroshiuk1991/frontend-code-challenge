<template>
  <div>
      <h1> Welcome to Image Finder App </h1>
      <h2>This app has been created to showcase different images created by photographers/artists. </h2>
      <button @click="()=>$router.push('images')" > See Images </button>
      <p></p>
  </div>
</template>

<script>
export default {
  name: 'Home'

}
</script>

<style>

</style>