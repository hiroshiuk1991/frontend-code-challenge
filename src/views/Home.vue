<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PostImages />
  </div>
</template>

<script>
// @ is an alias to /src
import PostImages from '@/components/PostImages.vue'

export default {
  name: 'Home',
  components: {
    PostImages
  }
}
</script>
