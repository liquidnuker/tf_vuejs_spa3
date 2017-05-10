<template>
<div>
  <p>vc-about-component1</p>
  <p>{{ msg }}</p>
</div>
</template>
<script>
import {store} from "../js/store.js";
export default {
  data() {
      return {
        msg: store.currentItem  
      }
    }
    
}
</script>