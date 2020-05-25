import { combineReducers } from 'redux';

const todos = (state = [], action) => {
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
            return state.map(todo =>
            (todo.id === action.id)
                ? {...todo, completed: !todo.completed}
                : todo
            )
        default:
            return state
    }
}

function todosReducer(state = {}, action) {
    return {
        todos: todos(state.todos, action)
    }
}

export default combineReducers({
    todos: todosReducer,
});
