<template>
  <div class="Images">
    <Header />
    <PostImages />
  </div>
</template>

<script>

import Header from '@/components/Header.vue'
import PostImages from '@/components/PostImages.vue'


export default {
  name: 'Images',
  components: {
    Header,
    PostImages
  }
}
</script>
