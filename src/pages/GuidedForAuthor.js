import { Link } from "react-router-dom";

export default function GuidedForAuthor() {
  return (
    <div className="container">
      <div className="guided-for-author">
        <h3 className="about-title">Guided by the Author</h3>
      </div>
      <div class="row my-4">
        <div className="gided-for-author">
          <p>
            <strong>
              The publication of an article in a peer-reviewed journal plays a
              crucial role in the development of a reliable network of
              knowledge. It is a direct reflection of the quality of work of the
              author and the institutions that support them. Peer-reviewed
              articles support and embody the scientific method. It is therefore
              important to agree upon standards of expected ethical behavior.
              Ethics topics to consider when publishing:
            </strong>
          </p>
          <ul>
            <li>
              Authorship should be limited to those who have made a significant
              contribution to the conception, design, execution, or
              interpretation of the reported study.
            </li>
            <li>
              The authors should ensure that they have written entirely original
              works, and if the authors have used the work and/or words of
              others, that this has been appropriately cited or quoted.
            </li>
            <li>
              Authors may be asked to provide the raw data in connection with a
              paper for editorial review and should be prepared to provide
              public access to such data.
            </li>
            <li>
              Authors should not in general publish manuscripts describing
              essentially the same research in more than one journal or primary
              publication.{" "}
            </li>
            <li>
              When author discovers a significant error or inaccuracy in his/her
              own published work, it is the author's obligation to promptly
              notify the journal editor or publisher and cooperate with the
              editor to retract or correct the paper.
            </li>
            <li>
              If the article is accepted for publication, after acceptance, no
              changes in authorship, the order of authors, or designation of the
              corresponding author will be permitted.
            </li>
          </ul>
          <h6 className="title">Guideline for writing articles</h6>
          <p>
            <strong>
              It is mandatory for the authors to write and prepare their
              manuscripts according to the instructions and specifications
              listed below. The length and effectiveness of the peer review
              process will largely depend upon the care used by authors in
              preparing their manuscripts. Therefore, contributors are strongly
              encouraged to read these instructions carefully before preparing a
              manuscript for submission and to check the manuscript for
              conformance before submitting it for publication.
            </strong>
            <h6 className="my-3">
              Contributors are strongly encouraged to prepare the following
              files carefully before a manuscript submission (mandatory files)
            </h6>
          </p>
          <ol>
            <li>
              Research is written using Word software and submitted in Doc
              format.{" "}
            </li>
            <li>
              Title page: it should be word format with title, author’s names
              and their affiliations together with corresponding author details
              (one page).{" "}
            </li>
            <li>
              Manuscript without names: it should be one column word format that
              has all manuscript sections without author’s names and their
              affiliations together with corresponding author details.
            </li>
            <li>
              Copyright agreement (CTA): it must be downloaded from our website,
              fill it, sign by all authors then scan then it must be uploaded as
              pdf.
            </li>
            <li>
              Author template file: it must be downloaded from our website; it
              must have your full paper with all sections from title to
              references. It contains all instructions to prepare your
              manuscript.
            </li>
            <li>Supplementary file (Optional).</li>
            <li>
              Plagiarism report (Optional): Contributors should upload
              plagiarism report with a ratio less than 25%.
            </li>
          </ol>

          <strong className="title">Paper structures </strong>
          <ul className="smaller-text">
            <li>
              <strong> </strong>
              <strong>Title page </strong>
            </li>
            <li>
              <strong> </strong>
              <strong>Abstract</strong>
            </li>
            <li>
              <strong> </strong>
              <strong>Keywords</strong>
            </li>
            <li>
              <strong> </strong>
              <strong>Introduction</strong>
            </li>
            <li>
              <strong> </strong>
              <strong>Materials and methods</strong>
            </li>
            <li>
              <strong> </strong>
              <strong>Results and discussion (combined or separate) </strong>
            </li>
            <li>
              <strong> </strong>
              <strong>Conclusion</strong>
            </li>
            <li>
              <strong> </strong>
              <strong>Conflict of interest </strong>
            </li>
            <li>
              <strong> </strong>
              <strong>Acknowledgment</strong>
            </li>
            <li>
              <strong> </strong>
              <strong>References</strong>
            </li>
          </ul>
          <strong>Each of these elements is detailed below.</strong>
          <ol>
            <li>
              Title should be short but informative, be centered, typed in Times
              New Roman 13 point and boldface. Author Name(s) should be listed
              all authors of the paper (initial(s) for first and middle name(s)
              and full family name), be centered beneath the title and typed in
              Times New Roman 12-point, non-italic and boldface. Every name is
              numbered superscript sequentially with a star symbol “*” for the
              corresponding author. Affiliation(s) should be shown below the
              author’s name(s) and typed in Times New Roman 12-point, italic and
              non-boldface. At least one e-mail address is needed for
              corresponding with the author.
            </li>
            <li>
              Abstract should be a brief summary of the significant items of the
              main paper. An abstract should not normally exceed 250 words. All
              non-standard symbols and abbreviations should be defined. The
              abstract should be typed in Times New Roman, 11-point, non-italic
              and non- boldface.
            </li>
            <li>
              Keywords: list all keywords in order of importance, separated by
              commas and should be typed in Times New Roman, 11-point,
              non-italic and non-boldface. Type the main text in 12-point Times
              New Roman, double line spacing and fully justified right and left.
              The spacing after paragraph is double. Figure and table captions
              should be 12-point Times New Roman and non-italic. Initially
              capitalize only the first word of the caption. Figure captions are
              to be below the figures and Table titles are to be fully justified
              right and left above the table.
            </li>
            <li>
              Introduction: This section should be succinct, with no
              subheadings.
            </li>
            <li>
              1. Acknowledgments: All acknowledgments (if any) should be
              included at the very end of the paper before the references and
              may include supporting grants, presentations, and so forth.
            </li>
            <li>
              Material and methods: If you need to provide additional background
              on work done by others or that you have previously published in
              order to put your work into context, be sure that this background
              is limited to what is directly relevant to your study and its
              context and questions. Do not include any of the research results
              from the current study in this section.
            </li>
            <li>
              Results and Discussion - may be combined or kept separate and may
              be further divided into subsections. This section should not
              contain technical details. Abbreviations and acronyms should be
              used sparingly and consistently. Where they first appear in the
              text, they should be defined; authors may also explain large
              numbers of abbreviations and acronyms after the conclusion part.
            </li>
            <li>
              Conclusion: This should clearly explain the main conclusions of
              the work highlighting its importance and relevance
            </li>
            <li>
              Conflict of interest : They should state there is no conflict of
              interest. It should be stated clearly before Acknowledgements
            </li>
            <li>
              References: Please ensure that every reference cited in the text
              is also present in the reference list (and vice versa). Any
              references cited in the abstract must be given in full.
              Unpublished results and personal communications are not
              recommended in the reference list but may be mentioned in the
              text. If the references are included in the reference list, they
              should follow the standard reference style of the journal and
              should include a substitution of the publication date with either
              'Unpublished results' or 'Personal communication'. Citation of a
              reference as 'in press' implies that the item has been accepted
              for publication.
            </li>
          </ol>
          <strong className="title">
            <i>Preparation of Figures and tables</i>
          </strong>
          <p className="guide-text">
              Upon submission of an article, authors are supposed to include all
              figures and tables in the word file of the manuscript. If the
              article is accepted, authors will be asked to provide the source
              files of the figures. Each figure should be supplied in a separate
              electronic file. All figures should be cited in the paper in
              consecutive order. Figures should be supplied in either vector art
              formats (Illustrator, EPS, WMF, FreeHand, CorelDraw, PowerPoint,
              Excel, etc.) or bitmap formats (Photoshop, TIFF, GIF, JPEG, etc.).
              Bitmap images should be of 300 dpi resolution at least unless the
              resolution is intentionally set to a lower level for scientific
              reasons. If a bitmap image has labels, the image and labels should
              be embedded in separate layers.
          </p>
          <p className="my-4">
            <strong className="title ">Plagiarism</strong>
          </p>
          <p className="guide-text">
              The journal has a strict policy against plagiarism. All submitted
              manuscripts are checked for plagiarism using professional
              plagiarism-checking software. Submitted manuscripts with an
              unacceptable similarity index resulting from plagiarism are
              rejected immediately.
          </p>
          <p >
            <strong className="title">Publication Ethics</strong>
          </p>
          <p className="guide-text">
              Researchers are committed to ethics of scientific research when
              preparing their manuscript/article and must keep on the good
              social values and norms in their manuscripts. Authors are
              responsible for their opinions and the validity of information and
              data contained in the manuscript to be published in the journal,
              and these opinions do not necessarily reflect that of Faculty of
              Science, Menoufia University or the journal’s editorial board. The
              decision to accept any manuscript submitted for publication
              depends on the recommendation of the editorial board and the
              reviewers. All contributions will be initially assessed by the
              editorial board for their suitability for the journal as soon as
              they are received. If the article is not suitable for publication,
              the journal will notify the correspondent author with the
              decision. Suitable articles will be sent to two reviewers for a
              blind reviewing process, and the author will be notified. The
              editorial board will do the best to complete the review process
              and make a decision in the minimal possible time.
          </p>
        </div>
      </div>
    </div>
  );
}
