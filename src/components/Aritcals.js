import { Link } from "react-router-dom";
import PDFViewer from "./PDFViewer";
import articleData from '../data/articals.json';
export default function Articls(){
  const downloadFile = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'filename.pdf'); // Change the filename as desired
    document.body.appendChild(link);
    link.click();
};
  return(
    <div>
      {
        articleData.articals.map((item)=>{
          return(
            <div class='artical'>    
                <h5 class="margin-bottom-6 list-article-title ltr">
                    <a class="tag_a artical-title btn-link" href="#">{item.title}</a>
                </h5>
                <p class="margin-bottom-3">Pages <span >1-6</span></p>   
                <p class="margin-bottom-3 ltr" id="ar_doi"><span className="dio">dio</span> <span dir="ltr"><Link target="_blank" to={`/abstract/${item.id}`} className="btn-link" >10.21608/ejchem.2023.246109.8810</Link></span></p>
                <p class="margin-bottom-3 ltr" >{item.authors}</p>
                <ul class="list-inline size-12 margin-top-10 margin-bottom-3 size-14">
                <li ><a href="#" > View Article</a></li>
                <li><Link target="_blank" to={item.pdf_path} className="download-button" ><i class="fa-regular fa-file-pdf text-red"></i> PDF 1.6 M</Link></li>
                </ul>
                <hr/>
            </div>  
          )
        })
      }
                   
    </div>
  );
}