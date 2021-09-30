import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./pages/Login";
import PrivateRoute from "./component/PrivateRoute";


function App() {
  return (
    
      <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Login} />
        </Switch>
 
    
  </AuthProvider>
      </Router>
      
  );
}

export default App;
