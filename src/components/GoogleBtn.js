import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';



const CLIENT_ID = '863094462937-f636s0cu0b0u1n1d8jrvoqiko56jb144.apps.googleusercontent.com';


class GoogleBtn extends Component {
   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
      console.log(response);
      console.log(window.gapi)
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
      
    }
  }

  logout (response) {
      console.log(window.gapi.auth2.getAuthInstance())
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    console.log('is logout',response)
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }

  render() {
    return (
    <div>
      { this.state.isLogined ?
        <GoogleLogout
          clientId={ CLIENT_ID }
          buttonText='Logout'
          onLogoutSuccess={ this.logout }
          onFailure={ this.handleLogoutFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        >
        </GoogleLogout>: <GoogleLogin
          clientId={ CLIENT_ID }
          buttonText='Login'
          onSuccess={ this.login }
          onFailure={ this.handleLoginFailure }
          cookiePolicy={ 'single_host_origin' }
          responseType='code,token'
        />
      }
      

    </div>
    )
  }
}

export default GoogleBtn;