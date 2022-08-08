<script setup lang="ts">
import type { Log } from './state'

defineProps<{
    log?: Log
}>()
</script>

<template>
    <div id="wrapper">
        <h1>
            {{ log?.user }}
        </h1>
    </div>
</template>

<style scoped>
#wrapper {
    padding: 1%;
    border-radius: 30px;
    background-color: #2a9d8f;
    min-height: 20vh;
}
</style>