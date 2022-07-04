import React, {useState} from 'react'
import {Input , Label, FormGroup, Form, Card, CardBody, Container, Button, Alert } from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext';



function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false)
    const {signUp} = useAuth()
    const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(password !== confirmPassword)
    {
      return setErr("Password doesn't match");
    }
    try{
      setErr("")
      setLoading(true);
      await signUp(email, password, confirmPassword);

      navigate('/add');
    }catch{
      setErr('Failed to authenticate');
    }
    setLoading(false)
  }

  const handleEmail =(e) =>{
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlePassword =(e) =>{
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleConfirmPassword =(e) =>{
    e.preventDefault()
    setConfirmPassword(e.target.value)
  }

  return (
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:"100vh"}}>
        <div className='w-100' style={{maxWidth: "400px"}}>
        <h1 className='text-center mb-4'>Sign Up</h1>
     <Card>
        <CardBody>
            {err && <Alert color="danger">{err}</Alert>}
            <Form  onSubmit={handleSubmit}>
        <FormGroup >
          <Label for='emailtype'>Enter Email</Label>
          <Input type='email' name='email' placeholder='abc@xyz.com' id='emailtype' onChange={handleEmail} required/>
        </FormGroup>
        <FormGroup > 
          <Label for='passtype'>Enter Password</Label>
          <Input type='password' name='password' placeholder='' id='passtype' onChange={handlePassword}  required/>
        </FormGroup>
        <FormGroup >
          <Label for='cnfrpasstype'>Enter Password</Label>
          <Input type='password' name='password' placeholder='' id='cnfrpasstype' onChange={handleConfirmPassword} required/>
        </FormGroup>
        <Button type='submit' className=' bg-primary'>Sign Up</Button>
      </Form>
      

        </CardBody>
     </Card>
     <p className='text-center mt-2'>Already a customer ? <Link to='/'>Sign-in</Link></p>
     </div>
    </Container>
  )
}

export default Signup