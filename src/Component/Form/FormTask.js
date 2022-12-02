import { React, useRef, useState } from 'react'
import Select from 'react-select';

export default function FormTask() {

    const [data, setdata] = useState({
        title: "",
        firstname: "",
        lastname: "",
        education: "",
        university: "",
        startdate: "",
        enddate: "",
        check: ""
    });

    const [isDisable, setIsdisable] = useState(false);


    const Titlename = [
        { value: "Mr", label: "Mr" },
        { value: "Mrs", label: "Mrs" },
        { value: "Miss", label: "Miss" },
        { value: "Dr", label: "Dr" },
        { value: "Ms", label: "Ms" },
        { value: "Shree", label: "Shree" }
    ]
    const Educationname = [
        { value: "10th/12th", label: "10th/12th" },
        { value: "B.Com", label: "B.Com" },
        { value: "BCA", label: "BCA" },
        { value: "BBA", label: "BBA" },
        { value: "BSC", label: "BSC" }
    ]
    const Universityname = [
        { value: "MSU", label: "MSU" },
        { value: "Parul", label: "Parul" },
        { value: "VNSGU", label: "VNSGU" },
        { value: "Nirma", label: "Nirma" },
        { value: "IIT", label: "IIT" },
        { value: "IIM", label: "IIM" }
    ]

    const Handler = (e) => {
        if (e.target.type == 'checkbox') {

            if (e.target.checked == true) {
                setIsdisable(true)
                setdata({ ...data, "enddate": "" })
            } else {
                setIsdisable(false)
            }

        } else {
            setdata({ ...data, [e.target.name]: e.target.value })
        }

    }

    const Datasubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }
    return (
        <>
            <form action="" onSubmit={Datasubmit} className='collageform mt-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2" >
                            <label htmlFor="" >Title:</label>
                        </div>
                        <div className="col-sm-4">
                            <Select options={Titlename} name='title' onChange={(e) => {
                                Handler({ target: { name: 'title', value: e.value } })
                            }} />
                        </div>
                        <div className="col-sm-4">
                        </div>
                    </div>
                </div><br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2" >
                            <label htmlFor="" >Name:</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" name='firstname' placeholder='First name' className='form-control' onChange={Handler} />
                        </div><br /><br />
                        <div className="col-sm-4">
                            <input type="text" name='lastname' placeholder='Last name' className='form-control' onChange={Handler} />
                        </div>
                    </div>
                </div><br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2" >
                            <label htmlFor="" >Education:</label>
                        </div>
                        <div className="col-sm-8">
                            <Select options={Educationname} name='education' onChange={(e) => {
                                Handler({ target: { name: 'education', value: e.value } })
                            }} />
                        </div>
                    </div>
                </div><br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2" >
                            <label htmlFor="" >University:</label>
                        </div>
                        <div className="col-sm-8">
                            <Select options={Universityname} name='university' onChange={(e) => {
                                Handler({ target: { name: 'university', value: e.value } })
                            }} />
                        </div>
                    </div>
                </div><br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-2" >
                            <label htmlFor="" >Date:</label>
                        </div>
                        <div className="col-sm-4">
                            <input type="date" name="startdate" id="" className='form-control' onChange={Handler} />
                        </div><br /><br />
                        <div className="col-sm-4">
                            <input type="date" name="enddate" id="" className='form-control' onChange={Handler} value={data.enddate} disabled={isDisable} />
                        </div>
                    </div>
                </div><br />
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2" >
                        </div>
                        <div className="col-sm-8">
                            <input type="checkbox" name="check" id="" onClick={Handler} />are you currently studying in university.<br /><br />
                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2" >
                        </div>
                        <div className="col-sm-10">
                            <input type="submit" value="Submit" className='form-control btn btn-outline-primary' />
                        </div>

                    </div>
                </div>


            </form>
        </>
    )
}
