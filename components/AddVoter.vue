<template>
  <div>
    <button :disabled="$store.state.counter<$store.state.prices.addvoters" @click="addPerSecond" class="btn button is-primary">Add Voters <br> (+1
      voter per second) <br> COST: {{$store.state.prices.addvoters}}
    </button>
  </div>
</template>

<script>
    export default {
        props: ['addvoter'],
        name: "AddVoter",
        methods: {
            addPerSecond() {
                this.$store.dispatch('incrementPerSecond', 1);
                this.$store.dispatch('increment', -this.$store.state.prices.addvoters);
                this.$store.dispatch('setPriceValue', 'addvoters');
            },
        }
    }
</script>

<style scoped>
  button {
    height: 100%;
  }
</style>
