
import { connect } from "react-redux";

export  const Errormsg = ({error})=>{
    return <>
        {error && <div class='error__message'>{error.msg} maldi</div>}
        </>
}

const mapStateToProps = (state) => ({
    error: state.alert.alert
  }); 
//   export default 
  connect(mapStateToProps)(Errormsg)