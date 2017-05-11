<template>
  <div id="vc-page-err404" class="vc-page-err404">
    <p>vc-page-globalerr404</p>
    <p>path: {{$route.path}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  mounted: function () {
    console.log("mounted");
  }
}
</script>