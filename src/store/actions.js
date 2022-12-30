const ADD_MOVEMENT = "ADD_MOVEMENT";
const ADD_NAME = "ADD_NAME";

const movementAction = (name, value) => {
    return {
        type: ADD_MOVEMENT,
        data: {
            name,
            value
        }
    }
}

const nameAction = (name) => {
    return {
        type: ADD_NAME,
        data: {
            name
        }
    }
}

export {ADD_MOVEMENT, ADD_NAME, movementAction, nameAction};