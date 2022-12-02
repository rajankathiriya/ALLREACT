import React from 'react';

const Cardlayout = (data) => {
    return (

        <div className='col-4' >

            <div className='text-center ' id='rajan'>
                <div className="card  m-3 " >
                    <div className="card-body ">
                        <h1>{data.record.category}</h1>
                        <h5 className="card-title">{data.record.title}</h5>
                        <h5 className="card-title">{data.record.price}</h5>
                        <p className="card-text">{data.record.description}</p>
                        {/* <p ></p> */}
                        <img src={data.record.image} className='w-50 mx-auto' alt="" />
                        <p >{data.record.rating.rate}</p>
                        <a href="#" className="btn btn-outline-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardlayout;
