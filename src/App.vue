<script setup lang="ts">
import { onMounted } from 'vue'
import { config } from './config'
import { store } from './components/state';
import type { Log } from './components/state';
import LogBar from './components/LogBar.vue';

onMounted(() => {
    // get json data from api an safe in in the store
    fetch("http://" + config.DOMAIN + "/api/data").then((data) => {
        if (data.ok) {
            data.json().then(json => {
                store.value.logs = (json as Log[]);
            })
        } else {
            // TODO
            console.log(data.statusText)
            console.log(data.status)
        }
    });
})
</script>

<template>
    <header>
        ELA
    </header>

    <hr>

    <div id="container">
        <LogBar v-for="log in store.logs" :log="log"></LogBar>
    </div>
</template>

<style scoped lang="scss">
header {
    font-family: 'Bebas Neue', cursive;
    font-size: 8em;
    width: 100%;
    text-align: center;
}

#container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
}
</style>
  