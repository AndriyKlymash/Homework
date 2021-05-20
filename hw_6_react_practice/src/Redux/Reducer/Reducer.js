import {createStore} from "redux";

const initialState = {
    counter: 0
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "INC": {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case "DEC": {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case "RES": {
            return {
                ...state,
                counter: 0
            }
        }
        case "INC_CUSTOM":{
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }

        case "INC_100":{
            return {
                ...state,
                counter: state.counter + 100
            }
        }

        case "DEC_100":{
            return {
                ...state,
                counter: state.counter - 100
            }
        }

        default: {
            return state
        }

    }
}

const store = createStore(reducer);
export default store;


// store.subscribe(() => {
//     console.log('counter', store.getState())
// });

// store.dispatch({type: "INC"})
// store.dispatch({type: "INC"})
// store.dispatch({type: "INC"})

