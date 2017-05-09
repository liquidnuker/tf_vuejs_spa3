<template>
  <div id="vc-page-bonsai" class="vc-page-bonsai">
    <p>vc-page-bonsai</p>
    <div id="galleryContainer">
      <div v-for="i in currentItem">
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
import {jsonFilter} from "../js/jsonFilter.js";

export default {
  data() {
      return {
        currentItem: store.currentItem
      }
    },
    created: function () {
      console.log(store.state);
      this.loadItems();
    },
    beforeUpdate: function () {
      console.log("beforeUpdate");
      
    },
    updated: function () {
      console.log("updated");
      this.refreshItems();
    },
    mounted: function () {
      console.log("mounted");
      this.paramCheck();
    },
    watch: {
      $route: function() {
        console.log(this.$route.params);
        this.paramCheck();
      }
    },
    methods: {
      refreshItems: function() {
        this.currentItem = store.currentItem;
      },
      loadItems: function() {
        const jsonUrl = "./src/js/ajax/bonsai.json";
        // check if empty
        let self = this;
        if (store.allItems === '') {
          jsonLoader.getJSON(jsonUrl).then(function (response) {

          // inject to all items  
          store.allItems = response.bonsai;
          self.refreshItems();
          console.log(store.allItems.length);
          }).then(function () {
            // set currentItem to allItems
            store.currentItem = store.allItems;
          }).then(function() {
            self.paramCheck();
          });
        }
      },
      paramCheck: function() {
        // choose which items to display based on param
        if (!this.$route.params.species) {
          this.showAll();
        } else {
          this.showSpecies();
        }
      },
      showAll: function() {
        // check if empty
        if (store.allItems === '') {
          this.loadItems();
        } else {
          console.log("showall");
          // set currentItem to allItems.
          store.currentItem = store.allItems;
          this.refreshItems();
        }
      },
      showSpecies: function() {
        let self = this;
        const filterSpecies = jsonFilter.filter("Jukan").then(function() {
          
          // check if id exists
          if (self.$route.params.id === undefined) {
            console.log("no id. proceed to load species");
            self.refreshItems();
          }
        });
        return filterSpecies;
        console.log("showspecies");
        
      },
      showId: function() {
        console.log("showId");
      },
      customUrl: function () {
        router.push('/bonsai/:87956876/:ofgfjgfgh')
      }      
    }
}
</script>