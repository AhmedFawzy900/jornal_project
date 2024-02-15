import abs1 from "../images/abs1.jpg";
import abs2 from "../images/abs2.jpeg";

export default function Abstracting() {
  return (
    <div className="container">
      {/* back button */}
      <button><i class="fa-solid fa-arrow-left"></i>back</button>
      <div class="about">
        <h3 className="about-title">Indexing and Abstracting</h3>
      </div>
      <div class="my-5 row columnize-2">
        <div class="row col-md-6 col-unbreak">
          <div class="col-md-5 mx-2">
            <img src={abs1} class="img-responsive" alt="Clarivate" />
          </div>
          <div class="col-md-6">
            <h4 class="margin-bottom-10">Clarivate</h4>
          </div>
        </div>
        <div class="row col-md-6 col-unbreak">
          <div class="col-md-5 mx-2">
              <img
                src={abs2}
                class="img-responsive w-100"
                alt="Elsevier&#039;s Scopus"
              />
          </div>
          <div class="col-md-6">
              <h4 class="margin-bottom-10">Elsevier&#039;s Scopus</h4>
            
          </div>
          <div class="clearfix"></div>
          <hr />
        </div>
      </div>
    </div>
  );
}
