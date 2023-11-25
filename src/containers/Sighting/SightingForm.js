import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import { create_user_sighting,remove_user_created_sucess } from "../../actions/sightings";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from 'react-router-dom';

const SightingForm = ({create_user_sighting, itemCreated, loading,remove_user_created_sucess}) =>{
   
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        latitude: "",
        longitude: ""
    });

    const { title, description, latitude, longitude } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        create_user_sighting(formData)
        console.log(formData)
    };

    const history = useHistory();

    useEffect(()=>{
        console.log('item', itemCreated)
        if(itemCreated==true) {
            console.log('inside')
            history.push('/dashboard')
    
            remove_user_created_sucess();
            
        }
    }, [itemCreated])

    if(itemCreated) {
        remove_user_created_sucess();
        <Redirect to={'/dashboard'} />
    }




    return <>
    <div className="sm-pad container">
    <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="title">
                
            
            <input 
                type="text" 
                name="title"
                value={title}
                required
                onChange={(e) => onChange(e)} 
                className="username__input"
            />
            <span className="input-placeholder">title</span>
        </label>

        <div>
            <label htmlFor="longitude">
                
            
                <input 
                    type="text" 
                    name="longitude"
                    value={longitude}
                    required
                    onChange={(e) => onChange(e)} 
                    className="username__input"
                />
                <span className="input-placeholder">longitude</span>
            </label>
            <label htmlFor="latitude">
                
            
            <input 
                type="text" 
                name="latitude"
                value={latitude}
                required
                onChange={(e) => onChange(e)} 
                className="username__input"
            />
            <span className="input-placeholder">latitude</span>
        </label>
        </div>

        <label htmlFor="description">
                
            
            <input 
                type="text" 
                name="description"
                value={description}
                required
                onChange={(e) => onChange(e)} 
                className="username__input"
            />
            <span className="input-placeholder">description</span>
        </label>

        {loading ? (
        <div className="mt-3 d-flex justify-content-center align-items-center">
            <Loader type="Oval" color="#424242" height={50} width={50} />
        </div>
        ) : (
            <input type="submit" placeholder="Submit" value="Submit" />
        )}
    </form>
    </div>
    </>
}

const mapStateToProps = (state) => ({
    itemCreated: state.sightings.itemCreated,
    loading: state.sightings.loading,
  });

export default connect(mapStateToProps, { create_user_sighting, remove_user_created_sucess })(SightingForm);

// export default SightingForm

