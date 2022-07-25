import React, {useState} from 'react'
import {Input , Label, FormGroup, Form, Card, CardBody, Container, Button, Alert } from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
 
function Signup(props) {
    const [email, setEmail] = useState([{}])
    const [password, setPassword] = useState([{}])
    const {eid, setEid} = props;
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const body = {
      "Eid": eid,
      "email": email,
      "password" : password
    }

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      setErr("")
      setLoading(true);
      await axios.post("http://192.168.1.93/register", body)
      .then((res) => {
        console.log(res);
        navigate('/add')
    })
    }catch{
      setErr('Failed to authenticate');
    }
  //   try 
  //   { await fetch('http://192.168.1.93:80/register', {
  //     method: 'POST',
  //     body:{
  //       "email": email,
  //       "password":password,
  //     },
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8'
  //     }
  //   })
  //   .then(navigate('/add'))
  //   .then(console.log)
  // }
  //   catch(err) {
  //     setErr(err);
  //   }

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
  const handleConfirmId =(e) =>{
    e.preventDefault()
    setEid(e.target.value)
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
          <Label for='emp id'>Employe Id</Label>
          <Input type='id' name='Employe id' placeholder='' id='empid' onChange={handleConfirmId} required/>
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