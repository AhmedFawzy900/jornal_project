import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import img from "../images/cover-2.png";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Alert } from "react-bootstrap";
export default function ViewArtical() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [artical, setArtical] = useState({});
  const [authors, setAuthors] = useState([]);
  const [ass_editor, setAss_editor] = useState("");
  const [users, setUsers] = useState([]);
  const [reviewer_comment, setReviewer_comment] = useState("");
  const [reviewer1, setReviewer1] = useState("");
  const [reviewer2, setReviewer2] = useState("");
  const [reviewer3, setReviewer3] = useState("");
  const [error, setError] = useState("");
  const [reviewersData, setReviewersData] = useState("");
  const [reviwerName, setReviwerName] = useState([]);
  const [reviewerSubmitStatus, setReviewerSubmitStatus] = useState({});
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : navigate("/login");
  const [status, setStatus] = useState(userInfo.role == "Reviewer" ? "underReview" : "rejected");

  // fetch this element form api
  useEffect(() => {
    fetch(`https://eissa-group.com/api/researchs/${id}`).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setArtical(data);

        const authorsArray =
          data.authorsArray !== undefined ? data.authorsArray : [];
        console.log(authorsArray);

        if (authorsArray.length > 0) {
          fetch("https://eissa-group.com/api/researchs/getAuthorsData", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ ids: authorsArray }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setAuthors(data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      });
    });
    // fetch all users
    fetch("https://eissa-group.com/api/users").then((res) => {
      res.json().then((data) => {
        console.log(data);
        setUsers(data);
      });
    });
  }, []);

  const handleSubmit = (id) => {
    if (userInfo.role == "managing_editor") {
      const formData = new FormData();
      formData.append("artical_id", id);
      formData.append("associated_id", ass_editor);
      if (status == "underReview") {
        // console.log(ass_editor,id);
        fetch("https://eissa-group.com/api/assignResearchToAssEditor", {
          method: "POST",
          body: JSON.stringify({
            artical_id: id,
            associated_id: ass_editor,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
            fetch("https://eissa-group.com/api/submitDataToFeedback", {
              method: "POST",
              body: JSON.stringify({
                artical_id: id,
              }),
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }).then((res) => {
              res.json().then((data) => {
                console.log(data);
              });
            });
          });
        });

        fetch(`https://eissa-group.com/api/researchs/updateStatus/${id}`, {
          method: "PUT",
          body: JSON.stringify({ status: status }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
            navigate("/dashboard");
          });
        });
      } else {
        fetch(`https://eissa-group.com/api/researchs/updateStatus/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            status: status,
            reviewer_comment: reviewer_comment,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
            navigate("/dashboard");
          });
        });
      }
    } else if (userInfo.role == "assistant_editor") {
      const formData = new FormData();
      formData.append("artical_id", id);
      formData.append("associated_id", ass_editor);
      if (status == "underReview") {
        // console.log(ass_editor,id);
        fetch("https://eissa-group.com/api/assignResearchToEditor", {
          method: "POST",
          body: JSON.stringify({
            artical_id: id,
            editor_id: ass_editor,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
            navigate("/dashboard");
          });
        });
        // fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
        //   method: "PUT",
        //   body: JSON.stringify({
        //     assistant_status: "Accepted",
        //     assistant_comment: null,
        //   }),
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //   },
        // }).then((res) => {
        //   res.json().then((data) => {
        //     console.log(data);
        //     navigate("/dashboard");
        //   });
        // });
      } else {
        fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            assistant_status: status,
            assistant_comment: reviewer_comment,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
            navigate("/dashboard");
          });
        });
      }
    } else if (userInfo.role == "Editor") {
      if (status == "underReview") {
        if (
          reviewer1 == reviewer2 ||
          reviewer2 == reviewer3 ||
          reviewer3 == reviewer1
        ) {
          setError("reviewer must be different");
        } else if (reviewer1 == "" || reviewer2 == "" || reviewer3 == "") {
          setError("");
          setError("you must choose three reviewers");
        } else {
          fetch("https://eissa-group.com/api/assignedReviewers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              artical_id: id,
              reviewer_1_id: reviewer1,
              reviewer_2_id: reviewer2,
              reviewer_3_id: reviewer3,
            }),
          })
            .then((res) => {
              res.json().then((data) => {
                console.log(data);
                fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
                  method: "PUT",
                  body: JSON.stringify({
                    editor_status: "Accepted",
                    editor_comment: null,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }).then((res) => {
                  res.json().then((data) => {
                    console.log(data);
                    navigate("/dashboard");
                  });
                });
              });
            })
            .catch((err) => {
              console.log(err);
            });
          console.log("assign to reviewers", reviewer1, reviewer2, reviewer3);
        }
      } else {
        fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            editor_status: status,
            editor_comment: reviewer_comment,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
            navigate("/dashboard");
          });
        });
      }
    } else if (userInfo.role == "Reviewer") {
      if (status != "underReview") {
        fetch(`https://eissa-group.com/api/getReviewersData/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {

            console.log(data,"row of data ");
            console.log(userInfo.id,"user id ");
            setReviewersData(data);
            if (userInfo.id == data[0].reviewer_1_id) {
              console.log(status, reviewer_comment);
              fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  reviewer_1_status: status,
                  reviewer_1_comment: reviewer_comment,
                }),
              })
                .then((res) => {
                  res.json().then((data) => {
                    console.log("1");
                    console.log(status, reviewer_comment);
                    console.log(data);
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            } else if (userInfo.id == data[0].reviewer_2_id) {
              fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  reviewer_2_status: status,
                  reviewer_2_comment: reviewer_comment,
                }),
              })
                .then((res) => {
                  res.json().then((data) => {
                    console.log("2");
                    console.log(status, reviewer_comment);
                    console.log(data);
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
            } else if (userInfo.id == data[0].reviewer_3_id) {
              fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  reviewer_3_status: status,
                  reviewer_3_comment: reviewer_comment,
                }),
              }).then((res) => {
                res.json().then((data) => {
                  console.log(status, reviewer_comment);
                  console.log(data);
                });
              });
            } else {
              console.log("reviewer not found");
            }
          });
        });
      }
    }
  };
  const goBack = () => {
    window.history.back();
  };
  function assignReviewer() {
    if (userInfo.role == "Reviewer") {
      fetch(`https://eissa-group.com/api/getReviewersData/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        res.json().then((data) => {
          console.log(data);
          setReviewersData(data);
          if (userInfo.id === data[0].reviewer_1_id) {
            console.log(status, reviewer_comment);
            fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                reviewer_1_status: "Accepted",
                reviewer_1_comment: null,
              }),
            })
              .then((res) => {
                res.json().then((data) => {
                  console.log("1");
                  console.log(status, reviewer_comment);
                  console.log(data);
                  navigate("/dashboard");
                });
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (userInfo.id === data[0].reviewer_2_id) {
            fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                reviewer_2_status: "Accepted",
                reviewer_2_comment: null,
              }),
            })
              .then((res) => {
                res.json().then((data) => {
                  console.log("2");
                  console.log(status, reviewer_comment);
                  console.log(data);
                  navigate("/dashboard");

                });
              })
              .catch((err) => {
                console.log(err);
              });
          } else if (userInfo.id === data[0].reviewer_3_id) {
            fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                reviewer_3_status: "Accepted",
                reviewer_3_comment: null,
              }),
            }).then((res) => {
              res.json().then((data) => {
                console.log(status, reviewer_comment);
                console.log(data);
                navigate("/dashboard");

              });
            });
          } else {
            console.log("reviewer not found");
          }
        });
      });
    }else if (userInfo.role == "assistant_editor") {
      fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            assistant_status: "Accepted",
            assistant_comment: null,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
            navigate("/dashboard");
          });
        });
    }else if (userInfo.role == "managing_editor") {
        fetch(`https://eissa-group.com/api/researchs/updateStatus/${id}`, {
          method: "PUT",
          body: JSON.stringify({ status: "Accepted" }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {
            console.log(data);
            navigate("/dashboard");
          });
        });
      
    }else if(userInfo.role == "Editor"){
      fetch(`https://eissa-group.com/api/updateFeedbackStatus/${id}`, {
                  method: "PUT",
                  body: JSON.stringify({
                    editor_status: "Accepted",
                    editor_comment: null,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                }).then((res) => {
                  res.json().then((data) => {
                    console.log(data);
                    navigate("/dashboard");
                  });
                });
    }
  }
  return (
    <div className=" row abstracPage">
      {/* back button */}
      <button className="back-btn" onClick={goBack}>
        <i class="fa-solid fa-arrow-left"></i>back
      </button>
      {
        <div className="col-lg-9 col-md-12">
          <div className="title">
            <h3>{artical.fullyTitle}</h3>
          </div>
          <div className="autors">
            <h3>Authors</h3>
            <h5>
              {authors.map(
                (author) => author.firstName + " " + author.lastName + " "
              )}
            </h5>
          </div>
          <div className="positions">{artical.postition}</div>
          <div className="abstract">
            <h3>Abstract</h3>
            <p>{artical.abstract}</p>
          </div>
          <div className="keyword">
            <h3>Keywords</h3>
            <p>{artical.keywords}</p>
          </div>
        </div>
      }
      <div className="col-lg-3">
        <div class="panel panel-default my_panel-default panel-shadow">
          <div class="panel-heading">
            <b class="panel-title">
              <i class="fa fa-file"></i>
              Files
            </b>
          </div>
          <div class="panel-body ">
            {/* <i class=" absIcon fa-solid fa-file-code"></i>XML
                <hr/> */}
            <Link
              className="tag_a"
              target="_blank"
              to={`https://eissa-group.com/${artical.fileLink}`}
            >
              <i class=" absIcon fa-solid fa-file-pdf"></i>PDF
            </Link>
          </div>
        </div>
        <div class="panel panel-default my_panel-default panel-shadow">
          <div class="panel-heading">
            <b class="panel-title">Form</b>
          </div>
          <div class="panel-body ">
            <button
              className="btn btn-danger my-1"
              onClick={() => {
                setStatus("rejected");
                setReviewer_comment("");
              }}
            >
              Reject
            </button>
            <button
              className="btn btn-secondary my-1 mx-2"
              onClick={() => {
                setStatus("resubmit");
                setReviewer_comment("");
              }}
            >
              Resubmit
            </button>
            
              <button
                className="btn btn-success my-1 mx-2"
                onClick={() => {
                  assignReviewer();
                }}
              >
                Accept
              </button>
            
              <button
                className="btn btn-success my-1"
                onClick={() => {
                  setStatus("underReview");
                }}
              >
                Assign
              </button>

            {error && <Alert className="alert-danger">{error}</Alert>}
            {status == "underReview" ? (
              <>
                {userInfo.role == "managing_editor" ||
                userInfo.role == "assistant_editor" ? (
                  <Form.Select
                    className="my-3"
                    onChange={(e) => setAss_editor(e.target.value)}
                    aria-label="Default select example"
                  >
                    {userInfo.role == "managing_editor" && (
                      <>
                        <option selected disabled>
                          --Select--
                        </option>
                        {users
                          .filter((user) => user.role == "assistant_editor")
                          .map((user) => (
                            <option value={user.id}>
                              {user.firstName + " " + user.lastName}
                            </option>
                          ))}
                      </>
                    )}
                    {userInfo.role == "assistant_editor" && (
                      <>
                        <option selected disabled>
                          --Select--
                        </option>
                        {users
                          .filter((user) => user.role == "Editor")
                          .map((user) => (
                            <option value={user.id}>
                              {user.firstName + " " + user.lastName}
                            </option>
                          ))}
                      </>
                    )}
                  </Form.Select>
                ) : (
                  <>
                    {userInfo.role == "Editor" && (
                      <>
                        <Form.Select
                          className="my-3"
                          onChange={(e) => setReviewer1(e.target.value)}
                          aria-label="Default select example"
                        >
                          <option selected disabled>
                            --Select--
                          </option>
                          {users
                            .filter((user) => user.role == "Reviewer")
                            .map((user) => (
                              <option value={user.id}>
                                {user.firstName + " " + user.lastName}
                              </option>
                            ))}
                        </Form.Select>
                        <Form.Select
                          className="my-3"
                          onChange={(e) => setReviewer2(e.target.value)}
                          aria-label="Default select example"
                        >
                          <option selected disabled>
                            --Select--
                          </option>
                          {users
                            .filter((user) => user.role == "Reviewer")
                            .map((user) => (
                              <option value={user.id}>
                                {user.firstName + " " + user.lastName}
                              </option>
                            ))}
                        </Form.Select>
                        <Form.Select
                          className="my-3"
                          onChange={(e) => setReviewer3(e.target.value)}
                          aria-label="Default select example"
                        >
                          <option selected disabled>
                            --Select--
                          </option>
                          {users
                            .filter((user) => user.role == "Reviewer")
                            .map((user) => (
                              <option value={user.id}>
                                {user.firstName + " " + user.lastName}
                              </option>
                            ))}
                        </Form.Select>
                      </>
                    )}
                    {userInfo.role == "Reviewer" && <></>}
                  </>
                )}
                {userInfo.role != "Reviewer" && (
                  <button
                    className="btn btn-primary"
                    onClick={() => handleSubmit(artical.id)}
                  >
                    Submit
                  </button>
                )}
              </>
            ) : (
              <>
                <FloatingLabel
                  className="my-3"
                  controlId="floatingTextarea2"
                  label="Comments"
                >
                  <Form.Control
                    onChange={(e) => setReviewer_comment(e.target.value)}
                    value={reviewer_comment}
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
                <button
                  className="btn btn-primary"
                  onClick={() => handleSubmit(artical.id)}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
