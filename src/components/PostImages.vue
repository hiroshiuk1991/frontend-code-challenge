<template>
  <div class="image-card__body">
    <div class="image-card" v-for="image in images" :key="image.id">
      <img
        class="image-card__image"
        v-bind:src="image.urls.thumb"
        v-bind:alt="image.alt_description"
      />
      <h2>
        <a v-bind:href="image.user.portfolio_url">Artist: {{ image.user.first_name }}</a>
      </h2>
      <h3>Bio: {{image.user.bio}}</h3>
      <h4>Likes: {{ image.likes }}</h4>
      

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("images", ["images"])
  },
  created() {
    this.$store.dispatch("images/loadImages");
  }
};
</script>

<style lang="scss" scoped>
.image-card {
  width: calc(20% - 1rem);
  float: left;
  margin: 0.5rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  background: white;
  display:table-cell;

  @media only screen and (max-width: 799px) {
    width: calc(50% - 1rem);
  }
  @media only screen and (max-width: 549px) {
    width: 100%;
    margin: 0.5rem 0;
  }
}
.image-card__image {
  border-radius: 5px 5px 0 0;
  width: 90%;
  height: 200px;
  object-fit:initial;
  padding: 10px;
}
.image-card__body {
  padding: 0.5rem 1rem 1rem;
  display: table;
  table-layout: fixed;
}
</style>