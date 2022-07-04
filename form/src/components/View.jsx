import React, { useEffect, useState } from "react";
import {  Button , Card, CardBody, Container, Table } from "reactstrap";
import UserDataService from "../service/userData";
import { Link } from "react-router-dom";
import Sidebar from "../minor/Sidebar"

const View = (props) => {
  const {userId} = props
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUser();
    
    console.log(data);
    setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await UserDataService.deleteUser(id);
    getUsers();
  };
  return (
    <>
    <Sidebar/>
    <Container className='mt-4 flex col d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
        <div className='w-100' style={{maxWidth: "500px"}}>
            <Card>
            <CardBody>
              {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
              <Table>
              <thead>
                <tr>Assets</tr>
                <tr>Model Number</tr>
                <tr>Core</tr>
                <tr>Year</tr>
                <tr>Driver</tr>
                <tr>System</tr>
              </thead>
              <tbody>
              <div className=" d-md-block ">
              {user.map((doc, index) => {
                return (
                  <tr>
                  
                  <th className="">{doc.type}</th>
                  <td type="text">{doc.type}</td>
                  <h4>Model Number</h4>
                  <p type="text" >{doc.model}</p>
                  <h4>Core</h4>
                  <p type="text" >{doc.core}</p>
                  <h4>Year</h4>
                  <p type="text">{doc.year}</p>
                  <h4>Driver</h4>
                  <p type="text">{doc.driver}</p>
                  <h4>System</h4>
                  <p type="text" >{doc.system}</p>
                    <div>
                  
                        <Button
                          
                            color="warning p-4 m-2"
                            className="edit "
                            onClick={(e) => userId(doc.id)}
                          >
                            <Link to='/add' className="edit " style={{color: 'white', textDecoration: "none"}}>Edit</Link>
                          </Button>
                          <Button
                            color="danger"
                            className="delete"
                            onClick={(e) => deleteHandler(doc.id)}
                          >
                            Delete
                        </Button>
                        
                        </div>
                  </tr>
                )
                
              }) }
                </div>
                </tbody>
              </Table>
              </CardBody>
              
              </Card>
              </div>
      </Container>
    </>
  );
};

export default View;