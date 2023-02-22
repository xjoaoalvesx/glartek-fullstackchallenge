<template>
    <div class="intro">Welcome to PTWeather (where real-time information is made available)</div>
</template>

<script>
export default {
    name: 'BaseIntro',
    components: {
    },
    data() {
        return {
        }
    },
    props: {
    },
    mounted() {
    },
    beforeMount() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .intro {
        position: absolute;
        width: 20%;
        line-height: 40px;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        border: 1px solid #171b22;
        background: rgba(0,0,0,.8);
        backdrop-filter: blur(8px);
        border-radius: 20px;
        padding: 20px;
        font-family: system-ui;
        margin: 0px auto;
    }

</style>