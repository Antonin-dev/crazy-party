import React from 'react';

function Avatar({people, changeStatus}) {
    return (
        <div className="avatar" onClick={() => {
            changeStatus(people.key)
        }}>
            <img className="img-avatar" src={process.env.PUBLIC_URL + `Imgs/${people.slug}.png`} alt=""/>
            <p>{people.name}</p>
        </div>
    );
}

export default Avatar;
