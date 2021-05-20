import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from './Auth'
import firebaseConfig from '../Firebase'
import { provider, auth } from '../Firebase';
import { useHistory } from "react-router-dom";

const LogIn = () => {


  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        var user = userCredential.user
      })


      .catch(function (error) {
        alert(error);
      });
  }
  const facebookLogin = () => {

    var provider = new firebaseConfig.auth.FacebookAuthProvider();
    firebaseConfig.auth().signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;

        var user = result.user;

        var accessToken = credential.accessToken;

      })

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

      });
  }



  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/movies" />;
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>


          <button style={{ marginLeft: 10 }} className="btn btn-primary" onClick={() => history.push('/signup')}>SignUp</button>

        </form>
        <button style={{ marginTop: 20 }} className="btn btn-primary" onClick={() => facebookLogin()}>Login Facebook</button>


      </div>
    </>
  )
}

export default LogIn;