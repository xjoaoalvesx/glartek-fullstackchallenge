<template>
    <div class="home">
        <Intro/>
        <WeatherBoard/>
    </div>
</template>

<script>

import WeatherBoard from "../components/WeatherBoard.vue";
import Intro from "../components/Intro.vue";

export default {
    name: 'DefaultHome',
    components: {
        WeatherBoard,
        Intro
    },
    data() {
        return {
            timer: null
        }
    },
    props: {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        height: 100vh;
        margin: 30px auto;
    }

</style>