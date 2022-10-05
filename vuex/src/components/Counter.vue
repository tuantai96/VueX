<template>
    <div>
        <button class="btn btn-success" @click="increment">Increment</button>&ensp;
        <button class="btn btn-success" @click="asyncDecrement">Decrement</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex'

export default {
    data() {
        return {};
    },
    methods: {
        ...mapActions([
            "increment",
            "asyncDecrement"
        ])
    },
    
}
</script>
