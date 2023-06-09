import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 4px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#ccc')};
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: ${(props) => (props.error ? 'red' : '#4caf50')};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#4caf50')};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;

const ErrorMessage = styled.p`
  margin: 0;
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    console.log("log -66 ");
    navigate("/about");
    
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={(e)=>handleSubmit(e)}>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />
        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </SubmitButton>
      </LoginForm>
    </LoginPageContainer>
  );
};

export default Login;
