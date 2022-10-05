<template>
   <div>
      <button class="btn btn-success" @click="increment">Increment</button>&ensp;
      <button class="btn btn-success" @click="asyncDecrement">Decrement</button>
      <hr/>
      <br/>
      <input type="text" v-model="value">
      <p>Text test: {{ value }}</p>
   </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
   data() {
      return {};
   },
   computed: {
      value: {
         get() {
            return this.$store.getters.value;
         },
         set( value ) {
            this.$store.dispatch('updateValue', value)
         }
      }
   },
   methods: {
      ...mapActions([
         "increment",
         "asyncDecrement"
      ]),
      // updateValue(event) {
      //    this.$index.dispatch('updateValue', event.target.value)
      // }
   },

}
</script>
