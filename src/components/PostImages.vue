<template>
<div>
    <div v-for="image in images" :key="image.id">
        <img  src="" v-bind="image.raw" v-bind:alt="image.alt_description">
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