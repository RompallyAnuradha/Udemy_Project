let url =""

if(process.env.NODE_ENV === "development"){
    url = "http://localhost:5000/api/"
}else if (process.env.NODE_ENV === "production"){
    url = "https://ecom.in/api"
}

export const host = url ; 
export const coursesApi = 'courses/'