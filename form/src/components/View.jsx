import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import UserDataService from "../service/userData";
import { Link } from "react-router-dom";

const View = ({ userId }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUser();
    console.log(data.docs);
    setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await UserDataService.deleteUser(id);
    getUsers();
  };
  return (
    <>
      <div className="mb-2">
        <Button variant="dark edit" onClick={getUsers}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Assets</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.model}</td>
                <td>{doc.core}</td>
                <td>{doc.year}</td>
                <td>{doc.driver}</td>
                <td>{doc.system}</td>
                <td>
                  <Button
                    color="secondary"
                    className="edit text-decoration-none"
                    onClick={(e) => userId(doc.id)}
                  >
                    <Link to='/add' className="edit text-decoration-none">Edit</Link>
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default View;