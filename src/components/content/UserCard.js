import React from 'react';
import {Link} from 'react-router-dom';


export default function UserCard(props) {
    return (
        <Link to={`/user/${props.id}`}>
            <article className="card-wrap"
                    onClick={() => props.makeActive(props.id)}>
                <div className="user-pic">
                    <img src={props.pic} className="user-img" alt="user"/>
                </div>
                <div className="user-info">
                    <p>{props.name}</p>
                    <h5>{props.cell}</h5>
                </div>
            </article>
        </Link>
    )
}