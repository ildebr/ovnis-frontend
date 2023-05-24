import { useState } from "react";
import { signup } from "../actions/auth";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Loader from "react-loader-spinner";
import { Redirect } from "react-router-dom";
const Signup = ({signup, isAuthenticated, loading}) => {
    
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        user_name: "",
    });

    const {email, password, user_name} = formData


    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('subir')
        signup(user_name, email, password);
    }
        
    if(isAuthenticated) return <Redirect to="/" />;
    

    return (
        <div>

            {loading ? 'CARGANDOO' : "no"}
    <h2>Alo perra</h2>

    
    <form onSubmit={(e) => onSubmit(e)}>
        <input 
        type="email" 
        name="email"
        value={email}
        required
        onChange={(e) => onChange(e)} 
        placeholder="Email"
        />

    <input 
        type="text" 
        name="user_name"
        value={user_name}
        required
        onChange={(e) => onChange(e)} 
        placeholder="Username"
        />
    <input
        className="form-control"
        type="password"
        placeholder="Password*"
        name="password"
        value={password}
        onChange={(e) => onChange(e)}
        minLength="6"
        required
        />

    <button type="submit">
        Signup
    </button>
    <input type="submit" placeholder="registrar" value="Registrar" />
    </form>

    
    <input type="submit" placeholder="registrar" />
    </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
  }); 

export default connect(mapStateToProps, {signup})(Signup)