import { createStore } from "redux";

const ADD_MOVEMENT = "ADD_MOVEMENT";
const ADD_NAME = "ADD_NAME";
const RESET = "RESET";

const defaultState = [
    {
        id: 0,
        name: "",
        values: []
    },
    {
        id: 1,
        name: "",
        values: []
    }
];

const movementAction = (id, value) => {
    return {
        type: ADD_MOVEMENT,
        data: {
            id,
            value
        }
    }
}

const nameAction = (id, name) => {
    return {
        type: ADD_NAME,
        data: {
            id,
            name
        }
    }
}

const resetAction = () => {
    return {
        type: RESET
    }
}

const playerReducer = (state = defaultState, action) => {
    const newState = Object.assign({}, state);
    switch(action.type){
        case ADD_MOVEMENT:
            {
                const {id, value} = action.data;
                newState[id].values = [...newState[id].values, value];
                return newState;
            }
        case ADD_NAME:
            {
                const {id, name} = action.data;
                newState[id].name = name;
                return newState;
            }
        case RESET:
        default:
            return defaultState;
    }
}

const store = createStore(playerReducer);

export default store;