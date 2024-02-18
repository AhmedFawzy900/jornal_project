import { Link } from "react-router-dom";

export default function AuthorTemplate() {
  //  const downloadFile = () => {
  //           const url ="https://drive.google.com/file/d/10Oyph9tZOcX9eQ7H5fy_qwSWjIGH1ohb/view?usp=sharing";
  //           link.href = url;
  //           link.setAttribute('download', 'filename.pdf'); // Change the filename as desired
  //           document.body.appendChild(link);
  //           link.click();
  //     };

  return (
    <div className="container author-template">
      <div className="">
        <h3 className="about-title">Author Template</h3>
      </div>
      <div>

        <h4>Save time with a template</h4>
        <p className="about-p">
            You will need to format your article ready for submission. To make this
            easier, a Word template is available, ready for you to download and
            apply to your document. You can find a link to this.
        </p>
        <h3>Format templates to download</h3>
        <p>
            <strong>
            &nbsp;Please download the author template from&nbsp;
            <Link target="_blank" to={"https://docs.google.com/document/d/1o2Xi2klNniCXGhxqn5ilkGrTh7knykok/edit?rtpof=true&sd=true"} className="download-button">here</Link>, and upload it
            during the submission as this is a mandatory item.
            </strong>
        </p>
        <p>
        </p>
      </div>
    </div>
  );
}
