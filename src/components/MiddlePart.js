import Articls from "./Aritcals";

export default function MiddlePart(){
    return(
        <div className="middle-part col-lg-5 col-md-6 col-sm-12">
            <h4>Egyptian Journal of Chemistry</h4>
            <p>The Egyptian Journal of Chemistry, a multidisciplinary chemistry journal, is a peer-reviewed international journal, a free access journal and edited by the Egyptian Chemical Society and published monthly by NIDOC. The journal is indexed in Scopus and Emerging Sources Citation Index (ESCI). Manuscripts that truly define the aims of the journal include, the fields of analytical, inorganic, organic, physical chemistry, applied and materials chemistry as well as all other branches of chemistry and its sub-disciplines like pharmaceutical, textile, environmental chemistry, polymer chemistry, food chemistry, petroleum chemistry, and agricultural chemistry, material science etc.</p>
        
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
        <div>
            <b class="page-header  margin-top-50">
                <i class="fa-solid fa-layer-group"></i>
                <span class="" >
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
                    <a href="#" class="tag_a btn-link" > Environmental chemistry <span class="badge">2</span></a>
                </div>
                <div> 
                    <i class="fa-regular fa-file-lines"></i>
                    <a href="#" class="tag_a btn-link" > Food Chemistry <span class="badge">1</span></a>
                </div>
                <div> 
                    <i class="fa-regular fa-file-lines"></i>
                    <a href="#" class="tag_a btn-link" > Inorganic chemistry <span class="badge">1</span></a>
                </div>
                <div> 
                    <i class="fa-regular fa-file-lines"></i>
                    <a href="#" class="tag_a btn-link" > Organic chemistry <span class="badge">1</span></a>
                </div>
            </div>
        </div>
        {/*end main subjects section */}


        {/* Aritcals */}
        <Articls/>
        {/*end Aritcals */}


        {/* end main section */}
        </div>
    );
}