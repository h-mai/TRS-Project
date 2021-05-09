import './App.css';
//import MainContainer from './containers';
import NavBar from "./components/Navbar";
import Home from "./pages/home";
import Search from "./pages/search"
import signUpDivider from "./components/SignUpDivider";
import signUpForms from "./components/SignUpForm"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Divider } from 'semantic-ui-react'


function App() {
  return (

    <div>
      <Router>
        <NavBar></NavBar>
        <Divider>

        
        <Switch>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search}/>
          <Route exact path="/signUp" component={signUpDivider} />
          <Route exact path="/createaccount" component={signUpForms} />
        </Switch>
        </Divider>
      </Router>
    </div>


  );
}


export default App;
