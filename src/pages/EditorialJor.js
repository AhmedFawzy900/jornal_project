import img1 from "../images/card1.jpg";
import vec from "../images/vec.jpg";
import img2 from "../images/card2.jpg";
import img3 from "../images/card3.jpg";
import img4 from "../images/card4.jpg";
import img5 from "../images/card5.jpg";
import img6 from "../images/card6.jpg";
import img7 from "../images/card7.png";
import img8 from "../images/card8.png";
import img9 from "../images/card9.png";
import img10 from "../images/card10.jpg";
import editorsData from '../data/editor.json';
// import editors from '../data/editor.json';
const editors = [
  {
      "name": "Prof.Hassan Eliwa",
      "postition": "Editor-in-cheif",
      "role": "Dean of Faculty of Science, Menoufia University, Egypt",
      "phone": "",
      "email": ""
  },{
      "name":"Dr. Khaled Elgameel",
      "postition":"Manageing Editor",
      "role":"Dean of Faculty of Science, Menoufia University, Egypt",
      "phone":"+201007235039",
      "email":"khaled.elgamel@science.menofia.edu.eg"
  },{
      "name":"Dr. Ali Fathi Abu-Bakr  ",
      "postition":"Associate Editor",
      "role":"Mathematics and Computer Science Department",
      "phone":"",
      "email":""
  },{
      "name":"Dr. Dalia Fahmy Slima     ",
      "postition":"Associate Editor",
      "role":"Botany and Microbiology Department",
      "phone":"",
      "email":""
  },{
      "name":"Dr. Samah Ibrahim Mohamed El-Ghlban ",
      "postition":"Associate Editor",
      "role":"Chemistry Department",
      "phone":"",
      "email":""
  },{
      "name":"Dr. Marwa Mohammed Nabil Atalla ",
      "postition":"Associate Editor",
      "role":"Zoology Departmen",
      "phone":"",
      "email":""
  },{
      "name":"Dr. Abeer Nowaya ",
      "postition":"Associate Editor",
      "role":"Physics Department",
      "phone":"",
      "email":""
  },{
      "name":"Dr. Hekmat Fawzy ",
      "postition":"Associate Editor",
      "role":"Geology Departmen",
      "phone":"",
      "email":""
  }
];
export default function EditorialJor() {
  console.log(editors);
  return (
    <div className="container">
      <div className="about-title">Editorial Board</div>
      {/* start cards */}
      {
        editorsData.editors.map((editor)=>{
          return (
            <div className="row card-style my-4">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <div
                className="profile-img bg-image hover-overlay hover-zoom ripple rounded"
                data-mdb-ripple-color="light"
              >
                <img src={vec} className="w-100" alt="Blue Jeans Jacket" />
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
                <strong>{editor.postition}</strong>
              </p>
              <hr />
              <p className="sub-title d-flex align-items-center">
                <span className="editor-icon">
                  <i class="fa-solid fa-user"></i>
                </span>
                <strong>{editor.name}</strong>
              </p>
              <p className="card-text"><i>{editor.role}</i> </p>
              {/* <p className="card-text"><i class="editor-icon fa-solid fa-location-dot"></i><i>Facalty of science</i></p> */}
              <p className="card-text">{
                editor.phone ? <i class="editor-icon fa-solid fa-phone"></i> : ""
              } {editor.email}</p>
              <p className="card-text">
                {editor.phone ? <i class="editor-icon fa-solid fa-envelope"></i> : ""}{editor.phone}</p>
            </div>
          </div>
          )
        })
      }
    
    </div>
  );
}
