import React from 'react'
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function Greeting(props) {

    const isLoggedIn=props.isLoggedIn;
    console.log("Is  Logged In" +isLoggedIn );

    if(isLoggedIn)
    return <div>  <UserGreeting/>    <button class="btn btn-info">{isLoggedIn?'LOGOUT':'LOGIN'}</button>          </div>;
    else
    return <div>  <GuestGreeting/>   <button class="btn btn-primary">{isLoggedIn?'LOGOUT':'LOGIN'}</button> </div>;

    
}

export default Greeting
