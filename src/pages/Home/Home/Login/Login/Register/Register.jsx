import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../../provider/AuthProvider";


const Register = () => {

  const {createUser} = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log(name, photo, email, password);

        createUser(email, password)
        .then(result =>{
          const createdUser = result.user;
          console.log(createdUser);
          
        })
        .catch(error =>{
          console.log(error);
          
        })
        // Add further login logic, such as API calls, state updates, etc.
      };
    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="border p-4 rounded shadow" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Please Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="name" name="name" placeholder="Enter Your Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control type="text" name="photo" placeholder="Enter Your Photo URL" required />
          </Form.Group>
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
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
          <p className="text-danger mt-2"></p> {/* Placeholder for error messages */}
        </Form>
      </div>
    </Container>
    );
};

export default Register;