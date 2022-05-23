import React, { useState } from 'react'
import Nav from './Nav'

const Add = () => {
    var [BookName,setBookName]=useState(" ")
    var [Author,setAuthor]=useState(" ")
    var [Price,setPrice]=useState(" ")
    const subData=()=>{
        const data={"BookName":BookName,"Author":Author,"Price":Price}
        console.log(data)
    }
  return (
    <div>
        <Nav/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Book Name</label>
                    <input onChange={(e)=>{setBookName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Author</label>
                    <input onChange={(e)=>{setAuthor(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Price</label>
                    <input onChange={(e)=>{setPrice(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-danger">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Add