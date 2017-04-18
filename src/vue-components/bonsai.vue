<template>
  <div id="vc-page-bonsai" class="vc-page-bonsai">
    <p>vc-page-bonsai</p>
    <br>
    <p>
    {{ items }}
    </p>
    <p>params: {{$route.params}}</p>
  <button v-on:click="customUrl">custom url</button>
  </div>

</template>

<script>
import {store} from "../js/store.js";
import {router} from "../index.js";
import {mediator} from "../js/mediator.js";

export default {
  data() {
      return {
        items: store.state
      }
    },
    computed: {
      gr: function () {
        this.items = store.state;
      }
    },
    beforeCreate: function () {
      // todo: insert loading v-if
    },
    created: function () {
      console.log("created");
      // this.items = store.state;
      this.loadCheck();
    },
    updated: function () {
      console.log("updated");
      this.loadCheck();
    },
    mounted: function () {
      console.log("mounted");
    },
    methods: {
      loadCheck: function () {
        if (!this.$route.params.species) {
          // console.log("no species: " + !this.$route.params.species + " load all");

          // load all
          return new Promise(function (resolve, reject) {

            const itemstore = mediator.publish("loadAll");
            resolve(itemstore);
            // reject(Error("error"));

          }).then(function (resolved) {
            // success
            console.log("resolved");


          }, function (err) {
            console.log(err); // error
          });


        } else if (!this.$route.params.id) {
          // console.log("no id. just load species");
        } else {
          // console.log("load species then id");
        }
      }, // end loadcheck 
      customUrl: function () {
        router.push('/bonsai/:87956876/:ofgfjgfgh')
      }
    }
}
</script>