<template>
  <WeatherBoard/>
</template>

<script>

import WeatherBoard from "./components/WeatherBoard.vue";

export default {
  name: 'App',
  components: {
    WeatherBoard
  },
  data() {
    return {
      timer: null
    }
  },
  mounted() {
    this.$store.dispatch("cheackLocations")
    this.timer = setInterval(() => {
      this.$store.dispatch("cheackLocations")
    }, 1800 * 1000)
    
  },
  beforeMount() {
    clearInterval(this.timer)
  }
}
</script>

<style>
  html,
  body {
    height: 100%;
    width: 100%;
    /* scroll-behavior: smooth;
    background-color-primary: #010409;
    --background-color-secondary: #0d1117;
    --background-color-blurred: rgba(0, 0, 0, 0.8);
    --accent-color: #171b22;
    --text-color: #ffffff;
    --text-color-hover: #9a9a9a; */
    font-family: "Montserrat", sans-serif;
    line-height: 1.4;
  }
  body {
    background-color: #010409;
    color: #ffffff;
  }
</style>
