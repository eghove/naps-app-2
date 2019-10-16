import app from 'firebase/app';
import 'firebase/auth';
import config from '../../configs/firebaseDev';

class Firebase {
  constructor() {
    app.initializeApp(config);
    // for authentication
    this.auth = app.auth();
  }

  // AUTH API
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase;