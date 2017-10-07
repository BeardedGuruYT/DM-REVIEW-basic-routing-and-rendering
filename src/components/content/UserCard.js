import React from 'react';


export default function UserCard(props) {
    return (
        <article className="card-wrap">
            <div className="user-pic">
                <img src={props.pic} className="user-img" alt="user"/>
            </div>
            <div className="user-info">
                <p>{props.name}</p>
                <h5>{props.email}</h5>
            </div>
        </article>
    )
}