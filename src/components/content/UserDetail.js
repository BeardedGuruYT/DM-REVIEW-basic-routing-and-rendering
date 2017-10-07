import React from 'react';


export default function UserDetail(props) {
    return (
        <main className="user-detail-wrap">
            <div className="back-button"
                 onClick={props.clearUser}>X</div>
            <div className="detail-pic-wrap">
                <img src={props.pic} className="detail-pic" alt="profile" />
            </div>
            <h2>{props.name}</h2>
            <h3>{props.email}</h3>
            <h3>{props.cell}</h3><br />
            <h4>{props.location.street}<br />
                {props.location.city}, {props.location.state} {props.location.postcode}</h4>
        </main>
    )
}