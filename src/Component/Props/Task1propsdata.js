import React from 'react'

export default function Task1propsdata(props) {
    return (

        <div className='col-4  '>

            <div className='text-center ' style={{ boxShadow: "5px 10px 8px #888888" }}  >
                <div className="card  m-3 " >
                    <div className="card-body ">
                        <h5 className="card-title">albumId: {props.alldata.albumId}</h5>
                        <h5 className="card-title">id: {props.alldata.id}</h5>
                        <h5 className="card-title">title: {props.alldata.title}</h5>
                        {/* <p ></p> */}
                        <img src={props.alldata.url} className='w-50 mx-auto' alt="" /><br />
                        <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
