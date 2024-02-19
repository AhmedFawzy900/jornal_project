import Articls from "../components/Aritcals";
import CollapseList from "../components/CollapseList";
import CoverImg from '../images/cover-2.png';

export default function CurrentIssue() {
  return (
    <div className="row">
        <div className="left-side col-lg-3 col-md-4 col-sm-12">
        <div className="my-2">
            <img src={CoverImg} className="w-100" alt="cover" />
        </div>

        <div className="card">
            <div className="card-header py-3">
            <h5 className="mb-0">Articles in Press</h5>
            </div>
            <div className="card-body">
            <h5 className="mb-0">Current Issue</h5>
            </div>
        </div>
        {/* drop down card */}
        <CollapseList />
        {/* drop down card */}

        {/* end main div */}
        </div>
        <div className="col-lg-8 col-md-7 col-sm-12">
             {/* main subjects section */}
        <div>
            <b class="page-header  margin-top-50">
                <i class="fa-solid fa-layer-group"></i>
                <span class="" >
                    Current Issue:  
                    <span>Volume 27, Issue 1,December 2023</span>
                    &nbsp;
                    <a className="file-icon" href="#" title="XML" target="_blank"> 
                        <i class="fa-solid fa-file-pen"></i>
                    </a>
                </span>
            </b>
            <h4></h4>
        </div>
                            
        <div class="panel panel-default my_panel-default panel-shadow">
        <div class="panel-heading">
          <b class="panel-title">
            <i class="fa fa-file"></i>
            Main Subjects
          </b>
        </div>
        <div class="panel-body">
          <div>
            <i class="fa-regular fa-file-lines"></i>
            <a href="#" class="tag_a btn-link">
              {" "}
              Mathematics <span class="badge"></span>
            </a>
          </div>
          <div>
            <i class="fa-regular fa-file-lines"></i>
            <a href="#" class="tag_a btn-link">
              {" "}
              Computer Science <span class="badge"></span>
            </a>
          </div>
          <div>
            <i class="fa-regular fa-file-lines"></i>
            <a href="#" class="tag_a btn-link">
              {" "}
              Physics<span class="badge"></span>
            </a>
          </div>
          <div>
            <i class="fa-regular fa-file-lines"></i>
            <a href="#" class="tag_a btn-link">
              {" "}
              Chemistry<span class="badge"></span>
            </a>
          </div>
          <div>
            <i class="fa-regular fa-file-lines"></i>
            <a href="#" class="tag_a btn-link">
              {" "}
              Botany<span class="badge"></span>
            </a>
          </div>
          <div>
            <i class="fa-regular fa-file-lines"></i>
            <a href="#" class="tag_a btn-link">
              {" "}
              Zoology<span class="badge"></span>
            </a>
          </div>
          <div>
            <i class="fa-regular fa-file-lines"></i>
            <a href="#" class="tag_a btn-link">
              {" "}
              Geology<span class="badge"></span>
            </a>
          </div>
        </div>
      </div>
        {/*end main subjects section */}


        {/* Aritcals */}
        <Articls/>

        </div>
    </div>
  );
}
