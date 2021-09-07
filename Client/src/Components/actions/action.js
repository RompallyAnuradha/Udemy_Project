export const GETCOURSELIST = "GETCOURSELIST"
export const GETCOURSEDETAIL ="GETCOURSEDETAIL"
export const ADDTOCART ="ADDTOTOCART"
export const REMOVEFROMCART ="REMOVEFROMCART"
export const TOTAL ="TOTAL"
export const CARTDETAILS="CARTDETAILS"
export const AUTHENTICATED_USER ="AUTHENTICATED_USER"

export const dispatchCourseList =(data)=>dispatch=>{
    return dispatch({
        type : GETCOURSELIST,
        payload : data 
    })
}


export const dispatchCourseDetail = (data) => dispatch =>{
    return dispatch({
        type : GETCOURSEDETAIL,
        payload : data
    })
}

export const dispatchAddTocart = (data ,history, location) => dispatch =>{
   history.push('/cart')
   
    return dispatch({
        type : ADDTOCART,
        payload : data
    })


}
export const dispatchRemoveFromcart = (data) => dispatch =>{
    
   
    return dispatch({
        type : REMOVEFROMCART,
        payload : data
    })
}

export const dispatchTotal = (data) => dispatch =>{
        return dispatch({
            type :TOTAL ,
            payload : data
        })
    }

    export const dispatchcartDetails = (data) => dispatch =>{
        return dispatch({
            type : CARTDETAILS,
            payload : data
        })
    }

    export const dispatchAuthenticatedUser =(data)=>dispatch=>{
        return dispatch({
            type:AUTHENTICATED_USER,
            payload:data
        })
    }
