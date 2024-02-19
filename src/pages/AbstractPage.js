import { useParams } from "react-router";
import abstracts from "../data/abstract.json";
import articleData from '../data/articals.json';

import img from "../images/cover-2.png";
import { Link} from "react-router-dom";


export default function AbstractPage() {
  const id = useParams("id");
  const itemMatched = abstracts.abstract.find((e) => e.id == id.id);
  const pdfLinks = articleData.articals.find((e)=> e.id == id.id);

  const goBack = () => {
    window.history.back();
  };
  return (
    <div className=" row abstracPage">
       {/* back button */}
       <button className="back-btn" onClick={goBack}><i class="fa-solid fa-arrow-left"></i>back</button>
      {itemMatched && (
        <div className="col-lg-9 col-md-12">
          <div className="title">
            <h3>{itemMatched.title}</h3>
          </div>
          <div className="autors">
            <h3>Authors</h3>
            <h5>{itemMatched.authors.map((e) =>(
              <>
                <span>{e.text}</span> 
                <sup className="mx-1">{e.num}</sup>
                <span>{!e.last && " , "}</span>
                <span></span>
              </>
            ))}</h5>
          </div>
          <div className="positions">
            {itemMatched.postitions.map((e)=>(
            <>
                <sup>{e.num}</sup>
                <span>{e.text}</span>
                <br/>
            </>
            ))}
          </div>
          <div className="abstract">
            <h3>Abstract</h3>
            <p>{itemMatched.abstract}</p>
          </div>
          <div className="keyword">
            <h3>Keywords</h3>
            <p>{itemMatched.keywords}</p>
          </div>
        </div>
      )}
      <div className="col-lg-3">
        <div class="panel panel-default my_panel-default ">
          <div class="panel-body row">
            <div className="col-md-6">
              <img src={img} className="w-100" alt="photo" />
            </div>
            <div className="col-md-6">
              <h4 className="card-text">Volume 27, Issue 1 - Serial December 2023 </h4>
            </div>
          </div>
        </div>
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
                <Link className="tag_a" target="_blank" to={pdfLinks.pdf_path}>
                  <i class=" absIcon fa-solid fa-file-pdf"></i>PDF
                </Link>
            </div>
        </div>
        <div class="panel panel-default my_panel-default panel-shadow">
            <div class="panel-heading">
                <b class="panel-title">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                     History
                </b>
            </div>
        </div>
        <div class="panel panel-default my_panel-default panel-shadow">
            <div class="panel-heading">
                <b class="panel-title">
                    <i class="fa-solid fa-share-from-square"></i>
                     Share
                </b>
            </div>
        </div>
        <div class="panel panel-default my_panel-default panel-shadow">
            <div class="panel-heading">
                <b class="panel-title">
                     <i class="fa-solid fa-arrow-up-right-from-square"></i>
                     How to site
                </b>
            </div>
        </div>
        <div class="panel panel-default my_panel-default panel-shadow">
            <div class="panel-heading">
                <b class="panel-title">
                    <i class="fa-solid fa-chart-simple"></i>
                     Statics
                </b>
            </div>
                <div className="panel-body">
                    <h6 className="tag_a">Article View: 0</h6>
                    <hr/>
                    <h6 className="tag_a">PDF Download: 0</h6>
                </div>
        </div>
      </div>
    </div>
  );
}
