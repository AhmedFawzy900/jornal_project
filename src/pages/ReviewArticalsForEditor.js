import { useNavigate } from "react-router";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ReviewArticalsForEditor() {
  const navigate = useNavigate();
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : navigate("/login");
  const [articals, setArticals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/getEditorReasearchs/" + userInfo.id, {
      method: "post",
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setArticals(data);
      });
    });
  }, []);
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Type</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articals
            .filter((artical) => artical.status != "resubmit")
            .filter((artical) => artical.status != "rejected")
            .map((artical) => (
              <tr>
                <td>{artical.id}</td>
                <td>{artical.fullyTitle}</td>
                <td>{artical.type}</td>
                <td>{artical.subjects}</td>
                <td>
                  <Link to={`/dashboard/viewArtical/${artical.id}`}>view</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
