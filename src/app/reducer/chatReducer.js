const chat = (state = {
    chat : [
        {
            friend: "maulik", 
            chatHistory: [ "hi" , "hello"]
        },
        {
            friend: "nihal", 
            chatHistory: [ "bye" ]
        },
    ] ,

    totalChat : 2

}, action) => {
    switch (action.type) {
        case "ADD_CHAT":
            //check if chat exist
            state = {
                ...state,
                chat: action.payload.chat
            }
            break;

    }
    return state;
};

export default loginReducer;