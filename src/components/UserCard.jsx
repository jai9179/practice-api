import React from "react";

const UserCard = (props) => {
    return (
        <div className="usercard">
         <img src={props.data.picture.large} alt="User" />
        <h3>{props.data.name.first}</h3>
        <p>{props.data.phone}</p>
        <p>{props.data.location.city} , {props.data.location.state}</p>
    </div>
    );
    
};
export default UserCard;