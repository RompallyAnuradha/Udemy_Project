import React , { useEffect ,useCallback} from "react"
import {bindActionCreators } from 'redux'
import {useSelector , useDispatch} from 'react-redux'
import axios from "axios"
import { Link } from "react-router-dom"
import { dispatchCourseList } from './action'


export default function Cards(){

  /* const [productsData, setProductsData] = useState([])
  const [isLoading , setIsLoading] = useState(true) */
   
  const productsData = useSelector((state) => state.CoursesReducer)
   const dispatch = useDispatch()
   const actions = bindActionCreators(
     {
      dispatchCourseList
     },
     dispatch
   )

  const getData = useCallback(async ()=>{
      const res = await axios.get("https://api.jsonbin.io/b/612b4851c5159b35ae05e881") 
      actions.dispatchCourseList(res.data)
  } ,[])

  useEffect(()=>{
    getData()
},[getData])

  return(
    
     
      <div className="container my-3"  id="courseList">
       <div>
        
         </div>    
        <h2>
          Loaded with JSON
        </h2>
        
           <div className="row">
          
      {productsData. coursesList.map((post,index)=>{
       return(
         
         <div key={index} className="col-sm-3 py-3"  >
       
         <Link to={`/course/${post.courses}`} style={{ textDecoration: 'none' }} >
          <div className="card  shadow-sm"  >
          <div className="card-header">
                         
          <img className="card-img-top "    src={post.img} alt="Card image cap" /></div>
          <div className="card-body my-10 "  style={{textDecoration: 'none' , color:"black"}}>
          <h6 style={{textDecoration: "none" , color:"black"}}>{post.name}</h6>
     
         <p className="card-text " style={{textDecoration: 'none' , color:"black"}}><small className="text-muted "style={{textDecoration: "none" , color:"black"}}>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star text-warning"></i>
         <i className="fas fa-star-half text-warning"></i>
         4.5 (18,560)</small>
         <span className="d-block"></span>
         <span className="float-right py-3"> 
         <small style={{textDecoration: "line-through" , color:"black"}} className="text-muted ">
           (₹199)</small><strong className="price" >&#8377;{post.price}</strong> </span>
           
         </p>
       <button className="btn btn-primary text-light add-to-cart"   data-id={post.id}> Buy Now </button>
         </div>
         </div>
         
         </Link>
           </div>
    
      
          
       )
      })}
    </div>
    </div>

  )
}




