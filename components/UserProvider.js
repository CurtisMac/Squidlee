export const UserContext = React.createContext();

export default class UserProvider extends React.Component {
  state = {
    loggedIn: false,
    user: "Curtis Bob",
    address: "some JSON"
  };
  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          update: (key, value) =>
            this.setState({
              [key]: value
            })
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

//export default UserProvider;
