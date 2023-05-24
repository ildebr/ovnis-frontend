import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './hocs/Layout';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Home from './containers/Home';
import Dashboard from './containers/Dashboard';


import PrivateRoute from './hocs/privateRoute';

import store from './store';
import SightingDetail  from './containers/Sighting/SightingDetail';


// const App = () =>{
  
//   <Provider store={store}>
//     <h1>bien</h1>
//     <Router> 
//       <Layout>
//         <Switch>
//           <Route exact path='/' component={Home} />
//           <Route exact path='/login' component={Login} />
//           <PrivateRoute exact path='/dashboard' component={Dashboard} />
//         </Switch>
//       </Layout>
//     </Router>
//   </Provider>
// }
function App() {
  
  return (
  <Provider store={store}>
    
    <div className='container'>
      <Router> 
        <Layout>
          <Switch>
            <Route exact path='/:sightingPageParams' component={Home} />
            <Route exact path='/sighting/:id' component={SightingDetail} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
          </Switch>
        </Layout>
      </Router>
    </div>
  </Provider>
  )
}
export default App;
