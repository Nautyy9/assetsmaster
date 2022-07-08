import React, {useEffect, useState} from 'react'
import {Card, CardBody, Container,Input,Alert} from 'reactstrap'
import Sidebar from '../minor/Sidebar'
import LaptopFormInput from '../specs/LaptopFormInput';
import "react-toastify/dist/ReactToastify.css"
import UserDataService from '../service/userData';
import { toast, ToastContainer } from 'react-toastify';

// import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
function FormComp(props) {
  const [message, setMessage] = useState({error: false, msg: ""})
  const [type, setType] = useState("assets")
  

  const editHandler = async (id) => {
    setMessage("");
    try {
      const docSnap = await UserDataService.getUser(props.id);
      console.log("the record is :", docSnap.data());
      setType(docSnap.data().type)
      props.setModel(docSnap.data().model);
      props.setCore(docSnap.data().core);
      props.setDrive(docSnap.data().drive);
      props.setYear(docSnap.data().year);
      props.setSystem(docSnap.data().system);
      props.setHost(docSnap.data().host);
      props.setSerial(docSnap.data().serial);
      props.setMake(docSnap.data().make);
      props.setGen(docSnap.data().gen);
      props.setRam(docSnap.data().ram);
      props.setPc(docSnap.data().pc);
      props.setBusVer(docSnap.data().busVer);
      props.setPurYear(docSnap.data().purYear);
      
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    console.log("The id here is : ", props.id);
      editHandler();
  }, [props.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (props.system === "" || props.model === "" || props.drive === "" || props.year === "" || props.core === "" || props.make === "" || props.serial === "" || props.host === "" || props.gen === "" || props.ram === "" || props.pc === "" || props.busVer === "" || props.purYear === "" ) {
      toast.error("Please fill in complete details")
      return;
    }
    const user ={ core: props.core, model: props.model, system: props.system, year: props.year, drive: props.drive, type: type , make: props.make, serial: props.serial, host: props.serial, gen: props.gen, ram: props.ram, pc: props.pc, busVer: props.busVer, purYear: props.purYear }
    console.log(user);

    try {
      if (props.id !== undefined && props.id !== "") {
        await UserDataService.updateUser(props.id, user);
        props.setUserId("");
        toast.success("Data updated successfully")

      } else {
        await UserDataService.createUser(user);
        toast.success("New User data added successfully!")
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
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
