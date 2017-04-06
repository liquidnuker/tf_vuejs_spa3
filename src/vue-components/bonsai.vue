<template>
  <div id="vc-page-bonsai" class="vc-page-bonsai">
    <p>vc-page-bonsai</p>
    <p>status</p>
    <p>params: {{$route.params}}</p>
  </div>
</template>

<script>
import {mediator} from "../mediator.js";
import {store} from "../store.js";

export default {
  data() {
    return {
      status: ''
    }
  },
  computed: {},
  beforeCreate: function () {
  // todo: insert loading v-if
    console.log("beforeCreate");
  },
  created: function () {
    console.log("created");
    this.loadCheck();
  },
  updated: function () {
    console.log("updated");
    this.loadCheck();
  },
  methods: {
    loadCheck: function () {
      if (!this.$route.params.species) {
        console.log("no species: " + !this.$route.params.species + " load all");
      }
    }
  }
}  
</script>