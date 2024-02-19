import { useEffect, useState } from "react";
import { Routes, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Form1 from "../components/Form1";
import Form2 from "../components/Form2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { history } from "../routerConfig";
import { Alert, Dropdown, Form, FormGroup, Table } from "react-bootstrap";
import { Col, InputGroup, Row } from "react-bootstrap";
import Swal from "sweetalert2";

export default function SubmitReasearch() {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : navigate("/login");
  if (userInfo === "") {
    navigate("/login");
  }

  const [content, setContent] = useState("type");
  const [fileTypeChanged,setFileTypeChanged] = useState("0");
  const [error, setError] = useState("");
  const [searchInfo, setSearchInfo] = useState({
    type: "",
    fullyTitle: "",
    runnyTitle: "",
    title: "",
    firstName: "",
    midName: "",
    lastName: "",
    degree: "",
    position: "",
    city: "",
    phone: "",
    Affiliation: "",
    orcid: "",
    email: "",
    abstract: "",
    keywords: "",
    subjects: "",
    moreSubjects: "",
    comment: "",
    fileType: "",
    fileDescription: "",
    fileLink: "",
  });
  const [researchReviews, setResearchReviews] = useState({
    title: "",
    firstName: "",
    midName: "",
    lastName: "",
    degree: "",
    position: "",
    city: "",
    phone: "",
    Affiliation: "",
    orcid: "",
    email: "",
    spacifily1: "",
    reasons: "",
  });
  const handleClick = () => {
    console.log(searchInfo);
    console.log(researchReviews);
  };
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setResearchReviews({});
        setSearchInfo({});
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        setContent("type");
      }
    });
  };
  const checkValidation = () => {
    if (content === "type") {
      if (searchInfo.type === "") {
        setError("you must select a type");
      } else {
        setError("");
        setContent("title");
      }
    } else if (content === "title") {
      if (searchInfo.fullyTitle === "" || searchInfo.runnyTitle === "") {
        setError("you must fill all fields");
      } else {
        setError("");
        setContent("author");
      }
    } else if (content === "author") {
      if (
        searchInfo.title === "" ||
        searchInfo.firstName === "" ||
        searchInfo.midName === "" ||
        searchInfo.lastName === "" ||
        searchInfo.degree === "" ||
        searchInfo.position === "" ||
        searchInfo.city === "" ||
        searchInfo.phone === "" ||
        searchInfo.Affiliation === "" ||
        searchInfo.orcid === "" ||
        searchInfo.email === ""
      ) {
        setError("you must fill all fields");
      } else {
        setError("");
        // setContent("abstract");
      }
    } else if (content === "abstract") {
      if (searchInfo.abstract === "") {
        setError("you must fill all fields");
      } else {
        setError("");
        setContent("keyword");
      }
    } else if (content === "keyword") {
      if (searchInfo.keywords === "") {
        setError("you must enter keywords");
      } else {
        setError("");
        setContent("subjects");
      }
    } else if (content === "subjects") {
      if (searchInfo.subjects === "") {
        setError("you must choose subjects");
      } else {
        setError("");
        setContent("comments");
      }
    } else if (content === "reviewers") {
      if (
        researchReviews.email === "" ||
        researchReviews.spacifily1 === "" ||
        researchReviews.reasons === "" ||
        researchReviews.orcid === "" ||
        researchReviews.phone === "" ||
        researchReviews.Affiliation === "" ||
        researchReviews.city === "" ||
        researchReviews.degree === "" ||
        researchReviews.position === "" ||
        researchReviews.lastName === "" ||
        researchReviews.firstName === "" ||
        researchReviews.title === ""
      ) {
        setError("you must fill all fields");
      } else {
        setError("");
        setContent("files");
      }
    } else if (content === "files") {
      if (searchInfo.fileType === "") {
        setError("you must fill all fields");
      } else {
        setError("");
        setContent("finish");
      }
    } else if (content === "comments") {
      setContent("reviewers");
    }
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("searchInfo", JSON.stringify(searchInfo));
    localStorage.setItem("researchReviews", JSON.stringify(researchReviews));
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1300,
    });
    setContent("type");
    setResearchReviews({});
    setSearchInfo({});
  };
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="container">
        <button className="back-btn" onClick={goBack}><i class="fa-solid fa-arrow-left"></i>back</button>
      <div>
        <h1 className="about-title">Submit Research</h1>
      </div>
     
      <div className="row">
        <div className="sidebar col-lg-3 my-3">
          <ul className="card list-unstyled">
            <li className="card-header" onClick={() => setContent("type")}>
              Select Manuscript Type
            </li>
            <li className="card-header" onClick={() => setContent("title")}>
              Enter Manuscript Title
            </li>
            <li className="card-header" onClick={() => setContent("author")}>
              Add/Remove Authors
            </li>
            <li className="card-header" onClick={() => setContent("abstract")}>
              Enter Abstract
            </li>
            <li className="card-header" onClick={() => setContent("keyword")}>
              Enter Keywords
            </li>
            <li className="card-header" onClick={() => setContent("subjects")}>
              Select Related Subjects
            </li>
            <li className="card-header" onClick={() => setContent("comments")}>
              Additional Comments
            </li>
            <li className="card-header" onClick={() => setContent("reviewers")}>
              Suggested Reviewers
            </li>
            <li className="card-header" onClick={() => setContent("files")}>
              Attach Files
            </li>
            <li className="card-header" onClick={() => setContent("finish")}>
              Finish Submission
            </li>
          </ul>
        </div>
        <div className="col-lg-9 my-3">
          <form
            onSubmit={handleSubmit}
            className="form"
            encType="multipart/form-data"
          >
            {content === "type" && (
              <fieldset>
                <legend>Select Manuscript Type</legend>
                <Alert className="sub-alert" key="primary" variant="primary">
                  To submit your manuscript to this journal, you need to
                  complete all the submission steps.
                </Alert>
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="d-flex align-items-center">
                  <h6 className="mx-2">Select manuscript type</h6>
                  <Form.Select
                    onChange={(e) =>
                      setSearchInfo({ ...searchInfo, type: e.target.value })
                    }
                  >
                    <option selected disabled>
                      --select--
                    </option>
                    <option>Original Artical</option>
                    <option>Review Articals</option>
                  </Form.Select>
                </div>
                <button
                  type="button"
                  className="next-btn"
                  onClick={() => {
                    handleClick();
                    checkValidation();
                  }}
                >
                  Next<i class="fa-solid fa-arrow-right"></i>
                </button>
              </fieldset>
            )}
            {content === "title" && (
              <fieldset>
                <legend>Enter the Manuscript Title</legend>

                <div>
                  <h5 className="h5">
                    Please enter only the title of your manuscript below.
                    Additional comments may be entered at a later step.
                  </h5>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Fully title</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setSearchInfo({
                          ...searchInfo,
                          fullyTitle: e.target.value,
                        })
                      }
                      type="text"
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Runny title</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setSearchInfo({
                          ...searchInfo,
                          runnyTitle: e.target.value,
                        })
                      }
                      type="text"
                    />
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => {
                      setContent("type");
                    }}
                  >
                    <i class=" mx-2 fa-solid fa-arrow-left"></i>previous
                  </button>
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => {
                      checkValidation();
                      handleClick();
                    }}
                  >
                    Next<i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </fieldset>
            )}
            {content === "author" && (
              <fieldset>
                <legend>Enter the authors information</legend>
                <fieldset className="p-2">
                  <h5 className="sub-h5">
                    Please enter the name and details of all authors (other than
                    you) who contributed to the work reported in your
                    manuscript. After entering each author's details, click on
                    Add Author button. After entering each author's information,
                    click the "Save Author" button.
                  </h5>
                  <h5 className="sub-h5">
                    By beginning the manuscript submission process, you are
                    automatically designated as the Corresponding Author.
                  </h5>
                </fieldset>
                {error && (
                  <Alert variant="danger" className="my-2">
                    {error}
                  </Alert>
                )}
                <div className="content">
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      Email Address<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setSearchInfo({
                            ...searchInfo,
                            email: e.target.value,
                          })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-envelope"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
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
                        setSearchInfo({ ...searchInfo, title: e.target.value })
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
                      First name<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        onChange={(e) =>
                          setSearchInfo({
                            ...searchInfo,
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
                        setSearchInfo({
                          ...searchInfo,
                          midName: e.target.value,
                        })
                      }
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      Last name<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        onChange={(e) =>
                          setSearchInfo({
                            ...searchInfo,
                            lastName: e.target.value,
                          })
                        }
                        type="text"
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-user"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridEmail"
                    className="my-2 col-md-6 col-sm-12"
                  >
                    <Form.Label>ORCID</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="0000-0000-0000-0000"
                        onChange={(e) =>
                          setSearchInfo({
                            ...searchInfo,
                            orcid: e.target.value,
                          })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-id-card-clip"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
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
                        setSearchInfo({ ...searchInfo, degree: e.target.value })
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
                        setSearchInfo({
                          ...searchInfo,
                          position: e.target.value,
                        })
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
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>Phone</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setSearchInfo({
                            ...searchInfo,
                            phone: e.target.value,
                          })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-phone"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>
                      City<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setSearchInfo({ ...searchInfo, city: e.target.value })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-map"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>
                      Affiliation<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setSearchInfo({
                          ...searchInfo,
                          Affiliation: e.target.value,
                        })
                      }
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => setContent("title")}
                  >
                    <i class=" mx-2 fa-solid fa-arrow-left"></i>previous
                  </button>
                  <button
                    className="next-btn"
                    type="button"
                    onClick={() => {
                      handleClick();
                      // checkValidation();
                      setContent("abstract");
                    }}
                  >
                    Next<i class="fa-solid fa-arrow-right"></i>
                  </button>
                  <button
                    className="save_author_btn btn btn-success ms-3"
                    type="button"
                    onClick={() => {
                      handleClick();
                      checkValidation();
                      
                    }}
                  >
                    Save Author
                  </button>
                </div>
              </fieldset>
            )}
            {content === "abstract" && (
              <fieldset>
                <legend>Enter the submission abstract</legend>
                <div className="content">
                  <p style={{ color: "red" }}>
                    Submitting an abstract is required for submission.
                  </p>
                  <p>
                    Please enter the abstract of your manuscript into the text
                    box below. The abstract may be cut and pasted from a word
                    processing program; however, the formatting will be lost.
                  </p>
                  {error && (
                    <Alert variant="danger" className="my-2">
                      {error}
                    </Alert>
                  )}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      <h4>Abstract</h4>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={(e) => {
                        setSearchInfo({
                          ...searchInfo,
                          abstract: e.target.value,
                        });
                      }}
                      rows={8}
                    />
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => setContent("author")}
                  >
                    <i class=" mx-2 fa-solid fa-arrow-left"></i>previous
                  </button>
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => {
                      handleClick();
                      checkValidation();
                    }}
                  >
                    Next<i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </fieldset>
            )}
            {content === "keyword" && (
              <fieldset>
                <legend>Enter submission keywords</legend>
                {error && (
                  <Alert variant="danger" className="my-2">
                    {error}
                  </Alert>
                )}
                <div className="content">
                  <p>
                    Please enter keywords separated by semicolons or commas.
                    Keywords should not repeat the words of manuscript title. 0
                    to 7 Keywords
                  </p>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      <h5>Keywords</h5>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={(e) => {
                        setSearchInfo({
                          ...searchInfo,
                          keywords: e.target.value,
                        });
                      }}
                      rows={8}
                    />
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => setContent("abstract")}
                  >
                    <i class=" mx-2 fa-solid fa-arrow-left"></i>previous
                  </button>
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => {
                      handleClick();
                      checkValidation();
                    }}
                  >
                    Next<i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </fieldset>
            )}
            {content === "subjects" && (
              <fieldset>
                <h5 className="my-4">
                  Select the subjects related to your submission
                </h5>
                {error && (
                  <Alert variant="danger" className="my-2">
                    {error}
                  </Alert>
                )}
                <div className="content">
                  <FormGroup className="my-4">
                    <Form.Label className="m-0">
                      <p>
                        Please select the subject related to your manuscript.
                      </p>
                    </Form.Label>
                    <Form.Select
                      onChange={(e) => {
                        setSearchInfo({
                          ...searchInfo,
                          subjects: e.target.value,
                        });
                      }}
                      aria-label="Default select example"
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
                  </FormGroup>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="m-0">
                      <h6>Enter one or more subject(s) if you like:</h6>
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => {
                        setSearchInfo({
                          ...searchInfo,
                          moreSubjects: e.target.value,
                        });
                      }}
                      type="text"
                    />
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => setContent("keyword")}
                  >
                    <i class=" mx-2 fa-solid fa-arrow-left"></i>previous
                  </button>
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => {
                      handleClick();
                      checkValidation();
                    }}
                  >
                    next<i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </fieldset>
            )}
            {content === "comments" && (
              <fieldset>
                <legend>Enter any additional comments</legend>
                <div className="content">
                  <p>
                    Please enter any additional comments you would like to
                    include with your submission.
                  </p>
                  {error && (
                    <Alert variant="danger" className="my-2">
                      {error}
                    </Alert>
                  )}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>
                      <h5>Comments</h5>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      onChange={(e) => {
                        setSearchInfo({
                          ...searchInfo,
                          comment: e.target.value,
                        });
                      }}
                      rows={8}
                    />
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => setContent("subjects")}
                  >
                    <i class=" mx-2 fa-solid fa-arrow-left"></i>previous
                  </button>
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => {
                      handleClick();
                      checkValidation();
                    }}
                  >
                    next<i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </fieldset>
            )}
            {content === "reviewers" && (
              <fieldset>
                <legend>Suggest reviewers</legend>
                <fieldset className="p-2">
                  <h5 className="sub-h5">
                    Please suggest potential reviewers for this submission. Use
                    the fields below to give us contact information for each
                    suggested reviewer.
                  </h5>
                  <h5 className="sub-h5">
                    Please note that the journal may not use your suggestions,
                    but your help is appreciated and may speed up the selection
                    of appropriate reviewers.
                  </h5>
                </fieldset>
                {error && (
                  <Alert variant="danger" className="my-2">
                    {error}
                  </Alert>
                )}
                <div className="content">
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      Email Address<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setResearchReviews({
                            ...researchReviews,
                            email: e.target.value,
                          })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-envelope"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
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
                        setResearchReviews({
                          ...researchReviews,
                          title: e.target.value,
                        })
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
                      First name<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        onChange={(e) =>
                          setResearchReviews({
                            ...researchReviews,
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
                        setResearchReviews({
                          ...researchReviews,
                          midName: e.target.value,
                        })
                      }
                      type="text"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      Last name<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        onChange={(e) =>
                          setResearchReviews({
                            ...researchReviews,
                            lastName: e.target.value,
                          })
                        }
                        type="text"
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-user"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId="formGridEmail"
                    className="my-2 col-md-6 col-sm-12"
                  >
                    <Form.Label>ORCID</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="0000-0000-0000-0000"
                        onChange={(e) =>
                          setResearchReviews({
                            ...researchReviews,
                            orcid: e.target.value,
                          })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-id-card-clip"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
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
                        setResearchReviews({
                          ...researchReviews,
                          degree: e.target.value,
                        })
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
                        setResearchReviews({
                          ...researchReviews,
                          position: e.target.value,
                        })
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
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>Specialty</Form.Label>
                    <Form.Select
                      onChange={(e) =>
                        setResearchReviews({
                          ...researchReviews,
                          spacifily1: e.target.value,
                        })
                      }
                      aria-label="Default select example"
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
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>
                      Phone<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setResearchReviews({
                            ...researchReviews,
                            phone: e.target.value,
                          })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-phone"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>
                      City<span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        onChange={(e) =>
                          setResearchReviews({
                            ...researchReviews,
                            city: e.target.value,
                          })
                        }
                      />
                      <InputGroup.Text>
                        <i class="icon fa-solid fa-map"></i>
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>
                      Affiliation<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setResearchReviews({
                          ...researchReviews,
                          Affiliation: e.target.value,
                        })
                      }
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                  <Form.Group
                    onChange={(e) =>
                      setResearchReviews({
                        ...researchReviews,
                        reasons: e.target.value,
                      })
                    }
                    className="my-2 col-md-6 col-sm-12"
                    as={Col}
                  >
                    <Form.Label>Reasons</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setResearchReviews({
                          ...researchReviews,
                          Affiliation: e.target.value,
                        })
                      }
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => setContent("comments")}
                  >
                    <i class=" mx-2 fa-solid fa-arrow-left"></i>previous
                  </button>
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => {
                      handleClick();
                      checkValidation();
                    }}
                  >
                    Next<i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </fieldset>
            )}
            {content === "files" && (
              <fieldset>
                <legend>Attach files</legend>
                <fieldset className="p-2">
                  <h5 className="sub-h5">
                    Please upload all the files related to your manuscript here.
                    Allowed file type(s) for "Manuscript Main File" is only:
                    DOC, DOCX
                  </h5>
                  <h5 className="sub-h5">
                    Notice: Authors information should not be placed in
                    "Manuscript Main File". Upload authors information via
                    "Title Page".
                  </h5>
                </fieldset>
                {error && (
                  <Alert variant="danger" className="my-2">
                    {error}
                  </Alert>
                )}
                <div className="content">
                  <Form.Group
                    as={Col}
                    className="my-2 col-md-6 col-sm-12"
                    controlId="formGridEmail"
                  >
                    <Form.Label>
                      File Type<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) =>{
                        setSearchInfo({
                          ...searchInfo,
                          fileType: e.target.value,
                        });
                        setFileTypeChanged(e.target.value);
                      }
                      }
                    >
                      <option disabled selected>
                        --Select--
                      </option>
                      <option value="0">Title page</option>
                      <option value="1">
                        Manuscript Main File (Without Authors Name) *
                      </option>
                      <option value="2">Copyright Transfer Agreement *</option>
                      <option value="3">Figure</option>
                      <option value="4">Table</option>
                      <option value="6">Supplementary File</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="my-2 col-md-6 col-sm-12" as={Col}>
                    <Form.Label>File Description</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        setSearchInfo({
                          ...searchInfo,
                          fileDescription: e.target.value,
                        })
                      }
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3 col-md-6">
                    <Form.Label>Upload pdf file</Form.Label>
                    <Form.Control type="file" placeholder="upload pdf file" />
                  </Form.Group>
                  {fileTypeChanged == "1" &&
                  <Form.Group controlId="formFile" className="mb-3 my-2 col-md-6">
                    <Form.Label>Upload word file</Form.Label>
                     <Form.Control type="file" placeholder="upload word file"  />
                  </Form.Group>
                  }
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => setContent("reviewers")}
                  >
                    <i class=" mx-2 fa-solid fa-arrow-left"></i>previous
                  </button>
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => {
                      handleClick();
                      checkValidation();
                    }}
                  >
                    Next<i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </fieldset>
            )}
            {content === "finish" && (
              <fieldset>
                <div className="d-flex align-items-center justify-content-between">
                  <legend>finish submitting research</legend>
                  <button
                    className="btn submit-btn btn-danger"
                    onClick={handleDelete}
                  >
                    Delete research
                  </button>
                </div>

                <hr />
                <div className="content">
                  <h6 className="">Reasearch summary:</h6>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Manuscript Title</td>
                        <td>Manuscript Type</td>
                        <td>Running Title</td>
                        <td>Abstract</td>
                        <td>Keywords</td>
                      </tr>
                      <tr>
                        <td>{searchInfo.fullyTitle}</td>
                        <td>{searchInfo.type}</td>
                        <td>{searchInfo.runnyTitle}</td>
                        <td>{searchInfo.abstract}</td>
                        <td>{searchInfo.keywords}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <h6 className="">Reviewer details:</h6>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Degree </td>
                        <td>position</td>
                        <td>spacifilty</td>
                      </tr>
                      <tr>
                        <td>
                          {researchReviews.firstName} {researchReviews.lastName}
                        </td>
                        <td>{researchReviews.email}</td>
                        <td>{researchReviews.degree}</td>
                        <td>{researchReviews.position}</td>
                        <td>{researchReviews.spacifily1}</td>
                      </tr>
                    </tbody>
                  </Table>
                  <h6 className="">Author details:</h6>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Degree </td>
                        <td>position</td>
                        <td>author title</td>
                      </tr>
                      <tr>
                        <td>
                          {searchInfo.firstName} {searchInfo.lastName}
                        </td>
                        <td>{searchInfo.email}</td>
                        <td>{searchInfo.degree}</td>
                        <td>{searchInfo.position}</td>
                        <td>{searchInfo.title}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <button
                    type="button"
                    className="next-btn"
                    onClick={() => setContent("files")}
                  >
                    <i class=" mx-2 fa-solid fa-arrow-left"></i>previous
                  </button>
                  <button className="next-btn submit-btn" type="submit">
                    Submit research
                  </button>
                </div>
              </fieldset>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
