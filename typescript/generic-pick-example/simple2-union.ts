interface JetEngine {
    model: {
        name: string
        serialNumber: number
        type: 'turbo'  | 'ramjet' | 'turbofan'
    },
    state: 'disabled' | 'power-up' | 'ready'
}

const checkStateReadiness= (value: JetEngine['state']): boolean => value === 'ready';

console.log(checkStateReadiness('ready'))
