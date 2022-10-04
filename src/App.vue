<template>
   <div id="app" class="container mt-5">
      <h1>
         VueX section
      </h1>
      <app-result/>
      <hr>
      <app-other/>
      <br>
      <app-counter/>
   </div>
</template>
<script>
import AppCounter from "@/components/Counter.vue";
import AppResult from "@/components/Result.vue";
import AppOther from "@/components/Other.vue";

export default {
   components: {
      AppCounter,
      AppResult,
      AppOther
   },

}
</script>
<style>

</style>
