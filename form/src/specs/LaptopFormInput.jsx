import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Form,Button, Input} from 'reactstrap'

function LaptopFormInput(props) {

  const nav = useNavigate()

  const {handleSubmit} = props;
  const handleBtnsubmit = (e)=>{
    e.preventDefault();
    nav('view')
  }

function handleModel (e)
    {
    e.preventDefault();
    props.props.setModel(e.target.value)
 }
 function handleCore (e)
    {
    e.preventDefault();
    props.props.setCore(e.target.value)
    }
 function handleDrive (e)
    {
    e.preventDefault();
    props.props.setDrive(e.target.value)
    }
function handleYear (e)
    {
    e.preventDefault();
    
    props.props.setYear(e.target.value)
    }
function handleSystem (e)
    {
    e.preventDefault();
    
    props.props.setSystem(e.target.value)
    }

  function handleMake (e)
  {
    e.preventDefault();
    props.props.setMake(e.target.value)
  }
  function handleSerial (e)
  {
    e.preventDefault();
    props.props.setSerial(e.target.value)
  }
  function handleHost (e)
  {
    e.preventDefault();
    props.props.setHost (e.target.value)
  }
  function handleGen (e)
  {
    e.preventDefault();
    props.props.setGen(e.target.value)
  }
  function handleRam (e)
  {
    e.preventDefault();
    props.props.setRam(e.target.value)
  }
  function handlePc (e)
  {
    e.preventDefault();
    props.props.setPc(e.target.value)
  }
  function handleBusVer (e)
  {
    e.preventDefault();
    props.props.setBusVer(e.target.value)
  }
  function handlePurYear (e)
  {
    e.preventDefault();
    props.props.setPurYear(e.target.value)
  }
  return (
    <Form onSubmit ={handleSubmit}>
    <div className="form-floating mb-4">
      <input 
        type="text" 
        id='inputEmail' 
        className='form-control' 
        placeholder='model'
        value={props.props.make} 
        onChange={handleMake}></input>
      <label htmlFor='' className='form-label'>
        Make
        </label> 
    </div>
    <div className="form-floating mb-4">
      <input 
        type="text" 
        id='inputEmail' 
        className='form-control' 
        placeholder='model'
        value={props.props.model} 
        onChange={handleModel}></input>
      <label htmlFor='inputEmail' className='form-label'>
        Model Number
        </label> 
    </div>
    <div className="form-floating mb-4">
      <input 
        type="text" 
        id='inputEmail' 
        className='form-control' 
        placeholder='model'
        value={props.props.serial} 
        onChange={handleSerial}></input>
      <label htmlFor='inputEmail' className='form-label'>
        Serial Number
        </label> 
    </div>
    <div className="form-floating mb-4">
      <input 
        type="text"
        id='inputAddress' 
        className='form-control' placeholder='core'
        value={props.props.host} 
        onChange={handleHost }></input>
      <label htmlFor='inputAddress' >Host Name</label>
    </div>
    <div className="form-floating mb-4">
      <input 
        type="text"
        id='inputAddress' 
        className='form-control' placeholder='core'
        value={props.props.gen} 
        onChange={handleGen}></input>
      <label htmlFor='inputAddress' >Generation</label>
    </div>
    <div className="form-floating mb-4">
      <Input 
        type="select"
        id='inputAddress' 
        className='form-control' placeholder='core'
        value={props.props.core} 
        onChange={handleCore}>
          <option type="Core" >Core</option>
          <option type="i3">i3</option>
          <option type="i5">i5</option>
          <option type="i7">i7</option>
          <option type="i9">i9</option>
        </Input>
      
    </div>
    
    <div className="form-floating mb-4">
      <input 
        type="text"
        id='inputAddress' 
        className='form-control' placeholder='core'
        value={props.props.ram} 
        onChange={handleRam}></input>
      <label htmlFor='inputAddress' >RAM</label>
    </div>
    
    <div className="form-floating mb-4 ">
      <input 
        type="text" 
        id='inputName' 
        className='form-control' 
        placeholder='drive'
        value={props.props.drive} 
        onChange={handleDrive}></input>
      <label htmlFor='inputName' >HDD</label>
    </div>
    <div className="form-floating mb-4 ">
      <Input 
        type="select" 
        id='inputName' 
        className='form-control' 
        value={props.props.system} 
        onChange={handleSystem}>
        <option type="Operating System" >Operating System</option>
          <option type="Windows">Windows</option>
          <option type="Linux">Linux</option>
          <option type="Mac">Mac</option>
        </Input>
      
    </div>
    <div className="form-floating mb-4">
      <Input 
        type="select"
        id='inputAddress' 
        className='form-control'
        value={props.props.pc} 
        onChange={handlePc}>
          <option type="Business Vertical" >Business Vertical</option>
          <option type="DJTCorp">DJTCorp</option>
          <option type="DJTCorp">DJTCorp</option>
          <option type="DJTCorp">DJTCorp</option>
          <option type="DJTCorp">DJTCorp</option>
        </Input>
     
      </div>
      <div className="form-floating mb-4 ">
      <Input 
        type="select" 
        id='inputName' 
        className='form-control' 
        value={props.props.busVer} 
        onChange={handleBusVer}>
        <option type="Business Vertical" >Business Vertical</option>
          <option type="DJTCorp">DJTCorp</option>
          <option type="DJTCorp">DJTCorp</option>
          <option type="DJTCorp">DJTCorp</option>
          <option type="DJTCorp">DJTCorp</option>
        </Input>
      
    </div>
      <div className="form-floating mb-4 ">
      <input 
        type="date" 
        id='inputName' 
        className='form-control' 
        placeholder='Year'
        value={props.props.purYear} 
        onChange={handlePurYear}>

        </input>
      <label htmlFor='inputName'>Purchase Date</label>
    </div>
    <div className="form-floating mb-4 ">
      <input 
        type="date" 
        id='inputName' 
        className='form-control' 
        placeholder='Year'
        value={props.props.year} 
        onChange={handleYear}></input>
      <label htmlFor='inputName'>Expire Date</label>
    </div>
    
    <Button type='submit' className=' position-absolute  p-2 bg-primary '>
                Submit
    </Button>
    </Form>
  )
}

export default LaptopFormInput