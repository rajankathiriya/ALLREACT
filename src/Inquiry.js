import { React, useState } from 'react'

export default function Inquiry() {
    const [data, setdata] = useState({
        StudentName: "",
        ParentsName: "",
        BirthDate: "",
        Gender: "",
        education: "",
        collage: "",
        country: "",
        state: "",
        City: "",
        address: "",
        zip: "",
        phone: "",
        email: "",
        EnquiryDate: "",
        EnquiryNumber: "",
        EnquiryTakenBy: "",
        course: ""

    });

    const myHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const mySubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }
    return (
        <div>
            <form onSubmit={mySubmit} className='w-50 mx-auto p-3 bg-white m-3 rounded-3'>
                <fieldset>
                    <legend className='text-center'>Student details</legend>
                    <label>Student name:</label>
                    <input type="text" name="StudentName" onChange={myHandler} className='form-control' /><br />
                    <label>Parents name:</label>
                    <input type="text" name="ParentsName" onChange={myHandler} className='form-control' /><br />
                    <label>Birth date:</label>
                    <input type="date" name="BirthDate" id="" onChange={myHandler} className='form-control' /><br />

                    <label>Gender:</label>
                    <select name='Gender' onChange={myHandler} className='form-control'>
                        <option>Selact</option>
                        <option value="Male">Male</option>
                        <option value="female">female</option>
                    </select><br />

                    <label>Education:</label>
                    <input type="text" name="education" onChange={myHandler} className='form-control' /><br />
                    <label>Collage:</label>
                    <input type="text" name="collage" onChange={myHandler} className='form-control' /><br />
                </fieldset><hr />

                <fieldset>
                    <legend className='text-center'>Student Contact Details</legend>
                    <label>Mobile No:</label>
                    <input type="number" name="phone" id="" onChange={myHandler} className='form-control' /><br />
                    <label>Email:</label>
                    <input type="email" name="email" id="" onChange={myHandler} className='form-control' /><br />
                    <label>Country:</label>
                    <input type="text" name="country" id="" onChange={myHandler} className='form-control' /><br />
                    <label>State:</label>
                    <input type="text" name="state" id="" onChange={myHandler} className='form-control' /><br />
                    <label>City:</label>
                    <input type="text" name="City" id="" onChange={myHandler} className='form-control' /><br />
                    <label>Address:</label>
                    <input type="text" name="address" id="" onChange={myHandler} className='form-control' /><br />
                    <label>Zip code:</label>
                    <input type="number" name="zip" id="" onChange={myHandler} className='form-control' /><br />

                </fieldset>

                <fieldset>
                    <legend className='text-center'>Enquiry Details</legend>
                    <label>Enquiry Date:</label>
                    <input type="date" name="EnquiryDate" id="" onChange={myHandler} className='form-control' /><br />
                    <label>Enquiry Id:</label>
                    <input type="number" name="EnquiryNumber" id="" onChange={myHandler} className='form-control' /><br />
                    <label >Enquiry Taken By:</label>
                    <select name="EnquiryTakenBy" onChange={myHandler} className='form-control' >
                        <option>Select</option>
                        <option value="ABC">ABC</option>
                        <option value="ABC">ABC</option>
                        <option value="ABC">ABC</option>
                        <option value="ABC">ABC</option>
                        <option value="ABC">ABC</option>
                    </select><br />

                    <label>Course</label>
                    <select name="course" onChange={myHandler} className='form-control'>
                        <option >Select</option>
                        <option value="CCC">CCC</option>
                        <option value="IELTS">IELTS</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                    </select>
                </fieldset><br />


                <input type="submit" value="Save" className='form-control btn btn-outline-primary' />
            </form>
        </div>
    )
}
