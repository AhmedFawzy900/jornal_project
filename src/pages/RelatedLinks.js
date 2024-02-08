import { Link } from "react-router-dom";

export default function RelatedLinks(){
    return(
        <div className="container">
            <div class="about">
                <h3 className="about-title">Related Links</h3>
            </div>
            <div className="related-links d-flex justify-content-around align-items-center">
                <h4>
                    Egyptian Chemical Society
                </h4>
                <div>
                    <span><i className=" fa-solid fa-earth-americas"></i></span>
                    <Link>http://egy-chem-soc.org/</Link>
                </div>
            </div>
        </div>
    );
}