import { useState } from "react";
import { Alert } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [userInfo, setUserInfo] = useState( localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : {});
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });
  const user = localStorage.getItem(JSON.parse(localStorage.getItem("userInfo")));
  if (user) {
    navigate("/");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInfo.username === loginInfo.username && userInfo.password === loginInfo.password) {
      navigate("/");
      window.location.reload();
      setError("");
    }else{
      console.log("login failed");
      setError("password or username not correct");
    }
  }
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
        <form onSubmit={handleSubmit}>
          <div className="col-md-6 panel p-0 panel-default my_panel-default panel-shadow">
            <div className="panel-heading">
              <b className="panel-title">Login</b>
            </div>
            <div className="login-error">
                {error && (
                  <Alert className="error text-center danger" key="danger" variant="danger" >
                    {error}
                  </Alert>
                ) }
            </div>
            <div className="panel-body">
              <InputGroup className="mb-3">
                <Form.Control type="text" onChange={(e)=>setLoginInfo({...loginInfo, username: e.target.value})} aria-label="Username" placeholder="Username" />
                <InputGroup.Text>
                  <i className="icon fa-solid fa-user"></i>
                </InputGroup.Text>
              </InputGroup>
              <InputGroup>
                <Form.Control type="password" onChange={(e)=>setLoginInfo({...loginInfo, password: e.target.value})} aria-label="Password" placeholder="Password" />
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
        </form>
      </div>
    </div>
  );
}
