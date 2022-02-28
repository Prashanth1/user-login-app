import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import Login from './GoogleLogin'
import Logout from "./GoogleLogout";
/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <Navbar bg="primary" variant="dark">
                <a className="navbar-brand m-5" href="/">LOGIN</a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                <Login/>
                <Logout/>
            </Navbar>
            <h5 className="pt-5"><center>Hello!!</center></h5>
            <br />
            <br />
            
            <center>{props.children}</center>
        </>
    );
};