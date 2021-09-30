import AuthBanner from './authBanner/authBanner'
import React from "react";
import "./auth.css";
import AuthForm from "./authForm/authForm";
import Navbar from '../Navbar/Navbar';

const Auth = () => {


  return (
    <div className="auth">
      <Navbar/>
      <AuthBanner/>
      <AuthForm/>
    </div>
  );
};

export default Auth;
