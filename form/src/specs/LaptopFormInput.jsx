import React from 'react'
import {Form,Button} from 'reactstrap'

function LaptopFormInput(props) {

  const {handleSubmit} = props;

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
        value={props.props.model} 
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
        Model
        </label> 
    </div>
    <div className="form-floating mb-4">
      <input 
        type="text" 
        id='inputEmail' 
        className='form-control' 
        placeholder='model'
        value={props.props.model} 
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
        value={props.props.core} 
        onChange={handleHost }></input>
      <label htmlFor='inputAddress' >Host Name</label>
    </div>
    <div className="form-floating mb-4">
      <input 
        type="text"
        id='inputAddress' 
        className='form-control' placeholder='core'
        value={props.props.core} 
        onChange={handleGen}></input>
      <label htmlFor='inputAddress' >Generation</label>
    </div>
    <div className="form-floating mb-4">
      <input 
        type="text"
        id='inputAddress' 
        className='form-control' placeholder='core'
        value={props.props.core} 
        onChange={handleCore}></input>
      <label htmlFor='inputAddress' >Cpu</label>
    </div>
    
    <div className="form-floating mb-4">
      <input 
        type="text"
        id='inputAddress' 
        className='form-control' placeholder='core'
        value={props.props.core} 
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
      <input 
        type="text" 
        id='inputName' 
        className='form-control' 
        placeholder='System'
        value={props.props.system} 
        onChange={handleSystem}></input>
      <label htmlFor='inputName'>OS Type</label>
    </div>
    <div className="form-floating mb-4">
      <input 
        type="text"
        id='inputAddress' 
        className='form-control' placeholder='core'
        value={props.props.core} 
        onChange={handlePc}></input>
      <label htmlFor='inputAddress' >Purchase Company</label>
      </div>
      <div className="form-floating mb-4 ">
      <input 
        type="text" 
        id='inputName' 
        className='form-control' 
        placeholder='Year'
        value={props.props.year} 
        onChange={handleBusVer}></input>
      <label htmlFor='inputName'>Business Vertical</label>
    </div>
      <div className="form-floating mb-4 ">
      <input 
        type="text" 
        id='inputName' 
        className='form-control' 
        placeholder='Year'
        value={props.props.year} 
        onChange={handlePurYear}></input>
      <label htmlFor='inputName'>Purchase Date</label>
    </div>
    <div className="form-floating mb-4 ">
      <input 
        type="text" 
        id='inputName' 
        className='form-control' 
        placeholder='Year'
        value={props.props.year} 
        onChange={handleYear}></input>
      <label htmlFor='inputName'>Expire Date</label>
    </div>
    
    <Button type='submit' className=' p-2  bg-primary' >
             Submit    
    </Button>
    </Form>
  )
}

export default LaptopFormInput