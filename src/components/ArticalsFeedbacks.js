import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ArticalsFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [articals, setArticals] = useState([]);
  useEffect(() => {
    fetch("https://eissa-group.com/api/researchs").then((res) => {
      res.json().then((data) => {
        setArticals(data);
      });
    });
    getFeedbacks();
  }, []);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const getFeedbacks = () => {
    fetch("https://eissa-group.com/api/feedbacks").then((res) => {
      res.json().then((data) => {
        setFeedbacks(data);
        console.log(data);
      });
    });
  };
  return (
    <div className="container">
      <div class="articals-feedbacks">
        <h3 className="articals-feedbacks-title">Articals Feedbacks</h3>
      </div>
      <div className="overflow-auto">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {userInfo && userInfo.role === "managing_editor" && (
                <>
                  <th>Assistant Feedback</th>
                </>
              )}
              {userInfo && userInfo.role === "assistant_editor" && (
                <th>Editor Feedback</th>
              )}
              <th>Reviewer1 Feedback</th>
              <th>Reviewer2 Feedback</th>
              <th>Reviewer3 Feedback</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks && (
              <>
                {feedbacks
                  .filter((feedback) => {
                    const artical = articals.find(
                      (artical) => artical.id == feedback.artical_id
                      
                    );
                    return artical && artical.status === "underReview";
                  })
                  .map((feedback) => (
                    <>
                      <tr>
                        <td>
                          <h5>status</h5>
                        </td>
                        {userInfo && userInfo.role === "managing_editor" && (
                          <td>
                            {feedback.assistant_status !== null
                              ? feedback.assistant_status
                              : "under Review"}
                          </td>
                        )}
                        {userInfo && userInfo.role === "assistant_editor" && (
                          <td>
                            {feedback.editor_status !== null
                              ? feedback.editor_status
                              : "under Review"}
                          </td>
                        )}

                        <td>
                          {feedback.reviewer_1_status !== null
                            ? feedback.reviewer_1_status
                            : "under Review"}
                        </td>
                        <td>
                          {feedback.reviewer_2_status !== null
                            ? feedback.reviewer_2_status
                            : "under Review"}
                        </td>
                        <td>
                          {feedback.reviewer_3_status !== null
                            ? feedback.reviewer_3_status
                            : "under Review"}
                        </td>
                        <td>
                          <Link
                            className="btn btn-primary"
                            to={`/dashboard/viewArtical/${feedback.artical_id}`}
                          >
                            view artical
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h5>comment</h5>
                        </td>
                        {userInfo && userInfo.role === "managing_editor" && (
                          <td>
                            {feedback.assistant_comment !== null
                              ? feedback.assistant_comment
                              : "no comment"}
                          </td>
                        )}
                        {userInfo && userInfo.role === "assistant_editor" && (
                          <td>
                            {feedback.editor_comment !== null
                              ? feedback.editor_comment
                              : "no comment"}
                          </td>
                        )}

                        <td>
                          {feedback.reviewer_1_comment !== null
                            ? feedback.reviewer_1_comment
                            : "no comment"}
                        </td>
                        <td>
                          {feedback.reviewer_2_comment !== null
                            ? feedback.reviewer_2_comment
                            : "no comment"}
                        </td>
                        <td>
                          {feedback.reviewer_3_comment !== null
                            ? feedback.reviewer_3_comment
                            : "no comment"}
                        </td>
                        <td>
                          <Link
                            className="btn btn-primary"
                            to={`/dashboard/viewArtical/${feedback.artical_id}`}
                          >
                            view artical
                          </Link>
                        </td>
                      </tr>
                    </>
                  ))}
              </>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
