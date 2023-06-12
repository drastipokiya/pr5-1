import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in...');
  };

  const handleSignup = () => {
    // Handle signup logic here
    console.log('Signing up...');
  };

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password...');
  };

  return (
    <Container>
      <h1>{isLogin ? 'Login' : 'Signup'}</h1>
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {isLogin ? (
          <>
            <Button variant="primary" onClick={handleLogin}>
              Login
            </Button>
            <p>
              Don't have an account?{' '}
              <span onClick={handleToggle}>Signup</span>
            </p>
            <p onClick={handleForgotPassword}>Forgot password?</p>
          </>
        ) : (
          <>
            <Button variant="dark" onClick={handleSignup}>
              Signup
            </Button>
            <p>
              Already have an account?{' '}
              <span onClick={handleToggle}>Login</span>
            </p>
          </>
        )}
      </Form>
    </Container>
  );
};

export default App;
