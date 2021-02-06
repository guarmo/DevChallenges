import "./tailwind.output.css";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import EditProfile from "./components/EditProfile";

function App() {
  return (
    <Router>
      <div className="m-6">
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/edit-profile" component={EditProfile} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
