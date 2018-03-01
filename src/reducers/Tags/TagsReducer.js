const INITIAL_STATE = {
    tags: []
};




const createTag = (state, action) => {

    let arrayvar = state.tags.slice()
    arrayvar.push(action.value)

    return{...state,
        tags: arrayvar
    }

}


const deleteTag = (state,action) => {

    let arrayvar = state.tags.slice()
    arrayvar.splice(action.index,1)

    return{...state,
        tags: arrayvar
    }




}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'ADD_TAG':
        return createTag(state,action)
    case 'DELETE_TAG':
        return deleteTag(state,action)

    }

    return state

}
