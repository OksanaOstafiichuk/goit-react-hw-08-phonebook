import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { useCreateUserMutation } from '../../redux/authApi';

import 'bootstrap/dist/css/bootstrap.min.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUser] = useCreateUserMutation();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handelSubmit = evt => {
    evt.preventDefault();

    createUser({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>User name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="User name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sing in
      </Button>
    </Form>
  );
};
