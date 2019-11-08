<template>
  <div>
    <button :disabled="$store.state.counter<$store.state.prices.ps4" @click="double" class="btn button is-danger">Buy PS4 to White House<br>(2x
      Obama per click) <br> COST: {{$store.state.prices.ps4}}
    </button>
  </div>
</template>

<script>
    export default {
        name: "doubleonclick",
        props: "doubleonclick",
        methods: {
            double() {
                this.$store.dispatch('incrementPerClick');
                this.$store.dispatch('increment', -this.$store.state.prices.ps4);
                this.$store.dispatch('setPriceValue', 'ps4');
            }
        }
    }
</script>

<style scoped>
  button {
    height: 100%;
  }
</style>
