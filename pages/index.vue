<template>
  <div class="container section">
    <div class="columns">
      <div class='column is-one-quarter is-3'>
        <div class='card equal-height'>
          <h3 class="title is-3 has-text-centered">Obama count: {{$store.state.counter}}</h3>
          <div class='card-content is-flex is-horizontal-center'>
            <figure class='image'><img @click="addObama"
                                       src="http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be4e.png">
            </figure>
          </div>
        </div>
      </div>
      <div class="column is-center is-3">
        <h1 class="title is-1">STORE</h1>
        <add-voter></add-voter>
        <br>
        <osama></osama>
        <br>
        <michelle-obama></michelle-obama>
      </div>
      <div class="column is-center is-3">
        <h1 class="title is-1">UPGRADES</h1>
        <doubleonclick></doubleonclick>
      </div>
      <div class="column is-center is-3">
        <h1 class="title is-1">ACHIEVEMENTS</h1>
        <div class="modal" :class="{'is-active': modal}">
          <div class="modal-background"></div>
          <div class="modal-content">
            MIDAGI
          </div>
          <button @click="close" class="modal-close is-large" aria-label="close"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import AddVoter from "../components/AddVoter";
    import MichelleObama from "../components/MichelleObama";
    import Osama from "../components/Osama";
    import Doubleonclick from "../components/doubleonclick";

    export default {
        components: {Doubleonclick, Osama, MichelleObama, AddVoter},
        mounted() {
            setInterval(() => {
                this.$store.dispatch('increment', this.$store.state.perSecond);
            }, 1000);
        },
        methods: {
            addObama() {
                this.$store.dispatch('increment', this.$store.state.perClick);
            },
            close(){
                this.modal = false
            }
        },
        data() {
            return {
                modal: true
            }
        }
    }
</script>

<style>
  img{
    margin-left:10%;
  }
</style>
