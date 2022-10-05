<template>
    <div>
        <p>This is results: {{ tenResult }}</p>
    </div>
</template>
<script>

import {mapGetters} from "vuex";

export default {
   computed: {
      ...mapGetters([
         "tenResult",
         "nameResult"
      ]),
   }
}
</script>
