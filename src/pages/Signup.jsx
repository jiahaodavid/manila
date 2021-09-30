import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/signin");
    } catch {
      alert("Something wrong with creating an account.");
    }
    setLoading(false);
  };

  return (
    <Container>
      <Header>
        <h1 style={{ color: "white" }}>Manila</h1>
      </Header>
      <FormContainer>
        <SignInForm onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <FormLabel>Email:</FormLabel>
          <br />
          <InputField type="email" name="username" ref={emailRef} required />
          <br />
          <FormLabel>Password:</FormLabel>
          <br />
          <InputField
            type="password"
            id="lname"
            name="lname"
            ref={passwordRef}
            required
          />
          <br />
          <input type="submit" value="Submit" disabled={!!loading} />
          <Link to="/signin">
            <h3>Already have account? </h3>
          </Link>
        </SignInForm>
      </FormContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  margin: 0px;
`;

const Header = styled.div`
  background: #22577a;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background: #d1d1d1;
  display: grid;
  place-items: center;
`;

const SignInForm = styled.form`
  width: 30%;
  border-top-style: double;
  border-top-width: 7px;
  border-right-style: double;
  border-right-width: 4px;
  padding: 40px;
  min-width: 200px;
  border-bottom-style: double;
  border-left-style: solid;
  border-left-width: 2px;
`;

const FormLabel = styled.label`
  font-family: "Lucida Console", "Courier New", monospace;
  font-size: 20px;
`;

const InputField = styled.input`
  width: 70%;
  height: 24px;
  margin-bottom: 24px;
`;

const Footer = styled.div`
  background: #d1d1d1;
`;
