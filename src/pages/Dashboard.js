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
import Users from "../components/Users";
import ReviewArticals from "../components/ReviewArticals";
import ReviewArticalsForAss from "./ReviewArticalsForAss";
import ReviewArticalsForEditor from "./ReviewArticalsForEditor";
import ReviewArticalsForReviewer from "./ReviewArticalsForReviewer";
import ArticalsFeedbacks from "../components/ArticalsFeedbacks";
export default function SubmitReasearch() {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : navigate("/login");
    useEffect(() => {
      if (userInfo === "") {
        navigate("/login");
      }
  
  }, []);
  const [users, setUsers] = useState([]);
  const [active, setActive] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    if (userInfo) {
      if (userInfo.role === "managing_editor") {
        setContent("users");
        setActive("users");
      }else{
        setContent("review_articles");
        setActive("review_articles");
      }
    }
  }, []); 
 
  const goBack = () => {
    window.history.back();
  };
  return (
    <div className="dashboard my-3">
      <div className="container"> 
       <div className="row">
          <div class="sidebar col-lg-3 col-md-3 col-sm-12">
            <h1 className="title" >Dashboard</h1>
            {userInfo && userInfo.role === "managing_editor" && (  
              <a className={active === "users" ? "active" : ""} href="#users" onClick={(e)=>{setActive("users");setContent("users")}}>
                All Users
              </a>
            )}
            <a href="#" className={active === "review_articles" ? "active" : ""} onClick={(e)=>{setActive("review_articles");setContent("review_articles")}}>Articles To Review</a>
            {userInfo && userInfo.role !=="Reviewer" && (
              <a href="#" className={active === "articals_feedbacks" ? "active" : ""} onClick={(e)=>{setActive("articals_feedbacks");setContent("articals_feedbacks")}}>Articals Feedback</a>
            )}
          </div>
          <div class="content my-2 col-lg-9 col-md-9 col-sm-12">
            {content === "users" &&(
              <>
                <div className="d-flex justify-content-between align-items-center">
                  <h2>users</h2>
                  <button className="btn btn-primary my-2" onClick={console.log("add")} ><Link className="text-white text-decoration-none " to="/dashboard/addUser">Add User</Link></button>
                </div>
                <Users/>
              </>
            )}
            {content === "review_articles" && (
              <>
                <h2>articles</h2>
                {/* articals for manger */}
                {userInfo.role === "managing_editor" && (
                  <ReviewArticals/>
                )}
                {/* articals for associated editor */}
                {userInfo.role === "assistant_editor" && (
                  <ReviewArticalsForAss/>
                )
                }
                {userInfo.role === "Editor" && (
                  <ReviewArticalsForEditor/>
                )
                }
                {userInfo.role === "Reviewer" && (
                  <ReviewArticalsForReviewer/>
                )
                }

              </>
            )}
            {
              content === "articals_feedbacks" && (
                <>
                  <ArticalsFeedbacks/>
                </>
              )
            }
          </div>
       </div>
      </div>
    </div>
  );
}
