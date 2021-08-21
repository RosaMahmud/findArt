import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import EditProfile from "./pages/edit/EditProfile";
import Type from "./pages/userType/Type";
import ArtistRegister from "./pages/artistRegister/ArtistRegister";
import Category from "./pages/category/Category";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Type />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/userType/Type">
          <Type />
        </Route>
        <Route path="/category/Category">
          <Category />
        </Route>
        <Route path="/artistRegister/ArtistRegister">
          <ArtistRegister />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/edit/EditProfile">
          <EditProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
