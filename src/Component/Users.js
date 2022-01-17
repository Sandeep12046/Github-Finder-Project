import React from "react";
import { useState } from "react/cjs/react.development";
import UserItem from './UserItem';
const Users=(props)=>{
    console.log(props.users);
    return(
        <div style={userStyle}>
        {props.users.map((user)=>(
         <UserItem user={user}/>
        ))}
</div>
);
}
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem'
}
export default Users;