import React from 'react';


//IMPORTING REACT ROUTER DEPENDENCY
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt} from 'react-router-dom' ;
import Route from 'react-router-dom/Route';

import {ChatBox} from '../component/chatbox.js';
import {Friends} from '../component/friends.js';


export default class App extends React.Component {

    constructor(){
        super();
        this.state={
            f_flg: 0
        }
    }
   

    render() {
        return (
            <div>
                 main
                <Friends/> 

                <ChatBox/>

            </div>
        );
    }
}

// //GETS STATES PASSED FROM PROVIDER
// //STATE PASSED FROM REDUX AS WE WRAP THIS COMP AROUNF PROVIDER
// const mapStateToProps = (state) => {
//     return {
//         user: state.user,
//         login: state.login
//     }
// }
// //THIS POPULATED IN THE COMPONENTS PROPS

// //DISPATCH ACTION
// const mapDispatchToProps = (dispatch) => {
//     return {
//         login_check: (username, password) => {
//             dispatch(checkLogin(username, password));
//         },
//         logout: () => {
//             dispatch(logout());
//         },
//         Profile_update: (payload_detail) => {
//             dispatch(updateProfile(payload_detail));
//         }
//     };
// };


// export default connect(mapStateToProps, mapDispatchToProps)(App);
 //  export default App;
//CONNECT BOTH PROPS AND DISPATCH ACTION
