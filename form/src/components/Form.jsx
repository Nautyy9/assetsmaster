import React, {useEffect, useState} from 'react'
import {Card, CardBody, Container,Input} from 'reactstrap'
import Sidebar from '../minor/Sidebar'
import LaptopFormInput from '../specs/LaptopFormInput';
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios'


// import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
function FormComp(props) {
  const [message, setMessage] = useState({error: false, msg: ""})
  const [type, setType] = useState("assets")
  
  const editHandler = async (id) => {

    setMessage("");
    try {
      const docSnap = await axios.get('http://192.168.1.93/uid')
      console.log("the record is :", docSnap);
      console.log("editHandler");
    
      setType(docSnap.asset_type)
      props.setModel(docSnap.model);
      props.setCore(docSnap.cpu);
      props.setDrive(docSnap.hdd);
      props.setYear(docSnap.expire_date);
      props.setSystem(docSnap.os);
      props.setHost(docSnap.hostname);
      props.setSerial(docSnap.serial);
      props.setMake(docSnap.make);
      props.setGen(docSnap.gen);
      props.setRam(docSnap.ram);
      props.setPc(docSnap.purchase_company);
      props.setBusVer(docSnap.business_vertical);
      props.setPurYear(docSnap.purchase_date);
      
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    console.log("The id here is : ", props.Uid);
      editHandler();
  }, [props.Uid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (props.system === "" || props.model === "" || props.drive === "" || props.year === "" || props.core === "" || props.make === "" || props.serial === "" || props.host === "" || props.gen === "" || props.ram === "" || props.pc === "" || props.busVer === "" || props.purYear === "" ) {
      toast.error("Please fill in complete details")
      return;
    }
    const adduser ={  "updateData": "add", "cpu": props.core, "model": props.model, "os": props.system, "expiry_date": props.year, "hdd": props.drive, "asset_type": type , "make": props.make, "serial": props.serial, "hostname": props.host, "generation": props.gen, "ram": props.ram, "purchase_company": props.pc, "business_vertical": props.busVer, "purchase_date": props.purYear }
    const updateuser ={ "Uid": props.Uid, "Eid": props.eid, "updateData": "update", "cpu": props.core, "model": props.model, "os": props.system, "expiry_date": props.year, "hdd": props.drive, "asset_type": type , "make": props.make, "serial": props.serial, "hostname": props.host, "generation": props.gen, "ram": props.ram, "purchase_company": props.pc, "business_vertical": props.busVer, "purchase_date": props.purYear }

    
    try {
      if (props.id !== undefined && props.id !== "") {
        await axios.post('http://192.168.1.93/updatedata', updateuser).then(
        props.setUserId(""),
        toast.success("Data updated successfully"),
        console.log("updated")
      )

      } else {
        await axios.post('http://192.168.1.93/updatedata', adduser).then(
        toast.success("New User data added successfully!"),
        console.log("added")
        )
      }
    } catch (err) {
      setMessage(err);
    }

    props.setModel("");
    props.setSystem("");
    props.setDrive("");
    props.setCore("");
    props.setHost("");
    props.setSerial("");
    props.setGen("");
    props.setRam("");
    props.setPc("");
    props.setBusVer("");
    props.setPurYear([]);
    props.setMake("");
    props.setYear([]);
   };



  const inputType = (e) =>{
    e.preventDefault()
    setType(e.target.value)
  }
  return (
    <div className=' row ' >
    <ToastContainer autoClose={5000}/> 
    
    <div className="flex flex-sm-column row-2  mb-4">
    <Sidebar/>
     
    </div>
  
      <Container className='flex col d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
        <div className='w-50 ' style={{maxWidth: "100%"}}>
          <h1 className='text-center' style={{overflow: 'hidden'}}>Assets Master</h1>
          
           <Card className=" col mb-4 ">
          
              <CardBody>
                <div className=' mb-2 p-6' >
                  <div>
                      <Input  className='form-control' type="select" id="exampleSelect" 
                        value={type}
                        onChange={inputType}>
                        <option value="assets" >Assets Type</option>
                        <option value="Laptop" default>Laptop</option>
                        <option value="Computer">Computer</option>
                       
                      </Input>
                  </div>
                </div>
                 <LaptopFormInput props={props} handleSubmit={handleSubmit}/>
                
              </CardBody>
              
          </Card>
        </div>
      </Container>

    </div>
  
  )
}


export default FormComp
