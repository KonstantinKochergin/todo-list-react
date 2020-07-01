export const rootReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo => (
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            ))
        case 'DELETE_COMPLETED':
            let completedIDs = state.map(todo => {
                if (todo.completed) {
                    return todo.id
                }
            })
            return state.filter(todo => !completedIDs.includes(todo.id))
        default:
            return state
    }
}