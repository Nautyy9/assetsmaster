import React from 'react'
import {Form, Button} from 'reactstrap'

function PhoneFormInput(props) {

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
  return (
    <Form onSubmit={handleSubmit}>
    <div className="form-floating mb-4">
      <input 
        type="email" 
        id='inputEmail' 
        className='form-control' 
        placeholder='model'
        value={props.props.model} 
        onChange={handleModel}></input>
      <label htmlFor='inputEmail' className='form-label'>
        One
        </label> 
    </div>
    <div className="form-floating mb-4">
      <input 
        type="text"
        id='inputAddress' 
        className='form-control' placeholder='core'
        value={props.props.core} 
        onChange={handleCore }></input>
      <label htmlFor='inputAddress' >Two</label>
    </div>
    <div className="form-floating mb-4 ">
      <input 
        type="text" 
        id='inputName' 
        className='form-control' 
        placeholder='drive'
        value={props.props.drive} 
        onChange={handleDrive}></input>
      <label htmlFor='inputName' >Three</label>
    </div>
    <div className="form-floating mb-4 ">
      <input 
        type="text" 
        id='inputName' 
        className='form-control' 
        placeholder='Year'
        value={props.props.year} 
        onChange={handleYear}></input>
      <label htmlFor='inputName'>Four</label>
    </div>
    <div className="form-floating mb-4 ">
      <input 
        type="text" 
        id='inputName' 
        className='form-control' 
        placeholder='System'
        value={props.props.system} 
        onChange={handleSystem}></input>
      <label htmlFor='inputName'>Five</label>
    </div>
    <Button type='submit' className=' p-2  bg-primary' >
      Button
    </Button>
    </Form>
  )
}

export default PhoneFormInput