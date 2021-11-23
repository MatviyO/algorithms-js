const useFIlterApartments = () => {
    const [apartments, setApartments] = useState([])

    const loadApartments = useMemo(() => {
        let prevFilers;
        return async (filters) => {
            if (shallowEqual(filters, prevFilers)) {
                return;
            }
            prevFilers = filters;
            const data = await api.loadApartments(filters)
            setApartments(data)
        }

    }, [])
    return {
        apartments, loadApartments
    }
}
