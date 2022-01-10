import { Form, Button} from 'react-bootstrap';
import './Login.css';

import { useContext} from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    // throw new Error('Some error... :)');
    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {email, password } = Object.fromEntries(formData);
    

        login(email, password);
        navigate('/');
    };

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" />
                {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button className="btn-submit" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default Login;