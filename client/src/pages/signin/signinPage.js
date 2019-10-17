import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../signup/signupPage';
import { withFirebase } from '../../shared_components/Firebase';

// sets up the template
const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

// variable that sets the initial state that will be called in the later class
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    // initializes state to the null values
    this.state = { ...INITIAL_STATE };
  }

  // the onSubmit function
  onSubmit = event => {
    // takes the users email and password from state
    const { email, password } = this.state;
    // calls the firebase authentication function for email and password
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        // if successful login, resets state and redirects to home
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  // on change handler, gets called on both fields
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

// compose is a module that lets you do the equivalent of this more cleanly:const SignInForm = withRouter(withFirebase(SignInFormBase)); 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

// export the pieces created
export default SignInPage;
export { SignInForm };