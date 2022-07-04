import React, {useEffect, useState} from 'react'
import {Card, CardBody, Container, Alert} from 'reactstrap'
import Sidebar from '../minor/Sidebar'
import LaptopFormInput from '../specs/LaptopFormInput';
import PhoneFormInput from '../specs/PhoneFormInput';
import TvFormInput from '../specs/TvFormInput';
import UserDataService from '../service/userData';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

// import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
function FormComp(props) {
  const [message, setMessage] = useState({error: false, msg: ""})
  const [lapDesk, setlapDesk] = useState(false)
  const [phone, setPhone] = useState(false)
  const [tv, setTv] = useState(false);
  const [type, setType] = useState("")
  
const {id} = useParams()

  const editHandler = async (id) => {
    setMessage("");
    try {
      const docSnap = await UserDataService.getUser(id);
      console.log("the record is :", docSnap.data());
      props.setType(docSnap.data().props.type)
      props.setModel(docSnap.data().props.model);
      props.setCore(docSnap.data().props.core);
      props.setDrive(docSnap.data().props.drive);
      props.setYear(docSnap.data().props.year);
      props.setSystem(docSnap.data().props.system);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };
  useEffect(() => {
    console.log("The id here is : ", props.id);
      editHandler();
  }, [props.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (props.system === "" || props.model === "" || props.drive === "" || props.year === "" || props.core === "") {
      toast.error("Please fill in form data")
      return;
    }
    const user ={ core: props.core, model: props.model, system: props.system, year: props.year, drive: props.drive, type: type }
    console.log(user);

    try {
      if (props.id !== undefined && props.id !== "") {
        await UserDataService.updateUser(props.id, user);
        props.setUserId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await UserDataService.createUser(user);
        setMessage({ error: false, msg: "New Book added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    props.setModel("");
    props.setSystem("");
    props.setDrive("");
    props.setCore("");
    props.setYear("");
  };
  


  function impMethod(e){
    e.preventDefault()

    if(e.target.value === "2")
      {
        setPhone(false)
        setTv(false)
        setlapDesk(true);
      }
    else if( e.target.value === "3")
      {
        setPhone(false)
        setTv(false)
        setlapDesk(true)
      }
    else if(e.target.value === '4')
    {
      setlapDesk(false)
      setTv(false)
      setPhone(true)
    }
    else if(e.target.value === '5')
    {
      setPhone(false)
      setlapDesk(false)
      setTv(true)
  }
    else
      return <Alert>Nothing has selected</Alert>
    
  }

  const inputType = (e) =>{
    e.preventDefault()
    setType(e.target.value)
  }
  return (
    <div className=' row ' >
    <div className="flex flex-sm-column row-2 ">
    <Sidebar/>
    </div>
      
      <Container className='flex col d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
        <div className='w-100' style={{maxWidth: "400px"}}>
          <h1 className='text-center' style={{overflow: 'hidden'}}>Assets </h1>
            <Card className=" col ">
              <CardBody>
                <div className=' mb-2 p-6' >
                  <div>
                    <p htmlFor="exampleSelect" className='text-center'>Requirements</p>
                      <select className='form-control' type="select" id="exampleSelect" 
                        name={type}
                        onChange={impMethod || inputType}>
                        <option value="1" >Assets Type</option>
                        <option value="2">Laptop</option>
                        <option value="3">Computer</option>
                        <option value="4">Phone</option>
                        <option value="5">TV</option>
                      </select>
                  </div>
                </div>
                {
                lapDesk ? <div> 
                
                <LaptopFormInput props={props} handleSubmit={handleSubmit}/>
                </div> : phone ? <PhoneFormInput props={props} handleSubmit={handleSubmit}/>: <TvFormInput props = {props}  handleSubmit={handleSubmit}/>
                }
                
              </CardBody>
          </Card>
        </div>
      </Container>

    </div>
  
  )
}


export default FormComp
