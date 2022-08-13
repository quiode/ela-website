import { ref } from 'vue';

export interface Online_History {
    start: number,
    end: number,
    duration: {
        secs: number,
        nanos: number
    }
}

export interface Log {
    user: string,
    online_history: Online_History[]
}

export const store = ref({
    logs: [] as Log[]
})
