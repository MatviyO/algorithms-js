const getLogger = (type) => {
    switch (type) {
        case 'error':
            return console.error

        case 'warning':
            return console.warn
        case 'info':
        default:
            return console.log
    }
}

const log = getLogger('warn')
log('hello')