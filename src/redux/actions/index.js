export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_COMPLETED = 'DELETE_COMPLETED'
export const GET_TODOS_FROM_STORAGE = 'GET_TODOS_FROM_STORAGE'

export const addTodo = text => ({
    type: 'ADD_TODO',
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const deleteCompletedTodos = () => ({
    type: 'DELETE_COMPLETED',
})

export const getTodosFromStorage = () => ({
    type: 'GET_TODOS_FROM_STORAGE'
})