import { useState } from "react";
import { Alert, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
  
export default function AddUser() {
  const [error, setError] = useState("");
  const [input, setInput] = useState("");
  const [validationResult, setValidationResult] = useState("");
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    title: "",
    firstName: "",
    midName: "",
    lastName: "",
    degree: "",
    position: "",
    speciality: "",
    fieldStudy: "",
    phone: "",
    mobile: "",
    postalCode: "",
    homePage: "",
    affiliation: "",
    orcid: "",
    email: "",
    altEmail: "",
    fax: "",
    username: "",
    password: "",
    comment: "",
    role: "",
  });
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  async function register() {
    // check if the input required fields are filled
    if (
      !userInfo.title ||
      !userInfo.firstName ||
      !userInfo.lastName ||
      !userInfo.degree ||
      !userInfo.position ||
      !userInfo.mobile ||
      !userInfo.postalCode ||
      !userInfo.affiliation ||
      !userInfo.email ||
      !userInfo.username ||
      !userInfo.password
    ) {
      setError("Please fill all the required fields *");
    }else{
      setError("")
      let item = {
        title: userInfo.title,
        firstName: userInfo.firstName,
        midName: userInfo.midName,
        lastName: userInfo.lastName,
        degree: userInfo.degree,
        position: userInfo.position,
        speciality: userInfo.speciality,
        fieldStudy: userInfo.fieldStudy,
        phone: userInfo.phone,
        mobile: userInfo.mobile,
        postalCode: userInfo.postalCode,
        homePage: userInfo.homePage,
        affiliation: userInfo.affiliation,
        orcid: userInfo.orcid,
        email: userInfo.email,
        altEmail: userInfo.altEmail,
        fax: userInfo.fax,
        username: userInfo.username,
        password: userInfo.password,
        comment: userInfo.comment,
        role: userInfo.role,
      };
      console.log(item);
      let result = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        navigate("/dashboard");
        console.log("done");
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);

    setInput("");
  };
  return (
    <div className="container register my-3">
      <div>
        <h3 className="about-title">Register</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* left side */}
          <div className="container col-md-7">
            <div className="form-control">
              <h4 className="my-4">Enter your personal information.</h4>
              <hr />
              {error && (
                  <Alert className="error text-center danger" key="danger" variant="danger" >
                    {error}
                  </Alert>
                ) }
              <Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      Title<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, title: e.target.value })
                      }
                    >
                      <option disabled selected>
                        --Select--
                      </option>
                      <option value="dr">Dr.</option>
                      <option value="prof">Prof.</option>
                      <option value="mr">Mr.</option>
                      <option value="mrs">Mrs.</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      Role<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, role: e.target.value })
                      }
                    >
                      <option disabled selected>
                        --Select--
                      </option>
                      <option value="managing_editor">Managing Editor</option>
                      <option value="assistant_editor">Assistant Editor</option>
                      <option value="editor">Editor</option>
                      <option value="reviewer">Reviewer</option>
                      <option value="user">User</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      First Name<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            firstName: e.target.value,
                          })
                        }
                        type="text"
                        placeholder="Enter first name"
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-user"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-2 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>Mid</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, midName: e.target.value })
                      }
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-4"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      last name<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, lastName: e.target.value })
                        }
                        type="text"
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-user"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      Degree<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, degree: e.target.value })
                      }
                    >
                      <option disabled selected>
                        --Select--
                      </option>
                      <option value="phd">ph.D.</option>
                      <option value="md">MD</option>
                      <option value="phdcand">ph.D. Candidate</option>
                      <option value="msc">Msc</option>
                      <option value="mscstudent">Msc student</option>
                      <option value="bsc">Bsc</option>
                      <option value="other">other</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      Position<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, position: e.target.value })
                      }
                    >
                      <option selected disabled>
                        --Select--
                      </option>
                      <option value="professor">professor</option>
                      <option value="assprofessor">associate professor</option>
                      <option value="asstantprofessor">
                        assistant professor
                      </option>
                      <option value="instructor">instructor</option>
                      <option value="lecturer">lecturer</option>
                      <option value="other">other</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>Specialty</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, speciality: e.target.value })
                      }
                    >
                      <option selected disabled>
                        --Select--
                      </option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="ComputerScience">Computer Science</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="Botany">Botany</option>
                      <option value="Zoology">Zoology</option>
                      <option value="Geology">Geology</option>
                      <option value="other">other</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="my-2" as={Col}>
                    <Form.Label>Specific field of study</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            fieldStudy: e.target.value,
                          })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-graduation-cap"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>Phone</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, phone: e.target.value })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-phone"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>
                      Mobile<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, mobile: e.target.value })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-mobile"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>
                      Fax<span className="text-danger"></span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, fax: e.target.value })
                        }
                        type="text"
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-fax"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>
                      Home page<span className="text-danger"></span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, homePage: e.target.value })
                        }
                        type="text"
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-earth-americas"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>
                      Postal code<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setUserInfo({
                            ...userInfo,
                            postalCode: e.target.value,
                          })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-location-dot"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>
                      Affiliation<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setUserInfo({
                          ...userInfo,
                          affiliation: e.target.value,
                        })
                      }
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                </Row>
              </Row>
            </div>
          </div>
          {/* right side */}
          <div className="container mb-3 col-md-4">
            <div className="form-control">
              <h4 className="my-4">Account information</h4>
              <hr />
              <Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>ORCID </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, orcid: e.target.value })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-id-card-clip"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>
                      Email Address<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, email: e.target.value })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-envelope"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Alternative Email Address</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, altEmail: e.target.value })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-envelope"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>
                      Username <span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, username: e.target.value })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-user"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>
                      Password<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="password"
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, password: e.target.value })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-envelope"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>
                      Comment<span className="text-danger"></span>
                    </Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, comment: e.target.value })
                      }
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "70px" }}
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <div class="form-group mb-3">
                    <label class="control-label mx-1">
                      Available as Reviewer
                    </label>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider"></span>
                    </label>
                  </div>
                </Row>

                <Row>
                  <div class="form-group mb-3">
                    <label class="control-label mx-1">
                      Receive news, promotions and special offers about our
                      products and services.
                    </label>
                    <label class="switch">
                      <input type="checkbox" />
                      <span class="slider"></span>
                    </label>
                  </div>
                </Row>
                <Row className="d-flex justify-content-center align-items-center">
                  {/* submit button */}
                  <div className="d-flex justify-content-center align-items-center form-group">
                    <button
                      type="button"
                      onClick={register}
                      className=" btn btn-primary"
                    >
                      Save
                    </button>
                  </div>
                </Row>
              </Row>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
