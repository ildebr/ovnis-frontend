import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {get_sightings} from "../actions/sightings"
const Dashboard = ({
    get_sightings,
    user,
    sightingss,
  }) => {
    console.log(sightingss)

    const [page, setPage] = useState(1)

    useEffect(() => {
      get_sightings();
    }, []);
  

  
    const userInfo = () => {
      return (
        <div className="card mb-5">
          <h3 className="card-header">User Information</h3>
          <Link to="/" />
          <ul className="list-group">
            <li className="list-group-item">
              <strong>First Name: </strong>
              {user && user !== null && user !== undefined ? (
                user.first_name
              ) : (
                <Fragment></Fragment>
              )}
            </li>
            <li className="list-group-item">
              <strong>Last Name: </strong>
              {user && user !== null && user !== undefined ? (
                user.last_name
              ) : (
                <Fragment></Fragment>
              )}
            </li>
            <li className="list-group-item">
              <strong>Email: </strong>
              {user && user !== null && user !== undefined ? (
                user.email
              ) : (
                <Fragment></Fragment>
              )}
            </li>
          </ul>
        </div>
      );
    };
  
    const purchaseHistory = () => {
      return (
        <div className="card mb-5">
          <h3 className="card-header">Purchase History</h3>
          <div className="card-body">
            hola
          </div>
        </div>
      );
    };
  
    // const userProfile = () => {
    //   if (profile && profile !== null && profile !== undefined) {
    //     return (
    //       <UserProfileForm
    //         address_line_1={address_line_1}
    //         address_line_2={address_line_2}
    //         city={city}
    //         state_province_region={state_province_region}
    //         zipcode={zipcode}
    //         phone={phone}
    //         country_region={country_region}
    //         onChange={onChange}
    //         onSubmit={onSubmit}
    //         profile={profile}
    //       />
    //     );
    //   } else {
    //     return <Fragment></Fragment>;
    //   }
    // };
  
  
    return (
      <div className="container mt-5">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Aplicacion para amantes de los vinos"
          />
          <title>Shop Time | Dashboard</title>
          {/*<link rel="canonical" href="http://mysite.com/activate" /> */}
        </Helmet>
        <div className="row">
          <h1>iniciaste sesion</h1>
          <Link to="/" > home </Link>
        </div>
      </div>
    );
  };
  
const mapStateToProps = (state) => ({
  user: state.auth.user,
  sightingss: state.sightings.items
});
  
export default connect(mapStateToProps, {
  get_sightings
})(Dashboard);
  