import { ref } from 'vue';

export interface Log {
    user: string,
    online_history: {
        start: number,
        end: number,
        duration: {
            secs: number,
            nanos: number
        }
    }[]
}

export const store = ref({
    logs: [] as Log[]
})
