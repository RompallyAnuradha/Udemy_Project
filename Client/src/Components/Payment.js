import React, { useState , useCallback ,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import {  dispatchcartDetails} from "./actions/action"
import {bindActionCreators } from 'redux'
import {useSelector , useDispatch} from 'react-redux'
import axios from "axios"



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Payment() {
    const productsData = useSelector((state) => state.CoursesReducer.cartData) 
    
   console.log("products",productsData)
    
   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    const [form,setForm]=useState({
        firstname:'',
        lastname:'',
        address1:'',
        address2:'',
        city:'',
        state:'',
        zip:'',
        country:'',
        nameoncard:'',
        cardnumber:'',
        expirydate:'',
        cvv:''
    })
    const [count,setCount]=useState(1) 
    const updateForm=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const dispatch = useDispatch()
    const actions = bindActionCreators(
      {
        dispatchcartDetails
      },
      dispatch
    )
 
    return (
        <div className="container">
                <div className="row">
                    <div className="col-8 m-auto">
                        <form>
                            <h2 className="text-center">Checkout</h2>
                            <div className="d-flex justify-content-between">
                                <span>Purchase the Course</span>
                                <span>Payment details</span>
                                <span>Review your order</span>
                            </div>
                            {count === 1 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4> Student Details</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.firstname} name="firstname" className="form-control" placeholder="First name*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.lastname} name="lastname" className="form-control" placeholder="Last name*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={form.address1} name="address1" className="form-control" placeholder="Address line 1*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={form.address2} name="address2" className="form-control" placeholder="Address line 2" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.city} name="city" className="form-control" placeholder="City *" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.state} name="state" className="form-control" placeholder="State/Province*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.zip} name="zip" className="form-control" placeholder="Zip / Postal code*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.country} name="country" className="form-control" placeholder="Country*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked"/> Use this address for payment details
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> ) : null}
                            {count === 2 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4>Payment Method</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.nameoncard} name="nameoncard" className="form-control" placeholder="name on card*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.cardnumber} name="cardnumber" className="form-control" placeholder="card number*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.expirydate} name="expirydate" className="form-control" placeholder="expiry date*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.cvv} name="cvv" className="form-control" placeholder="cvv*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked"/> Remember credit card details for next time
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            ) : null}
                            {count === 3 ? (
                            <div className="border table-borderless">
                                <div>
                                    <h4>Order Summary</h4>
                                    <div className="row">
                                        <div className="col-9 m-auto">
                                           { productsData.map((item,index)=>(
                                                    <div className="d-flex justify-content-between" key={index}  >
                                              
                                                    <p>Course -{item.name}</p>
                                                    <p>&#8377;{item.price}</p>
    
    
    
    
                                        </div>
                                    
                                           )) }
                                            
                                        
                                          

                                        
                                            
                                    {/*          
                                     <div className="d-flex justify-content-between">
                                                <p>Course- {productsData.coursesDetail.name}</p>
                                                <p>&#8377;{productsData.coursesDetail.price}</p>
                                            </div> 
                                         <div className="d-flex justify-content-between">
                                                <p>Course 3 - Something else</p>
                                                <p>&#8377; 70.00</p>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Course 4 - Best thing of all</p>
                                                <p>&#8377; 140.00</p>
                                            </div>  */}
                                            <hr/>
                                            
                                            <div ><strong>Name :</strong>{form.firstname}{form.lastname}</div>
                                            <div><strong>Address :</strong>{form.address1}</div>
                                         {/* <div>City: {form.city}</div> ]
                                           
                                             <div><strong>Name On Card :</strong>{form.nameoncard}</div>  */}
                                           <div><strong>Country :</strong>{form.country}</div> 
                                            <div><strong>Card Number:</strong> {form.cardnumber}</div>
                                            
                                            <hr />

                                            <div className="d-flex justify-content-between">
                                                <p>Total</p>
                                                <p>&#8377; {productsData.price}</p>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ) : null}
                            {count === 3 ? (
                            <div>
                        
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Checkout
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Udemy Courses"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           Thanks for Enrolling , continue learning ...!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            
        <Link to="/"  >  
        
          <Button onClick={handleClose} color="secondary">
            Ok
          </Button> </Link>
        </DialogActions>
      </Dialog>
                            </div>
                            ) : null}
                        </form>
                        <div>
                            {count === 1 ? null : ( <button className="btn btn-outline-success" onClick={()=>setCount(count-1)}>Back</button>)}
                            {count === 3 ? null : ( <button className="btn btn-outline-success" onClick={()=>setCount(count+1)} >Next</button>)}
                        </div>
                    </div>
                </div>
            </div>
    )
}