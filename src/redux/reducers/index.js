import {ADD_TODO, GET_TODOS_FROM_STORAGE, TOGGLE_TODO, DELETE_COMPLETED} from '../actions/index'
import {TODOS_KEY, NEXT_TODO_ID_KEY} from '../../localStorage'

let nextTodoId = 0

export const rootReducer = (state = [], action) => {
    switch (action.type) {
        case GET_TODOS_FROM_STORAGE:
            let todos = JSON.parse(localStorage.getItem(TODOS_KEY))
            nextTodoId = +localStorage.getItem(NEXT_TODO_ID_KEY)
            return todos
        case ADD_TODO:
            let todos1
            if (!state) {
                todos1 = [
                    {
                        id: nextTodoId++,
                        text: action.text,
                        completed: false
                    }   
                ]
            }
            else {
                todos1 = [
                    ...state,
                    {
                        id: nextTodoId++,
                        text: action.text,
                        completed: false
                    }
                ]
            }
            localStorage.setItem(TODOS_KEY, JSON.stringify(todos1))
            localStorage.setItem(NEXT_TODO_ID_KEY, nextTodoId)
            return todos1
        case TOGGLE_TODO:
            let todos2 = state.map(todo => (
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            )) 
            localStorage.setItem(TODOS_KEY, JSON.stringify(todos2))
            return todos2
        case DELETE_COMPLETED:
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