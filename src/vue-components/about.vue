<template>
<div id="about" class="vc-about">
  <p>vc-about</p>
  <!-- page-specific component -->
  <p id="about-component1"></p>
</div>
</template>
<script>
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
      // this.refreshState();
    },
    methods: {
    }
}
</script>