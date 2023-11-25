import React, { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {get_sightings, get_user_sightings} from "../actions/sightings"

import axios from 'axios';
const Dashboard = ({
    get_sightings,
    user,
    sightingss,
    userItems,
    get_user_sightings
  }) => {
    

    useEffect(() => {
      
        get_user_sightings()

        setTimeout(()=>{
          get_user_sightings()
        }, 200)
      
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

    console.log('dashboard')
  
  
    return (
      <div className="container mt-5 sm-pad">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Aplicacion para amantes de los vinos"
          />
          <title>UFOW | Dashboard</title>
          {/*<link rel="canonical" href="http://mysite.com/activate" /> */}
        </Helmet>
        <div className="row">
          <h1>Hello, {user.first_name}</h1>
          <p>Do you have a sighting you want to publish? <Link to={'/sighting/create'}>Report a sighting</Link></p>

          <div >
              <h2>Your Sightings</h2>

              <div>
                {userItems.length >= 1 ? userItems?.map((item)=>{
                  return <p><Link to={`/sighting/${item.id}`}>{item.title} {item.country}</Link></p>
                }) : <></>}
              </div>
          </div>
        </div>
      </div>
    );
  };
  
const mapStateToProps = (state) => ({
  user: state.auth.user,
  sightingss: state.sightings.items,
  userItems : state.sightings.userItems
});
  
export default connect(mapStateToProps, {
  get_sightings,
  get_user_sightings
})(Dashboard);
  