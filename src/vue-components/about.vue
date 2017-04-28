<template>
<div id="about" class="vc-about">
  <p>vc-about</p>
  <!-- page-specific component mount point-->
  <p id="about-component1"></p>
</div>
</template>
<script>
import Vue from "vue";
import aboutComponent1 from "./about-component1.vue";
export default {
  data() {
      return {
        
      }
    },
    created: function () {
      console.log("created");
    },
    beforeUpdate: function () {
      console.log("beforeUpdate");
    },
    updated: function () {
      console.log("updated");
    },
    mounted: function () {
      console.log("mounted");
      
      // inject page-specific component
      new Vue({
        el: '#about-component1',
        render: h => h(aboutComponent1)
      })
    },
    methods: {
    }
}
</script>