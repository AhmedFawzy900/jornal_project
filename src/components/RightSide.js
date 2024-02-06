import Abstract from "./Abstract";
import Search from "./Search";
import annImage from '../images/ann.jpg';
export default function RightSide(){
    return(
        <div className="col-lg-3 col-md-6 col-sm-12 right-side">
            <div className="panel panel-default my_panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Publication Information</h3>
            </div>
            {/* panal body */}
            <div class="panel-body">
				<strong><i class="fa fa-cube"></i> Publisher</strong><br />
                <div>
                    <a class="block pub_owner tag_a" href="#" target="_blank">National Information and Documentation Centre (NIDOC), Academy of Scientific Research and Technology, ASRT</a>   		
                </div>
		        <hr/>
                <strong class="block margin-top-10"><i class="fa-solid fa-cube"></i> Editor-in-Chief</strong>
                <div >
                    <a class="edbb_2 block pub_owner tag_a" href="#">Mohamed Refaat Mahran</a>
                </div>
	            <strong class="block margin-top-10"><i class="fa-solid fa-cube"></i> Co-Editor-in-Chief</strong>
                <div>
                    <a class="edbb_39 block pub_owner tag_a" href="#">Said Fatouh Hamed</a>
                    <a class="edbb_39 block pub_owner tag_a" href="#">Hassan Abdel-Gawad Hassan</a>
                    <a class="edbb_39 block pub_owner tag_a" href="#">Morsy Ahmed El-Apasery</a>
                    <a class="edbb_39 block pub_owner tag_a" href="#">Ewies Fawzy Ewies</a>
                </div>
	            <strong class="block margin-top-10"><i class="fa-solid fa-cube"></i> Editor</strong>
                <div>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Elmorsy Khaled</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Ing. Milan S&yacute;s</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Wael Ibrahim Mortada</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Shaymaa Abdalla Ismail</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Sahar Awad Allah Hussein </a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Hanan Sayed Ibrahim</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Galal A. M. Nawwar</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Francis Verpoort</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Ammar Labib</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Peter Hesemann</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Mohamed Othman</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Ahmed Kamel El-Ziaty</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Abd Allh Mahrous Abd El-Hamid</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Hisham Abdallah</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">El Sayed Yakout</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Hatem A. Abdel Aziz</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Marwa El Hussieny</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Hamdy Zahran</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Samir Kamel	  	</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Amgad Al Bohy </a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Sudip Kumar Mandal</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Omnia Elsaid Shahat</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Nady A. Fathy</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Helder T. Gomes</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Salwa El-Sabbagh</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Ahmed Gomaa Hassabo</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Mona M. Amin</a>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Mahmoud Saleh  </a>
                </div>
	            <strong class="block margin-top-10"><i class="fa-solid fa-cube"></i> Assistant Editor</strong>
                <div>
                    <a class="edbb_4 block pub_owner tag_a" href="#">Wesam Said Aboul Anin</a>
                </div>
	            <hr/>		        
                <div class="row margin-bottom-10" id="dv_ju_frq">
                    <strong class="col-md-7">
                     <i class="fa-solid fa-cube"></i> Frequency 
                    </strong>
                    <div class="col-md-5" >Monthly</div>
                </div>
                <div class="row">
                    <strong class="col-md-7"><i class="fa-solid fa-cube"></i> Print ISSN </strong>
                    <div class="col-md-5" dir="ltr">
                        <a className="tag_a m-0" href="#" target="_blank">0449-2285</a>
                    </div>
                </div>
                <div class="row">
                    <strong class="col-md-7"><i class="fa-solid fa-cube"></i> Online ISSN </strong>
                    <div class="col-md-5" dir="ltr">
                        <a href="#" className="tag_a m-0" target="_blank">2357-0245</a>
                    </div>
                </div>
            </div>
            {/*end panal body */}
            </div>
            {/* search part */}
            <Search/>
            {/* end search */}

            {/* abstracting section */}
            <Abstract/>
            {/* end abstracting section */}

            {/* start announmet */}
            
            <div class="mb-4"> 
                <div>
                    <a href="#" target="_blank" > 
                        <img class="style_ads" src={annImage} data-container="body" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="" title="Announcement" />
                    </a>
                </div>
            </div>	
            {/* start announmet */}
        </div>
    );
}