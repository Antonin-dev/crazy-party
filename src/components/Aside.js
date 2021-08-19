import React, {useContext}  from 'react';
import Avatar from "./Avatar";
import {DisplayContext} from "../Context/Context";


function Aside() {

    const {peoples, changeStatus} = useContext(DisplayContext);

    const displayPeopleIsNotHere = peoples.map((people) => {
        if (!people.isHere){
            return (
                <Avatar
                    key={people.key}
                    people={people}
                    changeStatus={changeStatus}
                />);
        }
        return "";
    })


    return (
        <div className="aside">
            <h1>Non dispo</h1>
            {displayPeopleIsNotHere}
        </div>
    );
}

export default Aside;
