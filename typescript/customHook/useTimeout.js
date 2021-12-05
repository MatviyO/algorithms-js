export default function useTimeout(callback, delay) {
    const callbackRef = useRef(callback)
    const timeouRef = useRef()



    useEffect(() => {
        callbackRef.current = callback
    }, [callback])
}
