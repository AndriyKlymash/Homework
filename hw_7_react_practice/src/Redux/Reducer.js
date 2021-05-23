import {createStore} from "redux";


function reducer(state=[],action) {
    switch (action.type) {
        case 'ADD':
            return [...state, {todoItem: action.payload, id: action.id}]
        case 'DELETE':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;
