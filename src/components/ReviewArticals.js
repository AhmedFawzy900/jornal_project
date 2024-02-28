import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function ReviewArticals(){
  // get all articals
  const [articals, setArticals] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/researchs")
        .then((res) => {
            res.json().then((data) => {
                console.log(data);
                setArticals(data);
            });
        });
    }, []); 
    return (
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
          {articals.filter((artical) => artical.status === "pending").map((artical) => (
            <tr>
              <td>{artical.id}</td>
              <td>{artical.fullyTitle}</td>
              <td>{artical.type}</td>
              <td>{artical.subjects}</td>
              <td><Link to={`/dashboard/viewArtical/${artical.id}`}>view</Link></td>
            </tr>
          ))}
          
        </tbody>
      </Table>
    )
}