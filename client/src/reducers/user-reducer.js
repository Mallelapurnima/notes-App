const userReducer=(state={},action)=>{
    switch(action.type){
        case 'SET_USER':{
            return{...action.payload}
        }
        default:{
            return {...action.payload}  //Object.assign({},state)
        }
    }
}
export default userReducer
