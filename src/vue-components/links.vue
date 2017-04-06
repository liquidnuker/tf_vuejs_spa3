<template>
<div id="vc-router-links" class="vc-router-links">
  <div class="menubar">
    <router-link to="/">Home</router-link>
    <router-link to="/bonsai">bonsai</router-link>
    <router-link v-bind:to="'/bonsai/:' + species">{{ species }}</router-link>
    
  </div>
  <router-view class="router-view"></router-view>
</div>
</template>
<script>
  export default {
    data () {
      return {
        species: 'species1',
        msg2: 'user-msg2'
      }
    },
    computed: {
      gr: function () {
        // return this.$route
      }
    }
  }
</script>