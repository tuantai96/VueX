<template>
    <div>
        <p>This is results: {{ result }}</p>
    </div>
</template>
<script>

export default {
    computed: {
        result() {
            return this.$store.getters.result;
        }
    }
}
</script>
