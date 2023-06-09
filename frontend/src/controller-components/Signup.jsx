import React,{useState} from 'react'
import "./signup.css"

import {NavLink} from 'react-router-dom'

import { Input,Heading, InputGroup, InputRightElement, Button} from '@chakra-ui/react'

const Signup = () => {
    const [input, setInput] = useState('')
    const [inputuser, setInputuser] = useState('')

    const [pass, setPass] = useState('')
    const [cpass, setCpass] = useState('')
    const [show, setShow] = React.useState(false)

    const handleClick = () => setShow(!show)

    const handleInputChange = (e) => setInput(e.target.value)
    const handleInputuserChange = (e) => setInputuser(e.target.value)
   const handlePassChange = (e) => setPass(e.target.value)
   const handleCPassChange = (e) => setCpass(e.target.value)

    const SignupForm = (e) =>{
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
    <div className='signup-form'>
    <div className='signup'>
    <Heading as='h4' size='md' style={{paddingTop:"20px",paddingBottom:"50px"}}>
   Sign up
  </Heading>
  <form >
  <div className='emial'  style={{marginBottom:"20px"}}>
   <Input placeholder='user name' size="lg" aria-labelledby='email id' autoComplete="off" value={inputuser} onChange={handleInputuserChange}/>
   </div>
   <div className='emial'  style={{marginBottom:"20px"}}>
   <Input placeholder='email-id' size="lg" aria-labelledby='email id' autoComplete="off" value={input} onChange={handleInputChange}/>
   </div>
   <div className='password' style={{marginBottom:"20px"}}>
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
   <div className='password'>
  
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        autoComplete="new-password"
        value={cpass}
        onChange={handleCPassChange}
      />
     
   </div>
   <div className='btn' style={{margin:"20px",display:"flex",justifyContent:"center"}}>
   <Button colorScheme='teal' variant='solid' onClick={SignupForm}>
    Signup
  </Button>
   </div>
  </form>
  <div className='link-signup' style={{marginBottom:"20px"}}>
    <NavLink to="/"><p>Already a user? login here</p></NavLink>
  </div>
  </div>
  
    </div>
  )
}

export default Signup
