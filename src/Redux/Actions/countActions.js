export const incrementCount = (payload) => {
    return (
        {
            type: "INCREMENT_COUNT",
            payload
        }
    )
}
export const decrementCount = (payload) => {
    return (
        {
            type: "DECREMENT_COUNT",
            payload
        }
    )
}

