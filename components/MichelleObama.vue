<template>
  <div>
    <button :disabled="$store.state.counter<$store.state.prices.michelleobama" @click="addPerSecond" class="btn button is-primary">Michelle Obama<br>(+100
      Obama per second) <br> COST: {{$store.state.prices.michelleobama}}
    </button>
  </div>
</template>

<script>
    export default {
        props: ['michelleobama'],
        name: "MichelleObama",
        methods: {

            addPerSecond() {
                this.$store.dispatch('incrementPerSecond', 100);
                this.$store.dispatch('increment', -this.$store.state.prices.michelleobama);
                this.$store.dispatch('setPriceValue', 'michelleobama');
            }
        }
    }
</script>

<style scoped>
  button {
    height: 100%;
  }
</style>
