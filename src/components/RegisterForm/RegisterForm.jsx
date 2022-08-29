import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export const RegisterForm = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    // const form = evt.currentTarget;
    // if (
    //   form.checkValidity() !== false ||
    //   name !== '' ||
    //   email !== '' ||
    //   password !== ''
    // ) {
    //   console.log({ name, email, password });
    //   evt.stopPropagation();
    //   return;
    // }
    console.log({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handelSubmit}>
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
        {/* <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback> */}
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
        {/* <Form.Control.Feedback type="invalid">
          Please choose an email.
        </Form.Control.Feedback> */}
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
        {/* <Form.Control.Feedback type="invalid">
          Please choose a password.
        </Form.Control.Feedback> */}
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
