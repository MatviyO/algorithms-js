const useRandomJoke = (firstName, lastName) => {
    const [joke, setJoke] = useState(null)

    useEffect(() => {
        const fetchJoke = async () => {
            await fetch(`http://api.icndb.com/joke/random?firstname=${firstName},lastName=${lastName}`)
                .then(res => res.json())
                .then(data => {
                    if (data) setJoke(data.value.joke)
                })
        }
        fetchJoke()

    }, [firstName, lastName])

    return {joke}
}

export default useRandomJoke;
