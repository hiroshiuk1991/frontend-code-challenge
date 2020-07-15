<template>
<div>
    <div v-for="image in images" :key="image.id">
        <img v-bind:src="image.urls.thumb" v-bind:alt="image.alt_description">
       <h2> <a v-bind:href=image.user.portfolio_url>{{ image.user.first_name }}</a> </h2>
    </div>
</div>
  
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('images', ['images'])
    },
    created() {
        this.$store.dispatch('images/loadImages')
    }
}
</script>

<style> 

</style>