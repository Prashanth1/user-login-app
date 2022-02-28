import React from "react";
import {GoogleLogin} from 'react-google-login'

const clientId = "863094462937-f636s0cu0b0u1n1d8jrvoqiko56jb144.apps.googleusercontent.com"

function Login(){
    const onSuccess = (res)=>{
        console.log('[Login Success] currentUser: res.profileObj')
    }
    const onFailure = (res)=>{
        console.log('[Login faild] res:',res)
    }

    return(
        <div>
            <GoogleLogin clientId={clientId} buttonText="Login" onSuccess={onSuccess} onFailure={onFailure} cookesPplicy={'single_host_origin'} style={{marginTop:'100px'}} isSignedIn={true}></GoogleLogin>

        </div>
    )
}

export default Login