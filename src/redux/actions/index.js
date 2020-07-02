let nextTodoID = 0

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoID++,
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