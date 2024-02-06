import absImage1 from '../images/abs1.jpg';
import absImage2 from '../images/abs2.jpeg';
export default function Abstract(){
    return(
        <div class="panel panel-default my_panel-default ">
            <div class="panel-heading">
                <h3 class="panel-title">Indexing and Abstracting</h3>
            </div>
            <div class="panel-body padding-6">
                <div class="row margin-bottom-10">
                    <div class="col-md-12 text-center">
                        <a href="#"  target="_blank">
                            <img src={absImage1} class="style_ads" alt="Clarivate"/>
                        </a>
                    </div>
                </div>
                
                <div class="row margin-bottom-10">
                    <div class="col-md-12 text-center">
                        <a href="#"  target="_blank">
                            <img src={absImage2} class="style_ads" alt="Elsevier&#039;s Scopus"/>
                        </a>
                    </div>
                </div>
                
                    <div><a class="noborder tag_a" title="More" href="#"> ... </a></div>
            </div>
        </div>
    );
}