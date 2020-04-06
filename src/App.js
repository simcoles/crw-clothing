import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/header/Header";
import { Switch, Route } from "react-router-dom";
import SignInAndRegisterPage from "./pages/sign-in-and-register/SignInAndRegisterPage";
import { auth } from "./firebase/firebase.utils";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentUser: null };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  unsubscribeFromAuth = null;

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndRegisterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
