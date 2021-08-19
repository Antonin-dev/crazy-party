import React, {useContext} from 'react';
import {DisplayContext} from "../Context/Context";
import Avatar from "./Avatar";

function Container() {

    const {peoples, changeStatus} = useContext(DisplayContext);


    const displayPeopleHere = peoples.map((people) => {
        if (people.isHere){
            return (
                <Avatar
                    key={people.key}
                    people={people}
                    changeStatus ={changeStatus}
                />)
        }
        return "";
    })

    return (
        <div className="container">
            <h1>Participants :</h1>
            <div className="avatar-container">
                {displayPeopleHere}
            </div>
        </div>
    );
}

export default Container;
