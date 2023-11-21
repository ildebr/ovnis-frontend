import { useParams } from "react-router-dom"
import { connect } from "react-redux";
import {get_sightings, get_more_sightings, get_sighting_detail} from "../../actions/sightings"
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import SimpleMap from "../../components/googlemap";
import Loader from "react-loader-spinner";
import "./SightingDetail.scss"
import continent from '../../assets/world-svgrepo-com.svg';
import country from '../../assets/location-pin-svgrepo-com.svg';
import date from '../../assets/date-range-svgrepo-com.svg';
import { useHistory } from "react-router-dom";
import larrow from '../../assets/arrow-sm-left-svgrepo-com.svg'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SightingDetail = ({
    sighting,
    state,
    sightings,
    loading,
    detailEle
}) => {
    let history = useHistory();
    console.log(history)
    console.log(history.location?.state?.from)
    const {id} = useParams()

    console.log(sightings.items)

    const [detail, setDetail] = useState()
    const [loadingde, setLoadingDe] = useState(true)


    const get_sighting_detail2 = (id) => async dispatch => {
      setLoadingDe(true)
      const config = {
          headers: {
              'Accept': 'application/json'
          }
      };
      try {
  
          const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/sightings/${id}`, config);

  
              if (res.status === 200) {
                  console.log(res.data)
                  console.log(res)
                  setDetail(res.data)
                  return res.data
              }
      } catch (err) {
        console.log(err)
        setDetail({})
        setLoadingDe(false)
      }
  };

    useEffect(()=>{
      const find = {}

      if(sightings.length > 0){
        find = sightings.items.find( ele => ele.id === id)
        setDetail(find)
        setLoadingDe(false)
      }
      if(!find?.description){
        setDetail(get_sighting_detail2(id))
      }
    }, [])


    useEffect(()=>{
      console.log(detail)
    }, [detail])



    // useEffect(() =>{
        
    // })
    return <p>

      {detail ? 
      <p>
        {detail?.description ? 
        
        <div> 
          {history.location?.state?.from ? <div ><Link className="arrow-c" to={history.location?.state?.from}> <img className="larrow" src={larrow} /> SIGHTINGS </Link></div> : <></>}
          <div className='sightingdetail__text'>
            <h2 className='showup-animation'>{detail.title}</h2>
            <p className='showup-animation'>{detail.description}</p>
          </div>

          <div className="sightingdetail__extra">
            <div className="sightingdetail__extra__element">
              <div className="sightingdetail__extra__icon">
                <img src={continent} />
              </div>
              <div className="sightingdetail__extra__value">
                {detail.continent}
              </div>
              <div className="sightingdetail__extra__name">

              </div>
              
            </div>

            <div className="sightingdetail__extra__element">
              <div className="sightingdetail__extra__icon">
                <img src={country} />
              </div>
              <div className="sightingdetail__extra__value">
                {detail.country}
              </div>
              <div className="sightingdetail__extra__name">

              </div>
              
            </div>
            <div className="sightingdetail__extra__element">
              <div className="sightingdetail__extra__icon">
                <img src={date} />
              </div>
              <div className="sightingdetail__extra__value">
                {detail.date}
              </div>
              <div className="sightingdetail__extra__name">

              </div>
              
            </div>
          </div>

          <SimpleMap className='showup-animation' lat={detail.latitude} long={detail.longitude} />
        </div>
        
        : 
        
        <div className="loading-box">
          {loadingde ? 
          <div className="mt-3 d-flex justify-content-center align-items-center">
              <Loader type="Oval" color="#424242" height={50} width={50} />
          </div> 
          : <p>no cargo</p>} 
        </div> 
        
        }
      </p> 

      
      : 
      <p></p> }
    </p>
}





const mapStateToProps = (state) => ({
    // sighting,
    state: state,
    // orders: state.orders.orders,
    user: state.auth.user,
    // profile: state.profile.profile,
    sightings: state.sightings,
    loading: state.sightings.loading,
    detail: state.sightings.detail
  });
  

export default connect(mapStateToProps, {
    get_sightings,
    get_more_sightings,
    get_sighting_detail
  })(SightingDetail);