<template>
  <div id="vc-page-bonsai" class="vc-page-bonsai">
    <p>vc-page-bonsai</p>
    <p>{{ status }}</p>
    <p>params: {{$route.params}}</p>
  <button v-on:click="customUrl">custom url</button>
  </div>

</template>

<script>
import {mediator} from "../js/mediator.js";
import {store} from "../js/store.js";
import {router} from "../index.js";

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
      } else if (!this.$route.params.id) {
        console.log("no id. just load species");
      } else {
        console.log("load species then id");
      }
    }, // end loadcheck 
    customUrl: function() {
      router.push('/bonsai/:87956876/:ofgfjgfgh')
    }
  }
}  
</script>