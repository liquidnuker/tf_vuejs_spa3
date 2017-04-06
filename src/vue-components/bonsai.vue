<template>
  <div id="vc-page-bonsai" class="vc-page-bonsai">
    <p>vc-page-bonsai</p>
    <p>show all</p>
    <p>params: {{$route.params}}</p>
  </div>
</template>

<script>
  import {mediator} from "../mediator.js";
  import {store} from "../store.js";
  
  export default {
    data () {
      return {
        
      }
    },
    computed: {
    },
    beforeCreate: function () {
      // todo: insert loading v-if
      console.log("beforeCreate");
    },
    created: function () {
      console.log("created");
    },
    methods: {
      prepare: function(url) {
        // convert to array to remove the " : "
        // let urlArray = url.split("");
        // urlArray.splice(0, 1);
        
        // convert back to str
        // let urlString = urlArray.join("");
        
        // send to outside store to fetch data
        // this.msg = "urlString: " + urlString; 
        // jsonLoader.url = urlString;
        // mediator.publish("jsonLoader", urlString);     
      }
    }
  }
</script>