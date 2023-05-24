import { useParams } from "react-router-dom"
import { connect } from "react-redux";
import {get_sightings, get_more_sightings} from "../../actions/sightings"
import { useEffect } from "react";

const SightingDetail = ({
    sighting,
    state,
    sightings,
    loading
}) => {

    const {id} = useParams()

    console.log(sightings.items)

    const find = sightings.items.find( ele => ele.id === id)
    console.log(find)

    // useEffect(() =>{
        
    // })
    return <p>Hello</p>
}





const mapStateToProps = (state) => ({
    // sighting,
    state: state,
    // orders: state.orders.orders,
    user: state.auth.user,
    // profile: state.profile.profile,
    sightings: state.sightings,
    loading: state.sightings.loading
  });
  

export default connect(mapStateToProps, {
    get_sightings,
    get_more_sightings
  })(SightingDetail);