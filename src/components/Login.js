import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper,Button } from '@mui/material';

export default function LoginPage() {
    const paperStyle={padding:"50px 20px",width:600,margin:"20px auto"}
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleClick=(e)=>{
        e.preventDefault()
        const login={email,password}
        console.log(login)
    }
    return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}> LOGIN </h1>
            <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Login Address" variant="outlined" fullWidth
      value={email}
      onChange={(e)=>setEmail=(e.target.value)}/>
      <TextField id="outlined-basic" label="Password " variant="outlined" fullWidth
      value={password}
      onChange={(e)=>setPassword=(e.target.value)}/><br></br><br></br>
      <Button variant="contained" color="secondary" onClick={{handleClick}}>SUBMIT</Button>
      </form>  
      </Paper>
      </Container>
  );
}
