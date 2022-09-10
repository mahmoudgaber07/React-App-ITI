export const addTodoAction = (payload) => {
    return (
        {
            type: "ADD_TODO" ,
            payload
        }
    )
}

export const delTodoAction = (payload) => {
    return (
        {
            type: "DEL_TODO" ,
            payload
        }
    )
}

