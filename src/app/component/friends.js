import React from "react";

export class Friends extends React.Component {
    render(){
        return (
            <div> friend list 
               <ul>
                <li> <a href="#" >mno</a> </li>
                <li> <a href="#" >xyz</a> </li>
                <li> <a href="#" >pqr</a> </li>
                {/*populate from state */}
                </ul>
            </div>
        )};
}