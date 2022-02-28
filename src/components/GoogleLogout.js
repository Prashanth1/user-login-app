import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId = '863094462937-f636s0cu0b0u1n1d8jrvoqiko56jb144.apps.googleusercontent.com'

function Logout(){
    const onSuccess = ()=>{
        alert('Logout made successfully')
    }

    return(
        <div>
            <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess}></GoogleLogout>
        </div>
    )
}
export default Logout