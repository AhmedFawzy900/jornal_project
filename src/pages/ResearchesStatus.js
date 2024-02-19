import { Link } from "react-router-dom";

export default function ResearchesStatus() {
  return (
    <div className="">
      <div className="col-lg-6 my-3">
        <ul className="card list-unstyled mb-3">
          <li className="card-header">
            New Manuscripts
          </li>
          <li className="card-body ">
                <ul className="list-unstyled new_research">
                    <li><Link className="tag_a" to={"/submitManuscript"}>Submit a New Manuscript</Link> <span className="badge">0</span></li>
                    <li><Link className="tag_a" to={"#"}>Incomplete Submissions</Link> <span className="badge">0</span></li>
                    <li><Link className="tag_a" to={"#"}>Submissions Sent Back to Author </Link> <span className="badge">0</span></li>
                    <li><Link className="tag_a" to={"#"}>Submissions Being Processed </Link> <span className="badge">0</span></li>
                    <li><Link className="tag_a" to={"#"}>Submissions you have contributed as co-author  </Link> <span className="badge">0</span></li>
                </ul>
          </li>
        </ul>
        <ul className="card list-unstyled mb-3">
          <li className="card-header">
          Submissions Needing Revision
          </li>
          <li className="card-body ">
                <ul className="list-unstyled new_research">
                    <li><Link className="tag_a" to={"#"}>Submissions Needing Revision </Link> <span className="badge">0</span></li>
                    <li><Link className="tag_a" to={"#"}>Revisions Being Processed</Link> <span className="badge">0</span></li>
                    <li><Link className="tag_a" to={"#"}>Declined Revisions (Author Decided to Cancel the Whole Submission) </Link> <span className="badge">0</span></li>
                </ul>
          </li>
        </ul>
        <ul className="card list-unstyled mb-3">
          <li className="card-header">
              Decisions
          </li>
          <li className="card-body ">
                <ul className="list-unstyled new_research">
                    <li><Link className="tag_a" to={"#"}>Galley Proof</Link> <span className="badge">0</span></li>
                    <li><Link className="tag_a" to={"#"}>Submissions with a Decision </Link> <span className="badge">0</span></li>
                    
                </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
