export function getfriendlist() {
    return {
        type: "GET_FRIENDLIST",
        payload: {
            list : ["maulik", "nihal", "kausal" , "bhavin", "paresh"], 
        }
    }
}


export function viewFriends(pos) {

    return {
        type: "TOGGLE_FRIEND_BAR",
        payload: {
            status : pos 
        }
    }
}