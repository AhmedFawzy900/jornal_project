import img1 from "../images/card1.jpg";
import img2 from "../images/card2.jpg";
import img3 from "../images/card3.jpg";
import img4 from "../images/card4.jpg";
import img5 from "../images/card5.jpg";
import img6 from "../images/card6.jpg";
import img7 from "../images/card7.png";
import img8 from "../images/card8.png";
import img9 from "../images/card9.png";
import img10 from "../images/card10.jpg";

export default function EditorialJor() {
  return (
    <div className="container">
      <div className="about-title">Editorial Board</div>
      {/* start cards */}
      <div className="row card-style my-4">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <div
            className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img src={img1} className="w-100" alt="Blue Jeans Jacket" />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <p className="role_name">
            <strong>Editor-in-Chief</strong>
          </p>
          <hr />
          <p className="sub-title d-flex align-items-center">
            <span className="editor-icon">
              <i class="fa-solid fa-user"></i>
            </span>
            <strong>Mohamed Refaat Mahran</strong>
          </p>
          <p className="card-text"><i>Organic Chemistry</i> </p>
          <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i>National Research Centre</i></p>
          <p className="card-text"><i class="editor-icon fa-solid fa-envelope"></i>mrh_mahran@yahoo.com</p>
          <p className="card-text"><i class="editor-icon fa-solid fa-phone"></i>01111273794</p>
        </div>
      </div>
      {/* end cards */}
      {/* start cards */}
      <div className="row card-style my-4">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <div
            className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img src={img2} className="w-100" alt="Blue Jeans Jacket" />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <p className="role_name">
            <strong>Co-Editor-in-Chief</strong>
          </p>
          <hr />
          <p className="sub-title d-flex align-items-center">
            <span className="editor-icon">
              <i class="fa-solid fa-user"></i>
            </span>
            <strong>Said Fatouh Hamed</strong>
          </p>
          <p className="card-text"><i>Oils and Fats</i> </p>
          <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i>National Research Centre</i></p>
          <p className="card-text"><i class="editor-icon fa-solid fa-envelope"></i> saidfatouhhamed123@gmail.com</p>
          <p className="card-text"><i class="editor-icon fa-solid fa-phone"></i>01021489155</p>
        </div>
      </div>
      {/* end cards */}
      {/* start cards */}
      <div className="row card-style my-4">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <div
            className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img src={img3} className="w-100" alt="Blue Jeans Jacket" />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <hr />
          <p className="sub-title d-flex align-items-center">
            <span className="editor-icon">
              <i class="fa-solid fa-user"></i>
            </span>
            <strong>Hassan Abdel-Gawad Hassan</strong>
          </p>
          <p className="card-text"><i>Organic Chemistry</i> </p>
          <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i>National Research Centre</i></p>
          <p className="card-text"><i class="editor-icon fa-solid fa-envelope"></i> abdelgawadhassan@hotmail.com</p>
          <p className="card-text"><i class="editor-icon fa-solid fa-phone"></i> 01063157828</p>
        </div>
      </div>
      {/* end cards */}
      {/* start cards */}
      <div className="row card-style my-4">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <div
            className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img src={img4} className="w-100" alt="Blue Jeans Jacket" />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
          
          <hr />
          <p className="sub-title d-flex align-items-center">
            <span className="editor-icon">
              <i class="fa-solid fa-user"></i>
            </span>
            <strong>Morsy Ahmed El-Apasery</strong>
          </p>
          <p className="card-text"><i>Textile Chemistry</i> </p>
          <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i>Synthetic Organic Chemistry
            Dyeing, Printing and Textile Auxiliaries Department, NRC.</i></p>
          <p className="card-text"><i class="editor-icon fa-solid fa-envelope"></i> elapaserym@yahoo.com</p>
          <p className="card-text"><i class="editor-icon fa-solid fa-phone"></i>01007894172</p>
        </div>
      </div>
      {/* end cards */}
      {/* start cards */}
      <div className="row card-style my-4">
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
          <div
            className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img src={img5} className="w-100" alt="Blue Jeans Jacket" />
            <a href="#!">
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
          
          <hr />
          <p className="sub-title d-flex align-items-center">
            <span className="editor-icon">
              <i class="fa-solid fa-user"></i>
            </span>
            <strong>Ewies Fawzy Ewies</strong>
          </p>
          <p className="card-text"><i>Organic Chemistry</i> </p>
          <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i>Synthetic Organic Chemistry
                Organometallic and organometalloid Chemistry Department, NRC.</i></p>
          <p className="card-text"><i class="editor-icon fa-solid fa-envelope"></i> ef.ewies@nrc.sci.eg</p>
          <p className="card-text"><i class="editor-icon fa-solid fa-phone"></i>01009957717</p>
        </div>
      </div>
      {/* end cards */}
      {/* start cards */}
        <div className="row card-style my-4">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <div
                className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
                data-mdb-ripple-color="light"
                >
                <img src={img6} className="w-100" alt="Blue Jeans Jacket" />
                <a href="#!">
                    <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                </a>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <p className="role_name">
                <strong>Editor</strong>
                </p>
                <hr />
                <p className="sub-title d-flex align-items-center">
                <span className="editor-icon">
                    <i class="fa-solid fa-user"></i>
                </span>
                <strong>Elmorsy Khaled</strong>
                </p>
                <p className="card-text"><i>Analytical Chemistry</i> </p>
                <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i>National Research Centre</i></p>
                <p className="card-text"><i class="editor-icon fa-solid fa-envelope"></i>elmorsykhaled@yahoo.com</p>
            </div>
        </div>
      {/* end cards */}
      {/* start cards */}
        <div className="row card-style my-4">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <div
                className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
                data-mdb-ripple-color="light"
                >
                <img src={img7} className="w-100" alt="Blue Jeans Jacket" />
                <a href="#!">
                    <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                </a>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <hr />
                <p className="sub-title d-flex align-items-center">
                <span className="editor-icon">
                    <i class="fa-solid fa-user"></i>
                </span>
                <strong>Ing. Milan Sýs</strong>
                </p>
                <p className="card-text"><i>Analytical Chemistry</i> </p>
                <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i> Faculty of Chemical Technology – University of Pardubice –Czech Republic</i></p>
                <p className="card-text"><i class="editor-icon fa-solid fa-envelope"></i> milan.sysupc@e.cz</p>
            </div>
        </div>
      {/* end cards */}
      {/* start cards */}
        <div className="row card-style my-4">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <div
                className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
                data-mdb-ripple-color="light"
                >
                <img src={img8} className="w-100" alt="Blue Jeans Jacket" />
                <a href="#!">
                    <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                </a>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <hr />
                <p className="sub-title d-flex align-items-center">
                <span className="editor-icon">
                    <i class="fa-solid fa-user"></i>
                </span>
                <strong>Wael Ibrahim Mortada</strong>
                </p>
                <p className="card-text"><i>Analytical Chemistry</i> </p>
                <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i>Mansoura University</i></p>
                <p className="card-text"><i class="editor-icon fa-solid fa-envelope"></i>  w.mortada@mans.edu.eg</p>
            </div>
        </div>
      {/* end cards */}
      {/* start cards */}
        <div className="row card-style my-4">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <div
                className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
                data-mdb-ripple-color="light"
                >
                <img src={img9} className="w-100" alt="Blue Jeans Jacket" />
                <a href="#!">
                    <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                </a>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <hr />
                <p className="sub-title d-flex align-items-center">
                <span className="editor-icon">
                    <i class="fa-solid fa-user"></i>
                </span>
                <strong>Shaymaa Abdalla Ismail</strong>
                </p>
                <p className="card-text"><i>Microbial Chemistry</i> </p>
                <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i>National Research Center</i></p>
                <p className="card-text"><i class="editor-icon fa-solid fa-envelope"></i>shaymaaabdallaismail@gmail.com</p>
            </div>
        </div>
      {/* end cards */}
      {/* start cards */}
        <div className="row card-style my-4">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <div
                className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
                data-mdb-ripple-color="light"
                >
                <img src={img10} className="w-100" alt="Blue Jeans Jacket" />
                <a href="#!">
                    <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                    ></div>
                </a>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <hr />
                <p className="sub-title d-flex align-items-center">
                <span className="editor-icon">
                    <i class="fa-solid fa-user"></i>
                </span>
                <strong>Sahar Awad Allah Hussein</strong>
                </p>
                <p className="card-text"><i>National Research Center </i> </p>
                <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i>National Research Center</i></p>
                <p className="card-text"><i class="editor-icon fa-solid fa-envelope"></i>drsahar90@yahoo.com</p>
            </div>
        </div>
      {/* end cards */}
    </div>
  );
}
