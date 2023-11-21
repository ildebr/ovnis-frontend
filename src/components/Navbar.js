import { Link, NavLink } from 'react-router-dom';
import { logout } from '../actions/auth';
import Alert from '../reducers/alert';
import { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import './Navbar.scss'
const Navbar = ({
    isAuthenticated,
}) => {
    const [redirect, setRedirect] = useState(false);
    const logoutHandler = () => {
        logout()
        setRedirect(true)
    }
    const authLinks = (
        <li>
            <a onClick={logoutHandler}
            href='#!'>
                Logout
            </a>
            <Link to=''>My sightings</Link>
        </li>
    )

    const getNavbar = ( ) => (
        <nav className='site-nav'>
        <NavLink className='logo-nav' to="/">UFOW</NavLink>
        
        

        {isAuthenticated ? authLinks : <> <div className='auth-links'> <NavLink className='auth-link' to="/login">Login</NavLink>  <NavLink className='auth-link' to="/signup">Sign up</NavLink> </div></>}
        </nav>
    )

    const renderNavbar = () => {
        return (<Fragment>
            {getNavbar()}
            <Alert />
        </Fragment>)
    }
    

    return (

        <Fragment>
            {getNavbar()}
        </Fragment>
    
)
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
    logout
})(Navbar);
