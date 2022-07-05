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
    <Container className='mt-4 flex col d-flex align-items-center justify-content-center' style={{Height:"100vh"}}>
        <div className='w-100' style={{width: "100%"}}>
            <Card style={{height: "100vh"}} className="mb-4">
            <CardBody>
              {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
              <Table responsive striped bordered hover >
              <thead >
              <th >Assets</th>
                <th >Make</th>
                <th>Model Number</th>
                <th>Serial Number</th>
                <th>Host Name</th>
                <th>Generation</th>
                <th>CPU</th>
                <th>RAM</th>
                <th>HDD</th>
                <th>OS Type</th>
                <th>Purchase Company</th>
                <th>Business Vertical</th>
                <th>Purchase Date</th>
                <th>Expire Date</th>
              </thead>
              <tbody className="striped">
            
              {user.map((doc, index) => {
                return (
                  <>
                  <tr key={doc.id}>
                  <td type="text">{doc.type}</td>
                  <td type="text">{doc.make}</td>
                  <td type="text" >{doc.model}</td>
                  <td type="text">{doc.serial}</td>
                  <td type="text">{doc.host}</td>
                  <td type="text" >{doc.gen}</td>
                  <td type="text" >{doc.core}</td>
                  <td type="text" >{doc.ram}</td>
                  <td type="text" >{doc.drive}</td>
                  <td type="text" >{doc.system}</td>
                  <td type="text" >{doc.pc}</td>
                  <td type="text" >{doc.busVer}</td>
                  <td type="text" >{doc.purYear}</td>
                  <td type="tex" >{doc.year}</td>
                  <div className="d-flex gap-2 ">
                        <Button
                            color="warning "
                            className=" d-flex"
                            size="lg"
                            onClick={(e) => userId(doc.id)}
                          >
                            <Link to='/add' className=" " style={{color: 'white', textDecoration: "none"}}>Edit</Link>
                          </Button>
                          <Button
                            color="danger"
                            className=""
                            onClick={(e) => deleteHandler(doc.id)}
                          >
                            Delete
                        </Button>
                  </div>
                  </tr>
                  
                        </>
                        
                        
                  
                )
                
              }) }
                
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

