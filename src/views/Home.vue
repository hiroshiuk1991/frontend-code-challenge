<template>
  <div class="intro">
    <h1>Welcome to Image Finder App</h1>
    <button class="btn" @click="()=>$router.push('images')">Click Here To See Images</button>
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
  color: #de8d03;
  margin-top: 60px;
}

.btn {
  background-color: rgba(255, 255, 255, 0.619); /* Green */
  border: none;
  color: #de8d03;
  font-size: 24px;
  padding: 32px 16px;
  transition-duration: 0.4s;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)

}

.btn:hover {
  background-color: #de8d03; /* Green */
  color: white;
}
</style>