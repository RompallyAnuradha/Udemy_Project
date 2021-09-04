import React,{useState,useDispatch,useSelector} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { dispatchAuthenticatedUser } from '../Cards/action';
import { bindActionCreators } from 'redux';
import { BUTTON, Input ,Checkbox } from '../Common'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => ({
  paper: {
   
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
 
  
  
  const [redirectState, setRedirectState] = useState(false)
  const [formData, setFormData] = useState({
      email: '',
      password: '',
      password2: "",
      username: ""
  })
  const [errors, setError] = useState({
      email: '',
      password: '',
      error: '',
      password2: '',
      username: '',
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
      const url = "http://localhost:5000/api/auth/register"
      axios.post(url, formData)
          .then((resp) => {
              console.log(resp)
              setRedirectState(true)
           /*    const {token} = resp.data;
              localStorage.setItem('token' ,token)
              localStorage.getItem('token') */
            
          }).catch((errors) => {
              console.log(errors.response)
              setError({
                  email: errors.response.data.email,
                  password: errors.response.data.password,
                  error: errors.response.data.error,
                  password2: errors.response.data.password2,
                  username: errors.response.data.username,
              })
          })
  }

   const { from } = props.location.state || { from: { pathname: '/' } }
  if (redirectState) {
      return <Redirect to={from} />
  }

 



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        {errors && <h1>{errors.error}</h1>}
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <Input
                    name='username'
                    placeholder="Enter username"
                    value={formData.username}
                    label="username"
                    type="text"
                    onChange={(e) => handleChange(e)}
                    error={errors.username}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Input
                    name='email'
                    placeholder="Enter Email"
                    value={formData.email}
                    label="Email"
                    type="email"
                    onChange={(e) => handleChange(e)}
                    error={errors.email}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Input
                    name='password'
                    placeholder="Enter password"
                    value={formData.password}
                    label="Password"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    error={errors.password}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Input
                    name='password2'
                    placeholder="confirm password"
                    value={formData.password2}
                    label="Password Confirmation"
                    type="password"
                    onChange={(e) => handleChange(e)}
                    error={errors.password2}
                />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox
                  label="Remember the sign details."
                  onChange={(e) => handleChange(e)}
              />}
               
              />
            </Grid>
          </Grid>
         <BUTTON type="submit" text="Sign Up" color="primary" />
          
          <Grid container justifyContent="flex-end">
            <Grid item>
            <Link to="/SignIn" variant="body2">
                {"Already have an account? Login"}
              </Link> 
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}