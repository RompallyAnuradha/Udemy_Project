import React ,{useState,useEffect}from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { BUTTON } from "../Common"
import { bindActionCreators } from "redux"
import { logoutUser } from "../actions/authActions"
import axios from "axios"
import { host } from "../utils/constants"

export default function Navbar(props)  {
        const {auth  ,logoutHandler , loginHandler ,cartItems} = props
        const {countCartItems} =props
        const [query ,setQuery] = useState("")
        const history = useHistory()
        const dispatch = useDispatch()
        const {isAuthenticated}  = useSelector((state) => state.CoursesReducer)
        const [profileData, setProfileData] = useState({})
        const [loading, setLoading] = useState(false)
        const [errors, setError] = useState("")
        const actions = bindActionCreators(
            {
              logoutUser
            },
            dispatch
          )
          
         /*  const handleClick = () => {
            return history.push('/')
          } */
        const productsData = useSelector((state) => state.CoursesReducer)
        const handleSubmit =(e)=>{
            e.preventDefault()
            history.push(`/course/${query}`)
        }
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark">
                   <Link to="/"><img src="https://udemy-clone-project.herokuapp.com/assets/youdemy-3de1dab18e5cf7e4eeb4d72afe0e8228e268920aea6143be639a88eeeaf4ac77.png" width="120px" style={{marginRight:"2px" , marginBottom:"10px"}} /></Link>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">


                        <ul className="navbar-nav mr-auto container-fluid">
                           {/*  <li class="nav-item dropdown my-2 mx-2">
                                <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-list-ul"></i> Categories
                                </a>
                                <div class="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Development</a>
                                    <a class="dropdown-item" href="#">Bussiness</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">It & Software</a>
                                </div>
                            </li>

 */}
                            <li className="nav-item col-12">
                                <form className="form-inline my-2 my-lg-0 inbutton" onSubmit={handleSubmit} style={{marginLeft:"100px"}}>
                                
                                    <input className="form-control form-control-lg mr-lg-0 col-12 bg-light border "
                                        style={{ borderRadius: "5px 0px 0px 5px" ,width:"600px"}}
                                        name="query" 
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        type="search" 
                                        placeholder="Search for Courses" 
                                        aria-label="Search" />
                                        <button className="btn btn-light btn-lg  my-3 my-lg-0 ml-0 col-2 border"
                                        style={{ borderRadius: "0px 5px 5px 0px" ,width:"50px"}}
                                        type="submit"><i className="fas fa-search text-danger "></i></button>

                                   
                                </form>
                            </li>

                        </ul>

                
     
{/* 
                         <a className="nav-link btn btn-light text-dark border mx-1" href="#">Udemy for Bussiness</a> 
                        <a className="nav-link btn btn-light text-dark border mx-1" href="#">Become an Instructor</a>  */} 
                    
                        <a href="https://github.com/wl-ui-2021/Anuradha-Product1"><h4 className="text-dark" style={{textDecoration:"none" , marginRight:"30px"}}>Anuradha</h4></a>




                        <div style={{marginRight:"15px" }}>
                            <Link to="profiledata">
                          <img src="https://img.icons8.com/ios-glyphs/30/000000/user-male-circle.png"/>
                          </Link>
                           <h5>{productsData.user.username}</h5>
                          </div>

                        <Link to="/Cart"  >
                            <div >
                            <i className="fa fa-shopping-cart  btn btn-secondary mx-2 rounded-circle" > {productsData.cartData.length}</i>
                           
                          </div>
                        </Link>
                          

                         



                        
                        
                    {!isAuthenticated  ?       <Link to="/Signup" ><button className="nav-link btn btn-primary text-light mx-2 text-decoration-none" >Login</button></Link> 
                                                 
                                : /* <BUTTON className="btn btn-primary" onClick={logoutHandler}>Signout</button>} */
                                <BUTTON onClick={() => actions.logoutUser()} text="Logout" color="primary" />

                    }
                    </div>
                    
                </nav>


            </div>

        )
    }





