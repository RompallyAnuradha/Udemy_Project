import React,{ useState ,useSelector } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import {BUTTON ,Input , Checkbox} from '../Common'
import Avatar from '@material-ui/core/Avatar';
import {bindActionCreators } from 'redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import { dispatchAuthenticatedUser } from '../actions/action';
import { CircularProgress } from '@material-ui/core'
import { Link, Redirect, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {authLogin, setUser } from '../actions/authActions';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { host } from '../utils/constants';
import jwt_decode from 'jwt-decode'
import { setHeaders } from '../utils/setHeaderToken';
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
/*  const productsData = useSelector((state) => state.authReducer)    */  
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")  
  const history=useHistory()
  const dispatch = useDispatch()
  const [redirectState, setRedirectState] = useState(false)
  const [auth , setAuth ] = useState(false); 
  const [formData , setFormData ] = useState({
    email : '',
    password : ''
})
const [errors ,setError] = useState({
    email : '' ,
    password : '',
    err:''
})


const {isAuthenticated}= useSelector((state) => state.auth)  


const handleChange = (e) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value
  })
}

/*  const config ={
    headers:{
      Authorization:"Bearer" + localStorage.getItem('token')
    }
} 
 */

   /* const actions = bindActionCreators(
     {
      dispatchAuthenticatedUser
     },
     dispatch
   )
 */
   

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true)
  // post the daat to the backedn using axios 
  const url = `${host}auth/login`
  axios.post(url, formData)
      .then((resp) => {
          console.log("response",resp)
          setHeaders(resp.data.token)
          const decoded = jwt_decode(resp.data.token)
          localStorage.setItem('jwtToken' , resp.data.token)
          dispatch(setUser(decoded))
          setLoading(false)
          setRedirectState(true)
          props.loginHandler()
          
        //  history.push('/cart') 
       /*  localStorage.setItem('token', resp.data.token) 
          localStorage.getItem("token")  */
         
         
      }).catch((errors) => {
          console.log(errors.response)
          if(errors.response){
          setError({
              email: errors.response.data.email,
              password: errors.response.data.password,
              error: errors.response.data.error,
              
          })
        }else{
          setError({error : "Unexpected Error"})
        }
        setLoading(false)
      })
}


const {from} = props.location.state || {from : {pathname:"/"}}
console.log("from login",props)
if(redirectState){
  return <Redirect to={from}/>
}

const resetMessages = () => {
  setMessage("")
  setError([])
}

console.log(isAuthenticated) 
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
        {!message ? null 
                : <h3 style={{border : "2px solid black", color:'green'}}>{message && message}</h3>
            }
            {!errors ? null 
                : <h3 style={{ color:'red'}}>{errors && errors.error}</h3>
            }
            {loading ? <CircularProgress/> :
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
             onClick={resetMessages}
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
             onClick={resetMessages}
            />
        
            </Grid>
            
            <Grid item textAlign="center" justifyContent="center" >
              <Link to="/SignUp" variant="body2">
                <Typography variant="caption" className={classes.item1} >Don't have an account? Sign Up</Typography>
              </Link>
            </Grid>
          </Grid>

          
           <BUTTON type="submit" text="Login" color="primary"  />
            
   {/*      {!auth ? 
            <>
          
          <BUTTON type="submit" text="Login"  color="secondary" />
            </>
            :    <BUTTON onClick={()=>setAuth(false)} text="Logout" color="primary"  ></BUTTON>
          } */}
          <Grid container> 
           
          </Grid>
        </form>
}
      </div>
    
    </Container> 


    </div>
  );
}
