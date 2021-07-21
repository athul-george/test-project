import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {getData} from '../Redux/homeRedux/home.action'
const Home =(props)=> {


    useEffect(() =>{
        props.getData()
    },[])

    useEffect(() =>{
        console.log(props.homeData.data)
    },[props.homeData.data])

    return (
        <div>
            Hi
        </div>
    )
}


const mapStateToProps =(state) =>({

homeData: state.home

})

const mapDispatchToProps = (dispatch)=>({

    getData:(values)=> dispatch(getData(values))

})
export default connect(mapStateToProps,mapDispatchToProps)( Home)
