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
                    <a class="block pub_owner tag_a" href="#" target="_blank"> Menoufia University,Faculty Science</a>   		
                </div>
		        <hr/>
                <strong class="block margin-top-10"><i class="fa-solid fa-cube"></i> Editor-in-Chief</strong>
                <div >
                    <a class="edbb_2 block pub_owner tag_a" href="#">Prof. Hassan Eliwa</a>
                </div>
	            <strong class="block margin-top-10"><i class="fa-solid fa-cube"></i> Managing Editor</strong>
                <div>
                    <a class="edbb_31 block pub_owner tag_a" href="#">Dr. Khaled Elgameel</a>
                </div>
	            <strong class="block margin-top-10"><i class="fa-solid fa-cube"></i> Assistant Editor</strong>
                <div>
                    <a class="edbb_4 block pub_owner tag_a" href="#">Dr. Ali Fathi Abu-Bakr</a>
                </div>
                <div>
                    <a class="edbb_4 block pub_owner tag_a" href="#">Dr. Dalia Fahmy Slima</a>
                </div>
                <div>
                    <a class="edbb_4 block pub_owner tag_a" href="#">Dr. Samah El-Ghlban</a>
                </div>
                <div>
                    <a class="edbb_4 block pub_owner tag_a" href="#">Dr. Marwa Atalla</a>
                </div>
                <div>
                    <a class="edbb_4 block pub_owner tag_a" href="#">Dr. Abeer Nowaya</a>
                </div>
                <div>
                    <a class="edbb_4 block pub_owner tag_a" href="#">Dr. Hekmat Fawzy</a>
                </div>
	            <hr/>		        
                <div class="row margin-bottom-10" id="dv_ju_frq">
                    <strong class="col">
                     <i class="fa-solid fa-cube"></i> Frequency 
                    </strong>
                    <div class="col" >Monthly</div>
                </div>
                <div class="row">
                    <strong class="col"><i class="fa-solid fa-cube"></i> Print ISSN </strong>
                    <div class="col" dir="ltr">
                        <a className="tag_a m-0" href="#" target="_blank">1110-2195</a>
                    </div>
                </div>
                <div class="row">
                    <strong class="col"><i class="fa-solid fa-cube"></i> Online ISSN </strong>
                    <div class="col" dir="ltr">
                        {/* <a href="#" className="tag_a m-0" target="_blank">2357-0245</a> */}
                    </div>
                </div>
            </div>
            {/*end panal body */}
            </div>
            {/* search part */}
            <Search/>
            {/* end search */}

            {/* abstracting section */}
            {/* <Abstract/> */}
            {/* end abstracting section */}

            {/* start announmet */}
            
            {/* <div class="mb-4"> 
                <div>
                    <a href="#" target="_blank" > 
                        <img class="style_ads" src={annImage} data-container="body" data-toggle="popover" data-trigger="hover" data-placement="top" data-content="" title="Announcement" />
                    </a>
                </div>
            </div>	 */}
            {/* start announmet */}
        </div>
    );
}