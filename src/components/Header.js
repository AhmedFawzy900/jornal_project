import headImg from "../images/headerimg.png";
import "../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function Header() {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : "";

  const logout = () => {
    localStorage.removeItem("userInfo");
    window.location.reload();
  }

  return (
    <div className="">
      <img className="headImg w-100" src={headImg} alt="image" />
      <nav id="nav" className="navbar navbar-expand-lg bg-body-tertiary">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="nav-content">
          <div
            className="nav-content collapse navbar-collapse"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav list">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to={"/home"}>
                  Home
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  journal info
                </a>
                <ul className="dropdown-menu dropmen">
                  <li>
                    <Link class="dropdown-item" to={"/jornalInfo/about"}>
                      About journal
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/jornalInfo/aims"}>
                      visions
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/jornalInfo/editorial"}>
                      Editorial Board
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to={"/jornalInfo/ethics"}>
                      publication ethics
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/authorTemplate"}>
                  Author template
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/cta"}>
                  CTA
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/gidedForAuthor"}>
                  Guide for Author
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={userInfo ? "/research" : "/login"}>
                  Submit manuscript
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Browse
                </a>
                <ul className="dropdown-menu dropmen">
                  <li>
                    <Link class="dropdown-item" to={"/browse/currentIssue"}>
                      Current issue
                    </Link>
                  </li>
                  {/* <li>
                    <Link class="dropdown-item" to={"#"}>
                      By issue
                    </Link>
                  </li> */}
                  {/* <li>
                    <a class="dropdown-item" href="#">
                      By subject
                    </a>
                  </li> */}
                  {/* <li>
                    <a class="dropdown-item" href="#">
                      {" "}
                      Author index
                    </a>
                  </li> */}
                  {/* <li>
                    <a class="dropdown-item" href="#">
                      keyword index
                    </a>
                  </li> */}
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/contactUs"}>
                  contact us
                </Link>
              </li>
              {/* add login logic */}
              {userInfo ? (
                <>
                    <li class="nav-item">
                    <Link class="nav-link" to={"/home"}>
                        {userInfo.username}
                    </Link>
                    </li>
                    <li class="nav-item">
                    <button onClick={logout} className="logout nav-link">
                        logout
                    </button>
                    </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/login"}>
                      login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/register"}>
                      register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
