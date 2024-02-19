import Articls from "./Aritcals";

export default function MiddlePart() {
  return (
    <div className="middle-part col-lg-5 col-md-6 col-sm-12">
      <h5 className="my-2 text-center">Scientific Journal of Faculty of Science</h5>
      {/* <h5 className="text-center" >( Menoufia University )</h5> */}
      <p className="text-justify">
        The Faculty of Science at Menoufia University publishes a scientific
        journal periodically with the aim of disseminating scientific research
        for faculty members and researchers at similar colleges, and various
        research centers within and outside Egypt in the field of basic
        sciences. It is a peer-reviewed journal for the publication of
        scientific researches, according to methodological standards and
        academic research ethics, aiming to contribute to enriching all fields
        of science with accuracy and integrity.
      </p>

      {/* most viewed articals section */}
      {/* <div class="panel panel-default my_panel-default  panel-shadow">
					<div class="panel-heading">
						<b class="panel-title"><i class="fa fa-file"></i> Most Visited Articles</b>
                    </div>
					<div class="panel-body">
                        <div> 
                        	<i class="fa-regular fa-newspaper"></i>
                         	<a href="#" class="tag_a btn-link" > Improved Manual Dishwashing Liquid Detergent Compared to that Produced by Multinational Companies in Egyptian Market</a>
                         </div>
                        <div> 
                        	<i class="fa-regular fa-newspaper"></i>
                         	<a href="#" class="tag_a btn-link" > Groundwater in Egypt Issue: Resources, Location, Amount, Contamination, Protection, Renewal, Future Overview</a>
                        </div>
                        <div> 
                        	<i class="fa-regular fa-newspaper"></i>
                         	<a href="#" class="tag_a btn-link" > Modeling The Effect of Functional Groups on The Electronic Properties of Benzene; Pyridine and Pyrimidine</a>
                        </div>
                        <div> 
                        	<i class="fa-regular fa-newspaper"></i>
                         	<a href="#" class="tag_a btn-link" > Special Issue Editorial Ahmed Refaat and Medhat A. Ibrahim</a>
                        </div>
                        <div> 
                        	<i class="fa fa-newspaper-o" aria-hidden="true"></i>
                         	<a href="#" class="tag_a btn-link" > Sulfonamides: Synthesis and the recent applications in Medicinal Chemistry</a>
                        </div>
                    </div>
        </div> */}
      {/*end most viewed articals section */}
      {/* main subjects section */}
      <div className="my-1">
        <b class="page-header  margin-top-50">
          <i class="fa-solid fa-layer-group"></i>
          <span class="">
            Current Issue:
            <span>Volume 27, Issue 1, December 2023</span>
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
      <Articls />
      {/*end Aritcals */}

      {/* end main section */}
    </div>
  );
}
