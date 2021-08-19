import {createContext, useState} from "react";

export const DisplayContext = createContext();

const DisplayContextProvider = (props) => {

    const [peoples, setPeoples] = useState([
        {
            key:0,
            name: "Antonin",
            slug: "antonin",
            isHere: false
        },
        {
            key:1,
            name: "Mathilde",
            slug: "mathilde",
            isHere: true
        },
        {
            key:2,
            name: "Florian",
            slug: "florian",
            isHere: false
        },
        {
            key:3,
            name: "Virginie",
            slug: "virginie",
            isHere: true
        },
        {
            key:4,
            name: "Julien",
            slug: "julien",
            isHere: false
        },
        {
            key:5,
            name: "Lucas",
            slug: "lucas",
            isHere: false
        }
    ])

    const changeStatus = (key) => {
        let peopleBis = peoples.slice()
        peopleBis[key].isHere = !peopleBis[key].isHere;
        setPeoples(peopleBis);

    }

    return (
        <DisplayContext.Provider value={{peoples, changeStatus}}>
            {props.children}
        </DisplayContext.Provider>
    )
}

export default DisplayContextProvider;




