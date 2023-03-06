import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {

  let [username , setUsername] = useState("")
  let [password , setPassword] = useState("")

  let navigate = useNavigate()

  let handleLogin = (e)=>{
    e.preventDefault()
    let localUsername = localStorage.getItem("username")
    let localPassword = localStorage.getItem("password")
    if(localUsername == username && localPassword == password)
    {
      toast.success(`${username}Logged in SUCCESSFULLY`)
      navigate('/home')
    }
    else
    {
      toast.error("Please Check Username And Password")
      navigate('/login')
    }
  }
  return (
    <div style={{height : "200px" , width : "500px"}}>
      <h1>LOGIN PAGE</h1>
    <form>

      <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address'
      onChange={(e)=>{
        setUsername(e.target.value)
      }} />

      <MDBInput className='mb-4' type='password' id='form1Example2' label='Password'
      onChange={(e)=>{
        setPassword(e.target.value)
      }} />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
        </MDBCol>

        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>

      </MDBRow>

      <MDBBtn type='submit' block onClick={handleLogin}>
        Login
      </MDBBtn>
    </form>
    </div>
  );
}

