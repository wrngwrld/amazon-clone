import React from "react";
import styled from "styled-components";
import { auth, provider, providerGitHub } from "../firebase";

function Login({ setUser }) {
  const signInGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;

        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };

        localStorage.setItem("user", JSON.stringify(newUser));

        setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signInGitHub = () => {
    auth
      .signInWithPopup(providerGitHub)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        console.log(user);
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };

        localStorage.setItem("user", JSON.stringify(newUser));

        setUser(newUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <AmazonLogo src="../img/Amazon-Logo-Schwarz.png" />
        <h1>Sign into Amazon</h1>
        <LoginButton onClick={signInGoogle}>Sign in with Google</LoginButton>
        <LoginButton onClick={signInGitHub}>Sign in with GitHub</LoginButton>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px grey;
  text-align: center;
`;

const AmazonLogo = styled.img`
  height: 100px;
  margin-bottom: 40px;
`;

const LoginButton = styled.button`
  margin-top: 50px;
  background-color: #f0c14b;
  height: 40px;
  border: 2px solid #a88734;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;

  :hover {
    background: #ddb347;
  }
  :focus {
    outline: none;
  }
`;
