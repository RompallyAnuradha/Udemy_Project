import { GETCOURSELIST ,GETCOURSEDETAIL ,ADDTOCART ,
     REMOVEFROMCART,TOTAL ,CARTDETAILS } from "../actions/action";


const initialState = {
    coursesList : [],
    coursesDetail : {},
    cartData:[],
    length:0,
    total:0,
    isAuthenticated: false,
    user: {},
    error: null,
    successMessage: null,
    cartDetails:[], 
    isProductsLoading : true,
    isProductDetailLoading : true
}


export const CoursesReducer =(state =initialState ,action)=>{
    switch(action.type){
        case GETCOURSELIST :
            return {
                ...state , 
                coursesList : action.payload,
                isProductsLoading : false
            }  
            case GETCOURSEDETAIL :
                return {
                    ...state , 
                    coursesDetail : action.payload,
                    isProductDetailLoading : false
                }
            case ADDTOCART :
                return{
                    ...state , 
                    cartData :  [ ...state.cartData   ,action.payload , ],
                    isProductDetailLoading : false,
                    
                }
            case REMOVEFROMCART :
                return{
                    ...state , 
                    cartData :  state.cartData.filter((t,index)=> index !== action.payload),
                    isProductDetailLoading : false
                    }
            case TOTAL :
                return{
                    ...state , 
                    total:  [ ...state.cartData   ,state.cartData.reduce((previtem, item)=>previtem+ (item.price * item.count))],
                    isProductDetailLoading : false
                        }
            
            case CARTDETAILS :
                 return{
                    ...state , 
                    cartDetails :state.cartData,
                    isProductDetailLoading : false
                        }
            
            
            default:
                return { ...state }
             
         
    }
}