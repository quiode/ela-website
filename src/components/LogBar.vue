<script setup lang="ts">
import type { Log } from './state'

defineProps<{
    log?: Log
}>()
</script>

<template>
    <h1>
        {{ log?.user }}
    </h1>
</template>