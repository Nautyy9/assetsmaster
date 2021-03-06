import React,{ useState}from 'react'
import { Form , FormGroup, Label, Input, Button, Card, CardBody, Container, Alert, Toast,} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

 function LoginPage() {

  
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const { logIn } = useAuth();
  const nav = useNavigate();

   const handleSubmit =async (e) =>{
    e.preventDefault();
    setErr("")
    try{
      await logIn(email, password);
      setLoading(false)
       
      nav('/add');
    }catch{
      setErr('User does not exists');
    }
    setLoading(true)
  }

  const handleEmail =(e) =>{
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handlePass =(e) =>{
    e.preventDefault()
    setPassword(e.target.value)
  }


  return (
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px", overflow: 'none'}} >
      <h1 className='text-center mb-4 overflow-hidden ' style={{textDecoration: 'none'}}>Sign In</h1>
      <Card>
        <CardBody>
        {err && <Alert color="danger">{err}</Alert>}
          <Form onSubmit={handleSubmit}>
        <FormGroup >
          <Label for='emailtype'>Enter Email</Label>
          <Input type='email' name='email'  id='emailtype' onChange={handleEmail}/>
        </FormGroup>
        <FormGroup>
          <Label for='passtype'>Enter Password</Label>
          <Input type='password' name='password'  id='passtype' onChange={handlePass}/>
        </FormGroup>
        <Button  type='submit' className=' bg-primary'>Sign In</Button>
        
      </Form>
        </CardBody>
      </Card>
      <p className='text-center mt-2'>New customer ? <Link to='/sign-up'>Sign-up</Link></p>
      </div>
    </Container>
  )
}

export default LoginPage