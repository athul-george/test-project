import { GET_DATA_RES } from "./home.type"


const INiTIAL_STATE={
    data:{}
}

const homeReducer =(state= INiTIAL_STATE, action)=>{
    switch(action.type){
        case GET_DATA_RES :{
            return{...state,...{data:action.payload}}
        }

        default:{
            return state;
        }
    }

}
export default homeReducer