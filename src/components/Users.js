import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Swal from 'sweetalert2';

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // fetch all users
        fetch("http://localhost:8000/api/users")
            .then((res) => {
                res.json().then((data) => {
                    console.log(data);
                    setUsers(data);
                });
            });
    }, []); 

    // delete function for user
    const handleDelete = (userId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8000/api/deleteUser/${userId}`, {
                    method: "DELETE",
                }).then(() => {
                    // Remove the deleted user from the state
                    setUsers(users.filter(user => user.id !== userId));
                });
            }
        });
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Degree</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td>{user.position}</td>
                        <td>{user.degree}</td>
                        <td>{user.role}</td>
                        <td><button onClick={() => handleDelete(user.id)} className='btn btn-danger'>delete</button></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
