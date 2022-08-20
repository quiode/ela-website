<script setup lang="ts">
import type { Log } from './state'
import TimeLine from './TimeLine.vue'

defineProps<{
    log?: Log
}>()
</script>

<template>
    <div id="wrapper">
        <h1>
            {{ log?.user }}
        </h1>

        <TimeLine class="timeline" v-for="history in log?.online_history" :history="history"></TimeLine>
    </div>

</template>

<style scoped lang="scss">
@media screen and (max-width: 640px) {
    #wrapper {
        width: 89vw !important;
        flex-shrink: 0 !important;
    }
}

#wrapper {
    padding: 3%;
    margin: 1vw;
    border-radius: 30px;
    background-color: #2a9d8f;
    min-height: 20vh;
    box-shadow: #2a9d8f4f 0px 7px 29px 0px;
    transition: box-shadow ease 0.2s;

    &:hover {
        box-shadow: #2A9D90B4 0px 7px 29px 0px;
    }
}

.timeline {
    margin: 5vh 0;
}
</style>