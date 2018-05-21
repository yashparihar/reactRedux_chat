const friends = (state = {
    list: [],
    list_visible: false
}, action) => {
    switch (action.type) {
        case "GET_FRIENDLIST":
            state = {
                ...state,
                list: action.payload.list
            }
            break;

        case "TOGGLE_FRIEND_BAR":
            state = {
                ...state,
                list_visible: action.payload.status
            }
            break;

    }
    return state;
};

export default loginReducer;