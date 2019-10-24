import axios from '../config/axios'
export const setUser=(user)=>{
    return{
        type:'SET_USER',
        payload:user
    }
}
export const startSetUser=(formData)=>{
return (dispatch) => {
    axios.post('/users/login',formData)
        .then((response)=>{
            // console.log(response.data.token)  / return token info from server
            console.log(response.data.user)  
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.errors)
            }else{
                const user={
                    _id:response.data._id,
                    email:response.data.email,
                    username:response.data.username
                }
                localStorage.setItem('authToken',response.data.token)
                dispatch(setUser(user))  // we are creating a dummy variable to check 
            }
        })
}
}
