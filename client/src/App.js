import './App.css';
//import MainContainer from './containers';
import NavBar from "./components/Navbar";
import Home from "./pages/home";
//import SearchBar from "./components/SearchBar"
import SignUp from "./components/signUp/breakerForm";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";


function App() {
  return (

    <div>
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* // <Route exact path="/search" component={SearchBar} /> */}
          <Route exact path="/signUp" component={SignUp} />
          <Route component={SignUp} />
        </Switch>
      
      </Router>


    </div>


  );
}


export default App;
