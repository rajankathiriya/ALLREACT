import React from 'react'
import logo from './Image/logo-light.png'

export default function Footer1() {
    return (
        <div>
            <div className="container-fluid bg-black">
                <div className="container  text-white">
                    <div className="row py-5  ">
                        <div className="col-md-7  ">
                            <img src={logo} alt="" className=' m-0 p-0' style={{ width: "25vw" }} /><br />
                            <p>ZenoxERP has countless unique features and functionality, which will embrace your handling methodology with one touch digital experiences. It has classified features for different kind of users like Teachers, Students and Administration. Enhancing the management growth with customized dashboard, entities and modules for each user. The system administrator of Schools and Colleges & Institutes have large number of data of students and staff, which make it very complicated to organize and manage. They are used to supervise and monitor the performance of all the student's through daily reports and academic management module. It provides different reports to staff and parents respectively.</p>
                            <a href="#" className='m-2 p-2' ><i className="fa fa-facebook-square" style={{ fontSize: '40px', color: "#475993" }} aria-hidden="true"></i></a>
                            <a href="#" className='m-2 p-2' ><i className="fa fa-twitter-square" style={{ fontSize: '40px', color: "#76a9ea" }} aria-hidden="true"></i></a>
                            <a href="#" className='m-2 p-2' ><i className="fa fa-google" style={{ fontSize: '40px' }} aria-hidden="true"></i></a>
                            <a href="#" className='m-2 p-2' ><i className="fa fa-youtube-play" style={{ fontSize: '40px', color: "#f61c0d" }} aria-hidden="true"></i></a>
                            <a href="#" className='m-2 p-2' ><i className="fa fa-wifi" style={{ fontSize: '40px', color: "#dd7346" }} aria-hidden="true"></i></a>
                        </div>
                        <div className="col-md-5 " style={{ lineHeight: "2" }}>
                            <h3><b>Services</b></h3>
                            <a href="#">School Management Software</a><br />
                            <a href="#">Coaching Class Management Software</a><br />
                            <a href="#">Training Institute Management Software</a><br />
                            <a href="#">PreSchool Management Software</a>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
