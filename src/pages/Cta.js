import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import { Link } from "react-router-dom";
const Cta = () => {
  const pdfRef = useRef();
  const downloadFile = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'CTA_Template.docx');
    document.body.appendChild(link);
    link.click();
  };
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jspdf("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      console.log(pdfWidth);
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = 10;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("CTA Template.pdf");
    });
  };
  return (
    <div className="mt-5 container mx-6">
      <div ref={pdfRef}>
        <div class="heading-title heading-dotted">
          <h3>Copyright Transfer&nbsp;Agreement (CTA)</h3>
        </div>
        <div className="row cta container">
          <div>
            <p className="about-p">
              Please print the Copyright Transfer Agreement (CTA) that is
              present 
             {" "}<Link className=" text-decoration-underline" target="_blank" to={"https://drive.google.com/file/d/13WfuJ_Re8hIz58OgecrTT_iu6fjcpNUK/view?usp=drive_link"}>here</Link>{" "}
              , complete and sign it from all authors’ of the article, scan it
              and upload it to the journal website.
            </p>
            {/* <p>
              <strong>Copyright Transfer Agreement</strong>
            </p>
            <p>
              Contributors&rsquo; form&nbsp;
              <strong>
                <em>
                  (to be modified as applicable and one signed copy attached
                  with the manuscript)
                </em>
              </strong>
            </p>
            <p>
              <strong>Journal Title:</strong>
              &nbsp;_____________________________
            </p>
            <p>
              <strong>Manuscript Title:</strong>
              &nbsp;_____________________________
            </p>
            <p>
              <strong>Manuscript Number:</strong>
              &nbsp;____________________________
            </p>
            <p>&nbsp;</p>
            <p className="my-5">
              I/we certify that I/we have participated sufficiently in the
              intellectual content, conception and design of this work or the
              analysis and interpretation of the data (when applicable), as well
              as the writing of the manuscript, to take public responsibility
              for it and have agreed to have my/our name listed as a
              contributor. I/we believe the manuscript represents valid work.
              Each author confirms they meet the criteria for authorship as
              established by the ICMJE. Neither this manuscript nor one with
              substantially similar content under my/our authorship has been
              published or is being considered for publication elsewhere, except
              as described in the covering letter. I/we certify that all the
              data collected during the study is presented in this manuscript
              and no data from the study has been or will be published
              separately. I/we attest that, if requested by the editors, I/we
              will provide the data/information or will cooperate fully in
              obtaining and providing the data/information on which the
              manuscript is based, for examination by the editors or their
              assignees. Financial interests, direct or indirect, that exist or
              may be perceived to exist for individual contributors in
              connection with the content of this paper have been disclosed in
              the cover letter. Sources of outside support of the project are
              named in the cover letter.
            </p>
            <p className="my-5">
              I/We hereby transfer(s), assign(s), or otherwise convey(s) all
              copyright ownership, including any and all rights incidental
              thereto, exclusively to the Journal, in the event that such work
              is published by the Journal. The Journal shall own the work,
              including 1) copyright; 2) the right to grant permission to
              republish the article in whole or in part, with or without fee; 3)
              the right to produce preprints or reprints and translate into
              languages other than English for sale or free distribution; and 4)
              the right to republish the work in a collection of articles in any
              other mechanical or electronic format.
            </p>
            <p className="my-5">
              We give the rights to the corresponding author to make necessary
              changes as per the request of the journal, do the rest of the
              correspondence on our behalf and he/she will act as the guarantor
              for the manuscript on our behalf.
            </p>
            <p className="my-5">
              All persons who have made substantial contributions to the work
              reported in the manuscript, but who are not contributors, are
              named in the Acknowledgment and have given me/us their written
              permission to be named. If I/we do not include an Acknowledgment
              that means I/we have not received substantial contributions from
              non-contributors and no contributor has been omitted.
            </p>
            <p>
              <strong>&nbsp;</strong>
            </p>
            <p>
              <strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Name
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Signature&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Date signed
              </strong>
            </p>
            <p>
              1
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
              &mdash;&mdash;&mdash;&mdash;&mdash;
            </p>
            <p>
              2
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
              &mdash;&mdash;&mdash;&mdash;&mdash;
            </p>
            <p>
              3
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
              &mdash;&mdash;&mdash;&mdash;&mdash;&nbsp;&nbsp;
            </p>
            <p>
              4
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
              &mdash;&mdash;&mdash;&mdash;&mdash;&nbsp;&nbsp;
            </p>
            <p>
              5
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
              &mdash;&mdash;&mdash;&mdash;&mdash;&nbsp;&nbsp;
            </p>
            <p>
              6
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;&mdash;
              &mdash;&mdash;&mdash;&mdash;&mdash;&nbsp;&nbsp;&nbsp;(Additional
              signatures may be added provided the authors meet the ICMJE
              criteria stated above)
            </p> */}
          </div>
        </div>
      </div>
      {/* <div className="mt-5 text-center">
        <button className="btn btn-primary my-3" onClick={downloadPDF}>
          Download PDF From Here
        </button>
      </div> */}
    </div>
  );
};

export default Cta;
