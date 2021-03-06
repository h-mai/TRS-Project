import './App.css';
//import MainContainer from './containers';
import NavBar from "./components/Navbar";
import Home from "./pages/home";
import Search from "./pages/search"
import signUpDivider from "./components/SignUpDivider";
import signUpForms from "./components/SignUpForm/newUserSignUp"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import ProfilePage from "./components/ProfilePage"

function App() {
  return (

  <div>
      <Container fluid>
      <Router>        
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search}/>
          <Route exact path="/signUp" component={signUpDivider} />
          <Route exact path="/createaccount" component={signUpForms} />
          <Route path="/profile/:id" component={ProfilePage} />
        </Switch>
     </Router>
      </Container>
    </div>
    
  );
}


export default App;
