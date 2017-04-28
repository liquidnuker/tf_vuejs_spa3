<template>
<div id="vc-router-links" class="vc-router-links">
  <div class="menubar">
    <router-link to="/">Home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/bonsai">bonsai</router-link>
    <router-link v-bind:to="'/bonsai/:' + species">{{ species }}</router-link>
    <!-- <router-link v-bind:to="'/bonsai/:' + species + '/:' + id">{{ speciesId }}</router-link> -->
    <router-link v-bind:to="'/bonsai/:' + species + '/:'+  id">speciesid</router-link>
  </div>
  <router-view class="router-view"></router-view>
</div>
</template>
<script>
export default {
  data () {
    return {
      species: 'species2',
      id: 'id2'
    }
  },
  computed: {
  }
}
</script>