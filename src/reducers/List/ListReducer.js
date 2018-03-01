import studio from '../../assets/studio.js';


const INITIAL_STATE = {
    list: studio
};



const initialData = (state) => {

    let arrayvar = state.list.slice()


    return{...state,
        list: arrayvar.sort((a,b) => a.price - b.price )
    }
}


const changeValue = (state, action) => {

    let arrayvar = studio.sort((a,b) => a.price - b.price)

    let [min, max] = [ action.value[0], action.value[1] ]

    return{...state,
        list: arrayvar.filter(item => (item.price >= Number(min) && item.price <= Number(max)))
    }
}


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'CHANGE_VALUE':
        return changeValue(state,action)
    }

    return initialData(state,action)

}
