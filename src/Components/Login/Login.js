import React,{ useState ,useSelector } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {BUTTON ,Input , Checkbox} from '../Common'
import Avatar from '@material-ui/core/Avatar';

import CssBaseline from '@material-ui/core/CssBaseline';


import { Link, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import { Button } from 'bootstrap';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles((theme) => ({
 
  paper: {

    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border:"2px darak"
  },
  item:{
  width:theme.spacing(50),
  padding:theme.spacing(1)
  },
  item1:{
   marginLeft:theme.spacing(13.5)
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {
  console.log("login",props)
/* 
  const {loginHandler}=this.props */
  const classes = useStyles();
  /* const productsData = useSelector((state) => state.CoursesReducer.authenticated)  */
  const [redirectState, setRedirectState] = useState(false)
   const [auth , setAuth ] = useState(false); 
  const [redirect ,setRedirect] = useState(false)
  const [formData , setFormData ] = useState({
    email : '',
    password : ''
})
const [errors ,setError] = useState({
    email : '' ,
    password : '',
    err:''
})

const handleChange = (e) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault();
  // post the daat to the backedn using axios 
  const url = "http://localhost:5000/api/auth/login"
  axios.post(url, formData)
      .then((resp) => {
          console.log(resp)
          setRedirect(true)
      }).catch((errors) => {
          console.log(errors.response)
          setError({
              email: errors.response.data.email,
              password: errors.response.data.password,
              
          })
      })
}
/*  const auth=()=>{
  setState({ setAuth: true})
}  */

const {from} = props.location.state || {from : {pathname:"/"}}
if(redirect){
  return <Redirect to={from}/>
}
  return (
    <div style={{border:"2px dark"}} >

<Container component="main" maxWidth="xs" color="black">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {errors && <h1>{errors.error}</h1>}
        <form className={classes.form} onSubmit={handleSubmit}  style={{textAlign:"center"}}>
          <Grid container>
            <Grid item className={classes.item}>
            <Input 
            style={{paddingLeft:"2px" , width:"400px" }}
             name = 'email' 
             placeholder = "Enter Email"
             value={formData.email}                
             label = "Email"
             type = "email"
             onChange = {(e) => handleChange(e)}
             error={errors.email}
            />
        
            </Grid>
            <Grid item className={classes.item}>
            <Input 
             name = 'password' 
             placeholder = "Enter password"
             value={formData.password}                
             label = "Password"
             type = "password"
             onChange = {(e) => handleChange(e)}
             error={errors.password}
            />
        
            </Grid>
            
            <Grid item textAlign="center" justifyContent="center" >
              <Link to="/SignUp" variant="body2">
                <Typography variant="caption" className={classes.item1} >Don't have an account? Sign Up</Typography>
              </Link>
            </Grid>
          </Grid>

          
           <BUTTON type="submit" text="Login" color="primary" onclick={()=> setAuth = true} />
            
       {/*    {!auth ? 
            <>
          
          <BUTTON type="submit" text="Login"  color="secondary" />
            </>
            :    <BUTTON onClick={()=>setAuth(false)} text="Logout" color="primary"  ></BUTTON>
          } */}
          <Grid container>
           
          </Grid>
        </form>
      </div>
    
    </Container> 


    </div>
  );
}
