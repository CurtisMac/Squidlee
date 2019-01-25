import authStateListener from "../firebase/authStateListener";

import { auth } from "../firebase/firebaseInit";

class AppProvider extends React.Component {
  state = {
    loggedIn: false,
    user: "Curtis Bob",
    uid: ""
  };

  componentDidMount() {
    authStateListener(user => {
      if (user) {
        this.setState({
          loggedIn: true,
          user: user.displayName || "Anonymous",
          uid: user.uid
        });
      } else {
        this.setState({
          loggedIn: false,
          user: "",
          uid: ""
        });
      }
    });
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          update: (key, value) =>
            this.setState({
              [key]: value
            })
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppContext = React.createContext();
export default AppProvider;
