import authStateListener from "../firebase/authStateListener";
import getDoc from "../firebase/getDoc";

class AppProvider extends React.Component {
  state = {
    loggedIn: false,
    user: "",
    uid: "",
    region: "can",
    catalog: {},
    categories: []
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
    this.getIndex();
  }

  getIndex() {
    getDoc("inventoryCanada", "categoryIndex")
      .then(index => {
        this.setState({
          categories: index
        });
      })
      .catch(e => {
        console.error(e);
        setTimeout(() => {
          console.warn("retrying getDoc"), this.getIndex();
        }, 1000);
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
