import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function ArticalsFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    getFeedbacks();
  }, []);

  const getFeedbacks = () => {
    fetch("http://localhost:8000/api/feedbacks").then((res) => {
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Assistant Feedback</th>
            <th>Editor Feedback</th>
            <th>Reviewer1 Feedback</th>
            <th>Reviewer2 Feedback</th>
            <th>Reviewer3 Feedback</th>
          </tr>
        </thead>
        <tbody>
            {feedbacks && (
                <>
                {feedbacks.map((feedback) => (
                  <tr>
                    <td>{feedback.id}</td>
                    <td>{feedback.assistant_status}</td>
                    <td>{feedback.editor_status}</td>
                    <td>{feedback.reviewer_1_status}</td>
                    <td>{feedback.reviewer_2_status}</td>
                    <td>{feedback.reviewer_3_status}</td>
                    
                  </tr>
                ))}
                </>
            )}
          
        </tbody>
      </Table>
    </div>
  );
}
