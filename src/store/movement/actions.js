const ADD_MOVEMENT = "ADD_MOVEMENT";
 

const defaultState = [
    {
        id: 1,
        name: "",
        values: []
    },
    {
        id: 2,
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
    switch(action.type){
        case ADD_MOVEMENT:
            return 
        case ADD_NAME:
        case RESET:
        case DEFAULT:
            return defaultState
    }
}