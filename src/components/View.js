import React from 'react'
import Nav from './Nav'

const View = () => {
    var Viewlist=[
        {
            "BookName":"MALGUDI DAYS",
            "Author":"R.K. NARAYAN",
            "Price":"1978"
        },{
            "BookName":"A SUITABLE BOY",
            "Author":"VIKRAM SETH",
            "Price":"1999"
        },{
            "BookName":"THE HOUSE OF BLUE MANGOES",
            "Author":"DAVID DAVIDAR",
            "Price":"2000"
        }
    ]
  return (
    <div>
<Nav/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<table class="table table-primary table-striped">

</table>
                </div>
         </div>
    </div>
</div>
</div>

<table class="table">
  <thead>
    <tr>
      <th scope="col">BookName</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {Viewlist.map( (value,key)=>{
      return <tr>

                    <td>{value['BookName']}</td>
                    <td>{value.Author}</td>
                    <td>{value.Price}</td>
      </tr>
  })}
  </tbody>
</table>
    </div>
  )
}

export default View