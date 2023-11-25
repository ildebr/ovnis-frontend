import { useEffect, useState } from "react";
import { signup } from "../actions/auth";
import axios from "axios";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import Loader from "react-loader-spinner";
import { Redirect } from "react-router-dom";
import { Errormsg} from "../components/common/Error/Errormsg"
const Signup = ({signup, isAuthenticated, loading, error, state}) => {
    
    const [formData, setFormData] = useState({
        email: "",
        user_name: "",
        password: "",
        
    });

    const {email, password, user_name} = formData

    // useEffect(()=>{
    //     console.log(state)
    // }, [state])

    const onChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        signup(user_name, email, password);
    }
        
    if(isAuthenticated) return <Redirect to="/" />;

    // if(accountCreated) return <Redirect to='/login' />;

    if(error && error?.Errormsg == 'Account created') console.log('creada');

    // useEffect(()=>{
    //     if(error && error?.Errormsg == 'Account created'){
    //         console.log('creada')
    //     }
    // }, [state?.error])
    

    return (
        <div>

            {loading ? <Loader /> : <></>}
            {error && <div class='error__message'>{error.msg}</div>}
    <h2 className="center-text">Sign up</h2>

    <Errormsg />

    
    <form class="auth-form" onSubmit={(e) => onSubmit(e)}>

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

        <label for="user_name">
                
            
            <input 
                type="text" 
                name="user_name"
                value={user_name}
                required
                onChange={(e) => onChange(e)} 
                className="username__input"
            />
            <span className="input-placeholder">User</span>
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
        
    <input type="submit" placeholder="registrar" value="Registrar" />
    </form>

    
    </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
    error: state.alert.alert,
    state: state
  }); 

export default connect(mapStateToProps, {signup})(Signup)