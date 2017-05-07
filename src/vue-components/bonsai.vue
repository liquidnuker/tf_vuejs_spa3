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
      // load json
    },
    beforeUpdate: function () {
      console.log("beforeUpdate");
      // this.loadCheck();
    },
    updated: function () {
      console.log("updated");
    },
    mounted: function () {
      console.log("mounted");
    },
    methods: {
      customUrl: function () {
        router.push('/bonsai/:87956876/:ofgfjgfgh')
      }      
    }
}
</script>