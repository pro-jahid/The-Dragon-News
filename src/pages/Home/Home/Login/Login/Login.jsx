import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../provider/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/category/0'
    

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)  
    .then(result =>{
      const signInUser = result.user;
      console.log(signInUser);
      navigate(from, {replace:true})
      
    })
    .catch(error =>{
        console.log(error);
        
    })
    // Add further login logic, such as API calls, state updates, etc.
  };

 

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="border p-4 rounded shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Please Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
          <div className="text-center mt-3">
            <p className="mb-0">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
          <p className="text-danger mt-2"></p> {/* Placeholder for error messages */}
        </Form>
      </div>
    </Container>
  );
};

export default Login;
