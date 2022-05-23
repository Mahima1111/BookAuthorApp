import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    var [Name,setName]=useState("")
    var [Email,setEmail]=useState("")
    var [UserName,setUser]=useState("")
    var [Password,setPass]=useState("")
    var [ConPass,setConPass]=useState("")
    const subData=()=>{
    const data={"name":UserName,"password":Password}
    console.log(data)
    }

  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">UserName</label>
                    <input onChange={(e)=>{setUser(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPass(e.target.value)}} type="password" name="" id="" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Confirm Password</label>
                    <input onChange={(e)=>{setConPass(e.target.value)}} type="password" name="" id="" class="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                   <Link to='/add'><button className="btn btn-success">REGISTER</button></Link>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/" className="btn btn-danger">Back To Login</a>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Register