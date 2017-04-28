<template>
  <div id="vc-page-bonsai" class="vc-page-bonsai">
    <p>vc-page-bonsai</p>
    <div id="galleryContainer">
      <div v-for="i in items">
        <div class="col-sm-12 col-sm-4">
          {{ i.id }} <br>
          {{ i.thumb }} <br>
          <img v-bind:src="'img/' + i.id +'.jpg'" v-bind:id="i.id">
        </div>
      </div>
    </div>
    <p>params: {{$route.params}}</p>
    <button v-on:click="customUrl">custom url</button>
  </div>
</template>

<script>
import {store} from "../js/store.js";
import {router} from "../index.js";
import {jsonLoader} from "../js/jsonloader.js";

export default {
  data() {
    return {
      items: store.state
    }
  },
  created: function () {
    console.log(store.state);
    console.log("created-loadItems");
    // load ajax
    // this.loadItems();

    this.loadCheck();
  },
  beforeUpdate: function() {
    console.log("beforeUpdate");
  },
  updated: function () {
    console.log("updated");
  },
  mounted: function () {
    console.log("mounted");
    // this.refreshState();
  },
  methods: {
    changeState: function() {
      store.state = "new state"
      console.log(store.state);
    },
    refreshState: function() {
      // refresh state. 
      // triggers beforeUpdate, updated hook
      this.items = store.state;
    },
    loadItems: function() {
      let self = this;
      const jsonUrl = "./src/js/ajax/bonsai.json";
      jsonLoader.getJSON(jsonUrl).then(function (response) {
        store.state = response.bonsai;
        console.log(store.state.length);
        }).then(function () {
        self.refreshState();
      }).then(function () {
        console.log("paginator");
      });
    },
    loadCheck: function () {
      if (!this.$route.params.species) {
        console.log("no species: " + !this.$route.params.species + " load all");
        
        // check if state is empty
        if (this.items === '') {
          console.log("empty");
        }
      
      } else if (!this.$route.params.id) {
        console.log("no id. just load species");
      } else {
        console.log("load species then id");
      }
    }, // end loadcheck 
    customUrl: function () {
      router.push('/bonsai/:87956876/:ofgfjgfgh')
    }
  }
}
</script>