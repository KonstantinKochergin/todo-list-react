import {TODOS_KEY} from '../../localStorage'

export const rootReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_TODOS_FROM_STORAGE':
            let todos = JSON.parse(localStorage.getItem(TODOS_KEY))
            return todos
        case 'ADD_TODO':
            let todos1 = [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
            localStorage.setItem(TODOS_KEY, JSON.stringify(todos1))
            return todos1
        case 'TOGGLE_TODO':
            let todos2 = state.map(todo => (
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            )) 
            localStorage.setItem(TODOS_KEY, JSON.stringify(todos2))
            return todos2
        case 'DELETE_COMPLETED':
            let completedIDs = state.map(todo => {
                if (todo.completed) {
                    return todo.id
                }
                return null
            })
            let todos3 = state.filter(todo => !completedIDs.includes(todo.id)) 
            localStorage.setItem(TODOS_KEY, JSON.stringify(todos3))
            return todos3
        default:
            return state
    }
}