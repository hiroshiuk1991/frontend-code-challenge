<template>
<div>
    <div v-for="image in images" :key="image.id">
        <img v-bind:src="image.urls.thumb" v-bind:alt="image.alt_description">
        <h3> {{ image.user.first_name }} </h3>
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