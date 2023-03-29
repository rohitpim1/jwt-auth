import React,{useState} from 'react'

import { Input,Heading, InputGroup, InputRightElement, Button} from '@chakra-ui/react'
import "./login.css"
const Login = () => {
    const [input, setInput] = useState('')
    const [pass, setPass] = useState('')
    const [show, setShow] = React.useState(false)

    const handleClick = () => setShow(!show)

    const handleInputChange = (e) => setInput(e.target.value)
    const handlePassChange = (e) => setPass(e.target.value)

    const loginForm = (e) =>{
        e.preventDefault();
        if(input && pass)
        {
            console.log(pass,input)
        }
        setInput(" ");
        setPass(" ");
    }
  
    const isError = input === ''
  return (
    <div className='login-form'>
    <div className='login'>
    <Heading as='h4' size='md' style={{paddingTop:"20px",paddingBottom:"50px"}}>
   Login In
  </Heading>
  <form >
   <div className='emial'  style={{marginBottom:"20px"}}>
   <Input placeholder='email-id' size="lg" aria-labelledby='email id' autoComplete="off" value={input} onChange={handleInputChange}/>
   </div>
   <div className='password'>
   <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        autoComplete="new-password"
        value={pass}
        onChange={handlePassChange}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
   </div>
   <div className='btn' style={{margin:"20px",display:"flex",justifyContent:"center"}}>
   <Button colorScheme='teal' variant='solid' onClick={loginForm}>
    Login
  </Button>
   </div>
  </form>
  </div>
    </div>
  )
}

export default Login
