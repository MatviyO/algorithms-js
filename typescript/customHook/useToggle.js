export default useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(toggle) {
        setValue(currentValue =>
            typeof toggle === 'boolean' ? toggle : !currentValue
        )
    }
    return {value, toggleValue}
}
