import React, { useState, useEffect, useCallback } from 'react'
import { Link } from "react-router-dom"
import { Accordion, makeStyles } from '@material-ui/core/'
import { dispatchCourseDetail, dispatchAddTocart } from './action'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'


import axios from 'axios'
import { computeHeadingLevel } from '@testing-library/react'
import SimpleAccordion from './dropdown'





const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%'
  },

}))

export const SingleCard = (props) => {
  const { onAdd } = props
  const { auth } = props





  const productData = useSelector((state) => state.CoursesReducer)
  const dispatch = useDispatch()
  const actions = bindActionCreators(
    {
      dispatchCourseDetail, dispatchAddTocart
    },
    dispatch
  )


  const getProductData = useCallback(async () => {
    const res = await axios.get("https://api.jsonbin.io/b/612b4851c5159b35ae05e881");
    const findProductData = res.data.find((p) => p.courses.toLowerCase().trim()=== props.match.params.id.toLowerCase())
    if(findProductData !== undefined){
    actions.dispatchCourseDetail(findProductData)
    }else{
      props.history.push("/Page not Found")
    }
  }, [props.match.params.id])

  useEffect(() => {
    getProductData()

    return () => {
      console.log("cleaned up")
    }
  }, [getProductData])

  const onAddRedux=  (productData) =>{
    console.log("hello")
    actions.dispatchAddTocart(productData ,props.history)
  }
  return (
    <>


      <div className="border border-dark bg-dark">
        <div class="container">
          <div className="row">
            <div className="col-lg-8 mb-4">
              <div className="card bg-dark text-light">
                <img className="card-img-top" src="" alt="" />

                <div className="card-body">
                  <h1 className="card-title fs-10">{productData.coursesDetail.name}</h1>
                  <p class="card-text">
                    <h4><small>{productData.coursesDetail.description}</small></h4>
                  </p>
                  <p className="card-text"><small className="text-muted text-light text-decoration-none">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star-half text-warning"></i>
                    4.5 (18,560) <strong className="text-light px-3">{productData.coursesDetail.Enrolled} Students Enrolled</strong></small>

                    <p>Created By: <strong>{productData.coursesDetail.author}</strong> </p>
                    <p>Language : English</p>


                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen>
                    <img className="card-img-top px-3 py-2 w-100" src="https://i.udemycdn.com/course/240x135/1395136_3f8a_3.jpg" alt="" />
                  </iframe>
                </div>



                <div className="card-body">
                  <h5 className="card-title text-center"><strong>&#8377;{productData.coursesDetail.price}</strong></h5>


                 {/*  <Link to="/cart"><div className="col-md-12 text-center"><button className=" btn btn-danger " onClick={() => onAdd(productData)} >Add to Cart</button></div></Link> */}
                    <div className="col-md-12 text-center">
                      <button className=" btn btn-danger " onClick={() => onAddRedux(productData.coursesDetail)} >
                        Add to Cart
                      </button>
                    </div>

                  <h5 className="card-title text-center"><strong>30-Day Money-Back Guarantee</strong></h5>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 px-5">
        <div className="card border-dark px-3" style={{ width: "100%" }}>

          <div className="card-body">
            <h5 className="card-title">What you'll learn</h5>
        
            <p className="px-3"> <strong className="px-2">.</strong>{productData.coursesDetail.learn1}</p>
            <p className="px-3"> <strong className="px-2">.</strong>{productData.coursesDetail.learn2}</p>
            <p className="px-3"> <strong className="px-2">.</strong>{productData.coursesDetail.learn3}</p>
            <p className="px-3"> <strong className="px-2">.</strong>{productData.coursesDetail.learn4}</p>
            <p className="px-3"> <strong className="px-2">.</strong>{productData.coursesDetail.learn5}</p>



          </div>
        </div>
      </div>

      <div className="py-1 px-5">
        <div className="card " style={{ width: "100%" }}>
          <div className="card-body">
            <h5 className="card-title"><b>Master the Theory to Becoming a Good Programmer!</b> </h5>
            <p className="card-text">If youre looking to learn the theory that makes great programmers, youve come to the right place! This course is perfect for anyone interested in learning the fundamentals to Computer Science Theory. </p>
          </div>
          <div className="card-body">
            <h5 className="card-title"><b>No Previous Experience Necessary! </b> </h5>
            <p className="card-text">Computer science and technology are often thought of as things only for "analytical minds". I believe however that technology and its theory are for everyone. So I designed this course to teach each topic in a variety of easy to digest ways. Through these multiple reinforcing steps, I believe anyone can follow along and succeed!  </p>
          </div>

          <div className="card-body">
            <h5 className="card-title"><b>Enroll Now and youll Learn: </b> </h5>
            <p className="card-text">I am so confident you will enjoy this course, I offer a 100% 30-day money-back guarantee through Udemy. If you are not happy with your purchase, I have no problem with giving your money back!  </p>
          </div>
          <div className="card-body">
            <h5 className="card-title"><b>My Guarantee</b> </h5>
            <p className="card-text">If youre looking to learn the theory that makes great programmers, youve come to the right place! This course is perfect for anyone interested in learning the fundamentals to Computer Science Theory. </p>
          </div>
          <div className="card-body">
            <h5 className="card-title"><b>Are You Ready to Get Started? </b> </h5>
            <p className="card-text">I will be waiting for you inside the course!

              Remember, this is an online course, so you can take it at your own pace. Are you busy right now? Thats okay. Enroll today, and take the course at your own pace.

              Thanks so much for your interest in this Computer Science 101 Course!

              See you inside!

              Kurt

            </p>
          </div>
        </div>
      </div>

      <div className="py-1 px-5">
        <div className="card" style={{ width: "100%" }}>

          <div className="card-body">
            <h4 className="card-title">Course content</h4>
            <p className="card-body">
              <div>
                <hr />

                <video width="200" height="100" controls > <i class="fas fa-video"> <small className="px-3 fs-5">Introduction</small><small className="float-right  fs-5" style={{ marginRight: "400px" }}>1:00</small></i>
                  <source src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" type="video/mp4" />

                </video><hr />


                <i class="fas fa-video"> <small className="px-4 fs-5">Welcome To Part1</small> <small className="float-right px-4 fs-5">5:00</small></i><hr />
                <i class="fas fa-video"> <small className="px-4 fs-5">Importing The libraries</small> <small className="float-right px-4 fs-5">8:00</small></i><hr />
                <i class="fas fa-video"> <small className="px-4 fs-5">Basics</small> <small className="float-right px-4 fs-5">2:08:30</small></i><hr />
                <i class="fas fa-video"> <small className="px-4 fs-5">First Project</small> <small className="float-right px-4 fs-5">1:30:00</small></i><hr />

                <i class="fas fa-video"> <small className="px-4 fs-5">Advanced Topics</small> <small className="float-right px-4 fs-5">2:00:07</small></i><hr />
                <i class="fas fa-video"> <small className="px-4 fs-5">Bonus</small> <small className="float-right px-4 fs-5">30:00</small></i>

              </div>

              
            </p>
          </div>
        </div>
      </div>
      <div>
      
      </div>
    </>

  )
}