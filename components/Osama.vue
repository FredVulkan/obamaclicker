<template>
  <div>
    <button :disabled="$store.state.counter<$store.state.prices.osama" @click="addPerSecond" class="btn button is-primary">Order killing of Osama <br> (+100
      Obamas per second) <br> COST: {{$store.state.prices.osama}}
    </button>
  </div>
</template>

<script>
    export default {
        props: ['osama'],
        name: "Osama",
        methods: {

            addPerSecond() {
                this.$store.dispatch('incrementPerSecond', 10);
                this.$store.dispatch('increment', -this.$store.state.prices.osama);
                this.$store.dispatch('setPriceValue', 'osama');
            }
        }
    }
</script>

<style scoped>
  button {
    height: 100%;
  }
</style>
