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
  mounted() {
    this.$store.dispatch("cheackLocations");
  }
}
</script>

<style>
  html,
  body {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    --background-color-primary: #010409;
    --background-color-secondary: #0d1117;
    --background-color-blurred: rgba(0, 0, 0, 0.8);
    --accent-color: #171b22;
    --text-color: #ffffff;
    --text-color-hover: #9a9a9a;
    font-family: "Montserrat", sans-serif;
    line-height: 1.4;
  }
</style>
