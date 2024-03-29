import React, { useEffect, useState } from "react";
import {  Button , Card, CardBody, Container, Table } from "reactstrap";
import { Link } from "react-router-dom";
import Sidebar from "../minor/Sidebar"

const View = (props) => {
  const {userId, email, password} = props
  const [user, setUser] = useState([]);

 // var s_id=props.ssnId.slice(0,props.ssnId.length-1);
  // console.log(s_id);

  const raw = JSON.stringify({
    "email": email,
    "password": password
  });

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", `${document.cookie}`);
 
  var myHeader = new Headers();
  myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
var requestOption = {
  method: 'POST',
  body: raw,
  headers: myHeader,
  redirect: 'follow'
};

  useEffect(() => {
    
    console.log(props.ssnId.slice(0,props.ssnId.length-1) +"-----"+myHeaders.get('Cookie'))
    getUsers();
  }, []);

//   const getUsers = async () => {
//     const data = await axios.get('http://192.168.1.93/viewall')
//     .then(res => 
//       {
//         console.log();
//     console.log(res.data);
//     // setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     console.log(data.docs);
//   })
// };



const getUsers = async () => {
  //  await fetch("http://192.168.1.93/login", requestOption)
  //   .then(response => console.log(response))
  //   .catch(error => console.log('error', error));

    // await fetch('http://192.168.1.93/viewall', {
    //   credentials:"include",
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //     'Cookie': `sessionid=${(props.ssnId)}`
    //   }
    // })
   await fetch("http://192.168.1.93/viewall", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    
    //   console.log(res);
    // setUser(res.data.map((doc) => ({ ...doc.data(), Uid: doc.Uid })))
// .then(console.log)
// .catch((e) => console.log(e))
   

}

// const deleteHandler = async (id) => {
//   try{
//     await fetch('http://192.168.1.93/status', {
//       method: 'POST',
//       body: JSON.stringify({
//         Uid : userId,
//         active : "True"
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//       }
//     })
//     .then(res => {
//       console.log(res);
//     })
    
//   }catch(err){
//     console.log(err);
//   } 
//   getUsers();
// };
  return (
    <>
   
    <Sidebar/>
    <Container className='mt-4 flex col d-flex align-items-center justify-content-center' style={{Height:"100vh"}}>
        <div className='w-100' style={{width: "100%"}}>
            <Card style={{height: "100%"}} className="mb-4">
            <CardBody>
              {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
              <Table responsive striped bordered hover >
              <>
              <td >Assets</td>
                <td >Make</td>
                <td>Model Number</td>
                <td>Serial Number</td>
                <td>Host Name</td>
                <td>Generation</td>
                <td>CPU</td>
                <td>RAM</td>
                <td>HDD</td>
                <td>OS Type</td>
                <td>Purchase Company</td>
                <td>Business Vertical</td>
                <td>Purchase Date</td>
                <td>Expire Date</td>
              </>
              <tbody className="striped">
            
              {user.map((doc, index) => {
                return (
                  <>
                  <tr key={doc.Uid}>
                  <td type="text">{doc.asset_type}</td>
                  <td type="text">{doc.make}</td>
                  <td type="text" >{doc.model}</td>
                  <td type="text">{doc.serial}</td>
                  <td type="text">{doc.hostname}</td>
                  <td type="text" >{doc.generation}</td>
                  <td type="text" >{doc.cpu}</td>
                  <td type="text" >{doc.ram}</td>
                  <td type="text" >{doc.hdd}</td>
                  <td type="text" >{doc.os}</td>
                  <td type="text" >{doc.purchase_company}</td>
                  <td type="text" >{doc.business_vertical}</td>
                  <td type="text" >{doc.purchase_date}</td>
                  <td type="tex" >{doc.expiry_date}</td>
                  <td className="d-flex gap-2 ">
                        <Button
                            color="warning "
                            className=" d-flex"
                            size="lg"
                            onClick={(e) => userId(doc.Uid)}
                          >
                            <Link to='/add' className=" " style={{color: 'white', textDecoration: "none"}}>Edit</Link>
                          </Button>
                          <Button
                            color="danger"
                            className=""
                            // onClick={(e) => deleteHandler(doc.Uid)}
                          >
                            Delete
                        </Button>
                  </td>
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

