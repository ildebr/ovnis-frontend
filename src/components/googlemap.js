import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text, icon }) => <div> <img src={icon} /> </div>;

export default function SimpleMap(props){
  const defaultProps = {
    center: {
      lat: Number(props.lat),
      lng: Number(props.long)
    },
    zoom: 11
  };


  console.log(Number(props.lat))

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        mapContainerClassName='map-container'
      >

        
        <AnyReactComponent
          lat={Number(props.lat)}
          lng={Number(props.long)}
          text="Here"
          icon='https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
        />
      </GoogleMapReact>
    </div>
  );
}