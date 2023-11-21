import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from "../actions/auth";
import Loader from "react-loader-spinner";


const Login = ({ login, isAuthenticated, loading }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
      
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { email, password } = formData;


    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        login(email, password);
    };

    if (isAuthenticated) return <Redirect to="/dashboard" />;

    return (
        <div class="container">
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                name="description"
                content="UFO sighting website"
                />
                <title>UFOW | Login</title>
            </Helmet>

            <h2 className="center-text">LOGIN </h2>

            <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
            <label for="email">
                
            
                <input 
                    type="email" 
                    name="email"
                    value={email}
                    required
                    onChange={(e) => onChange(e)} 
                    className="username__input"
                />
                <span className="input-placeholder">Email</span>
            </label>
            <label for="password">
                
            
                <input 
                    type="password" 
                    name="password"
                    value={password}
                    required
                    onChange={(e) => onChange(e)} 
                    className="username__input"
                />
                <span className="input-placeholder">Password</span>
            </label>
                
                {loading ? (
                <div className="mt-3 d-flex justify-content-center align-items-center">
                    <Loader type="Oval" color="#424242" height={50} width={50} />
                </div>
                ) : (
                    <input type="submit" placeholder="Login" value="Login" />
                )}
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
  });
  
  export default connect(mapStateToProps, { login })(Login);
  