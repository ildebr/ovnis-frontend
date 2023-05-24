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
    

    return (
        <div>

            {loading ? <Loader /> : "no"}
            {error && <div class='error__message'>{error.msg}</div>}
    <h2>Alo perra</h2>

    <Errormsg />

    
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
    error: state.alert.alert,
    state: state
  }); 

export default connect(mapStateToProps, {signup})(Signup)