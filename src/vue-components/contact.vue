<template>
  <div id="vc-page-contact" class="vc-page-contact">
    <p>vc-page-contact</p>
    <p>path: {{$route.path}}</p>
    <p>params: {{$route.params}}</p>
    <p>params id: {{$route.params.id}}</p>

    <p>{{ msg }}</p>
    <p>store state: {{ msg2 }}</p>
    <br>
    <br>
    <p>computed: {{ gr }}</p>
  </div>
</template>
<script>
  import {mediator} from "../mediator.js";
  import "../jsonloader.js";
  import {store} from "../store.js";

  export default {
    data () {
      return {
        msg: '',
        msg2: store.state
      }
    },
    computed: {
      gr: function () {
        this.prepare(this.$route.params.id);
        this.msg2 = store.state;
        return this.$route.params.id;
      }
    },
    beforeCreate: function () {
      // todo: insert loading v-if
    },
    created: function () {
      this.prepare(this.$route.params.id);

    },
    methods: {
      prepare: function(url) {
        // convert to array to remove the " : "
        let urlArray = url.split("");
        urlArray.splice(0, 1);
        
        // convert back to str
        let urlString = urlArray.join("");
        
        // send to outside store to fetch data
        this.msg = "urlString: " + urlString; 
        // jsonLoader.url = urlString;
        console.log(urlString);  
        mediator.publish("jsonLoader", urlString);     
      }
    }
  }
</script>