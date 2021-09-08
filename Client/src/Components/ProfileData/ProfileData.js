import React from "react"
import { useSelector } from "react-redux"

export default function Profiledata() {
  const productsData = useSelector((state) => state.authReducer)
   const coursesdata =useSelector((state)=>state.CoursesReducer)
  /* const dispatch = useDispatch()
  const actions = bindActionCreators(
    {
      dispatchCourseDetail, dispatchAddTocart
    },
    dispatch
  ) */
  console.log("data", productsData.cartData)
  return (
    <div>

      <div class="card" style={{ height: "100%", margin: "30px" }} >
        <div class="card-body" >


          <h4><strong>Your Profile </strong></h4>
          {productsData.user.length == 0 &&<h5>you have not registered yet</h5> }
            <div>

              <p class="card-title"><strong>UserName</strong> : {productsData.user.username}</p>
              <p class="card-title"><strong>Email</strong> : {productsData.user.email}</p>

            </div>
        </div>
      </div>

      <div class="card" style={{ margin: "30px" }}>
        <div class="card-body">
          <h4><strong>Your Courses</strong></h4>
          {coursesdata.cartData.length == 0 && <h4>You have not enrolled with any Courses</h4>}
          {coursesdata.cartData.map((item, index) => {
            return (<div key={index}>
              <h5>Courses : {item.name}</h5>
              <h5>{item.price}</h5>


            </div>
            )
          })}



        </div>
      </div>


    </div>
  )
}