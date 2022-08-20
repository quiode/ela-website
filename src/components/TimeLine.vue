<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Online_History } from './state';

const props = defineProps<{
    history?: Online_History
}>()

const startDate = computed(() => {
    if (props.history?.start) {

        return (new Date(props.history?.start * 1000)).toLocaleString()
    } else {
        return 'Error'
    }
})

const endDate = computed(() => {
    if (props.history?.end) {

        return (new Date(props.history?.end * 1000)).toLocaleString()
    } else {
        return 'Error'
    }
})
</script>

<template>
    <div class="container">
        <div class="circle" style="background-color: #F4A261;"></div>
        <div id="startDate" class="date">{{ startDate }}</div>
    </div>
    <div class="line"></div>
    <div class="circle"></div>
    <div id="endDate" class="date">{{ endDate }}</div>
</template>

<style lang="scss" scoped>
.circle {
    $size: 2vw;
    background-color: #E76F51;
    width: $size;
    height: $size;
    border-radius: 50%;
}

.container {
    white-space: nowrap;

    * {
        display: inline-block;
    }
}

.date {
    margin-left: 1vw;
}

.line {
    background-color: green;
    width: 2px;
    height: 100px;
    left: 0.5vw;
    position: relative;
}
</style>