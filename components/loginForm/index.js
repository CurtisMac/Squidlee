class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "test", password: "test" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    //handle change
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(`User: ${this.state.email} Password: ${this.state.password}`);
  }
  render() {
    return (
      <React.Fragment>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value="E-mail" onChange={this.onChange} />
          <br />
          <input type="text" value="Password" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
