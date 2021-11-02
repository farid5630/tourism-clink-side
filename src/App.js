import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddService from './Pages/AddService/AddService';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import SinglePlace from './Pages/SinglePlace/SinglePlace';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Headers/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="/addservices">
            <AddService></AddService>
          </Route>
          <PrivateRoute path="/booknow/:placeId">
            <SinglePlace></SinglePlace>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
