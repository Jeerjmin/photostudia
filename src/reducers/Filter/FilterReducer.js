const INITIAL_STATE = {
    value: []
};




const changeValue = (state, action) => {
    return{...state,
        value: action.value
    }

}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'CHANGE_VALUE':
        return changeValue(state,action)


    }

    return state

}
