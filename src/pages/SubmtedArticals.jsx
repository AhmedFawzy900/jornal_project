import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";

export default function SubmtedArticals() {
  const userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
  const [articals, setArticals] = useState([]);
  const getArticals = () => {
    fetch(
      "https://eissa-group.com/api/getResearchesByMainAuthorId/" + userInfo.id,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then((res) => {
      res.json().then((data) => {
        setArticals(data);
        console.log(data);
      });
    });
  };
  useEffect(() => {
    getArticals();
  }, []);
  return (
    <div className="">
      <div className="articals">
        <h3 className="articals-title">Submted Articals</h3>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Subject</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {articals.map((artical) => (
          <tr>
            <td></td>
            <td>{artical.fullyTitle}</td>
            <td>{artical.subjects}</td>
            <td>{artical.type}</td>
            <td>{artical.status}</td>
          </tr>
        ))}
        </tbody>
      </Table>
      
    </div>
  );
}
