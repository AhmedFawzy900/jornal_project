import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container login">
      <div>
        <h3 className="about-title">Login</h3>
      </div>
      <div className="row">
        <div class="col-md-6">
          <p class="text-muted">
            If you have not registered yet, please click on{" "}
            <Link to={"/register"} className="tag_a">
              <b>Register</b>
            </Link>
          </p>
        </div>
        {/* login form */}
        <div className="col-md-6 panel p-0 panel-default my_panel-default panel-shadow">
          <div className="panel-heading">
            <b className="panel-title">Login</b>
          </div>
          <div className="panel-body">
            <InputGroup className="mb-3">
              <Form.Control aria-label="Username" placeholder="Username" />
              <InputGroup.Text>
                <i className="icon fa-solid fa-user"></i>
              </InputGroup.Text>
            </InputGroup>
            <InputGroup>
              <Form.Control aria-label="Password" placeholder="Password" />
              <InputGroup.Text>
                <i class="icon fa-solid fa-lock"></i>
              </InputGroup.Text>
            </InputGroup>
            <div className="d-flex justify-content-between align-items-center">
              <a href="#" className="text-decoration-none forgot">
                Forgot password?
              </a>
              <button
                type="submit"
                className="d-flex align-items-center justify-content-center btn btn-primary my-3"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
