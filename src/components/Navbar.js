import { Link, NavLink } from 'react-router-dom';
import { logout } from '../actions/auth';
import Alert from '../reducers/alert';
import { useState, Fragment } from 'react';
import { connect } from 'react-redux';

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
        </li>
    )

    const getNavbar = ( ) => (
        <div>
        <NavLink to="/">Home </NavLink>
        
        

        {isAuthenticated ? authLinks : <p>No autenticado</p>}
        </div>
    )

    const renderNavbar = () => {
        return (<Fragment>
            <p>Barra</p>
            {getNavbar()}
            <Alert />
        </Fragment>)
    }
    

    return (

        <Fragment>
            <p>Barra</p>
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
