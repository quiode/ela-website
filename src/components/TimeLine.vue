<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import type { Online_History } from './state';

const props = defineProps<{
    history?: Online_History
}>()

let length: Ref<"short" | "medium" | "long"> = ref("medium")

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

const sec = computed(() => {
    if (props.history?.duration) {
        const duration = props.history.duration.secs

        const text = secsToString(duration);

        if (text.length < 12) {
            length.value = "short";
        } else if (text.length < 25) {
            length.value = "medium";
        } else {
            length.value = "long";
        }

        return text;
    } else {
        return 'Error'
    }
})

function addS(number: number, string: string): string {
    if (number > 1) {
        return string + 's'
    } else return string
}

function secsToString(secs: number): string {
    const years = Math.floor(secs / 31536000);
    secs -= years * 31536000;
    const days = Math.floor(secs / 86400);
    secs -= days * 86400;
    const hours = Math.floor(secs / 3600);
    secs -= hours * 3600;
    const minutes = Math.floor(secs / 60);
    secs -= minutes * 60;
    const seconds = secs;

    let string = '';
    if (years) {
        string += years + " " + addS(years, "year") + " ";
    }

    if (days) {
        string += days + " " + addS(days, "day") + " ";
    }

    if (hours) {
        string += hours + " " + addS(hours, "hour") + " ";
    }

    if (minutes) {
        string += minutes + " " + addS(minutes, "minute") + " ";
    }

    if (seconds) {
        string += seconds + " " + addS(seconds, "second") + " ";
    }

    return string
}
</script>

<template>
    <div class="outerContainer">
        <div class="dateContainer">
            <div class="circle"></div>
            <div class="date">
                {{ startDate }}
            </div>
        </div>

        <div class="durationContainer">
            <div class="duration">
                {{ sec }}
            </div>
            <div class="line" :class="length"></div>
        </div>

        <div class="dateContainer">
            <div class="circle" style="background-color: #E76F51;"></div>
            <div class="date">
                {{ endDate }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$circleSize: 2vw;
$lineWidth: 0.2vw;

$circleSizeMobile: 2vh;
$lineWidthMobile: 0.2vh;

@media screen and (max-width: 640px) {
    .circle {
        width: $circleSizeMobile  !important;
        height: $circleSizeMobile  !important;
    }

    .durationContainer {
        left: calc(calc($circleSizeMobile / 2) - calc($lineWidthMobile / 2)) !important;
    }

    .line {
        width: $lineWidthMobile  !important;
    }
}

.circle {
    background-color: #E9C46A;
    width: $circleSize;
    height: $circleSize;
    border-radius: 50%;
}

.dateContainer {
    display: flex;
    align-items: center;
    margin: -1% 0;
    z-index: 2;
    position: relative;
}

.date {
    color: #E9C46A;
    padding-left: 1vw;
}

.line {
    width: $lineWidth;
    min-height: 130px;
    background-color: green;
}

.long {
    height: 300px;
}

.medium {
    height: 200px;
}

.short {
    height: 130px;
}

.duration {
    transform-origin: bottom left;
    transform: rotate(90deg);
    position: absolute;
    padding-bottom: 0.3vw;
}

.durationContainer {
    color: green;
    position: relative;
    left: calc(calc($circleSize / 2) - calc($lineWidth / 2))
}
</style>