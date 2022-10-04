<template>
   <div>
      <button class="btn btn-success" @click="increment">Increment</button>&ensp;
      <button class="btn btn-success" @click="decrement">Decrement</button>
   </div>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
   data() {
      return {};
   },
   methods: {
      increment() {
         this.$store.commit("incrementOp", 30);
      },
      ...mapMutations([
         "decrement"
      ])
   },

}
</script>
