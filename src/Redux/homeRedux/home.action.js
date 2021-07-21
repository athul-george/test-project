
import { GET_DATA,GET_DATA_RES } from "./home.type";


export const getData = (data) =>({
    type: GET_DATA,
    payload:data
})

export const getDataRes = (data) =>({
    type: GET_DATA_RES,
    payload:data
})