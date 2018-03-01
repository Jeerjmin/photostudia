export const createList = () => ({
    type: "CREATE_LIST"
});


export const addTag = (value) => ({
    type: "ADD_TAG",
    value: value
});



export const deleteTag = (index) => ({
    type: "DELETE_TAG",
    index: index
});

export const filterValues = (value) => ({
    type: "CHANGE_VALUE",
    value: value,

})
