import React from "react"
import { useSelector } from "react-redux"

export default function Profiledata(){
    const productsData = useSelector((state) => state.CoursesReducer)
    console.log("data",productsData.cartData)
    return(
        <div>
           
         <div class="card" style={{height:"100%"}} >
  <div class="card-body" >
      <h4><strong>Your Profile </strong></h4>
    <h5 class="card-title"><strong>UserName</strong> : {productsData.user.username}</h5>
    <h5 class="card-title"><strong>Email</strong> : {productsData.user.email}</h5>
   
</div>
</div>

<div class="card" >
  <div class="card-body">
  <h4><strong>Your Courses</strong></h4>
    {productsData.cartData.map((item , index)=>{
    <div key={index}>
    <h5>Courses : {item.name}</h5>
    <h5>{item.price}</h5>
    

    </div>

    })}
    
    
  </div>
</div>


        </div>
    )
}