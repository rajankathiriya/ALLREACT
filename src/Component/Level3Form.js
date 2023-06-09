import { React, useState } from 'react'

export default function Level3Form() {
    const [data, setdata] = useState({
        // Basic: {
        fname: "",
        lname: "",
        address: "",
        city: "",
        state: "",
        country: ""
    });
    const [dataeducation, setdataeducation] = useState([{
        edu: "",
        university: "",
        degree: "",
        sdateedu: "",
        enddateedu: ""
    }]);
    const [dataexper, setdataexper] = useState([{
        company: "",
        designation: "",
        sdateexp: "",
        enddateexp: "",
        check: ""
    }]);

    const [isDisable, setIsdisable] = useState(false);


    // =======================Education===========================
    const handleRemoveClick = (index) => {
        const list = [...dataeducation];
        list.splice(index, 1);
        setdataeducation(list);
    };
    const handleAddClick = () => {
        setdataeducation([
            ...dataeducation,
            {
                edu: "",
                university: "",
                degree: "",
                sdateedu: "",
                enddateedu: ""
            },
        ]);
    };
    const handleInputChangeedu = (e, index) => {
        const { name, value } = e.target;
        const list = [...dataeducation];
        list[index][name] = value;
        setdataeducation(list);
    };

    // =======================Experience===========================
    const AddExperience = () => {
        setdataexper([
            ...dataexper,
            {
                edu: "",
                university: "",
                degree: "",
                sdateedu: "",
                enddateedu: ""
            },
        ]);
    };
    const handleInputChangeexp = (e, index) => {

        if (e.target.type == 'checkbox') {

            if (e.target.checked == true) {
                setIsdisable(true)
                setdata({ ...dataexper, "enddateexp": "" })
            } else {
                setIsdisable(false)
            }

        } else {
            const { name, value } = e.target;
            const list = [...dataexper];
            list[index][name] = value;
            setdataexper(list);

        }
    };
    const handleRemoveClickexp = (index) => {
        const list = [...dataexper];
        list.splice(index, 1);
        setdataexper(list);
    };


    // ======================Main handler======================
    const handleInputChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    };

    const DataSubmit = (e) => {
        e.preventDefault();
        console.log(data, dataeducation, dataexper);
    }

    // ==================Clear form========================
    const Clearform = (e) => {
        Array.from(document.querySelectorAll("input,select")).forEach(
            (input) => (input.value = ""),
            (select) => (select.value = "")
        );
    }
    return (
        <div>

            <div  >
                <h2 className='text-center'>Employee Details</h2>
                <div className="container  ">

                    <form onSubmit={DataSubmit} className='w-75 mx-auto bg-white p-4 m-2 rounded-2' >
                        <h3 className='text-center ' style={{ backgroundColor: "skyblue", padding: "10px" }}>Personal information</h3>
                        <label>FirstName:</label>
                        <input type="text" name="fname" onChange={handleInputChange} className='form-control' /><br />
                        <label>LastName:</label>
                        <input type="text" name="lname" onChange={handleInputChange} className='form-control' /><br />
                        <label>Address:</label>
                        <input type="text" name="address" onChange={handleInputChange} className='form-control' /><br />
                        <label>City:</label>
                        <input type="text" name="city" onChange={handleInputChange} className='form-control' /><br />
                        <label>State:</label>
                        <input type="text" name="state" onChange={handleInputChange} className='form-control' /><br />
                        <label>Country:</label>
                        <input type="text" name="country" onChange={handleInputChange} className='form-control' /><br /> <hr />


                        <div className="row">
                            <div className="col-md-6 mt-2">
                                {dataeducation.map((value, i) => {
                                    return (
                                        <div key={i}>
                                            <h3 className='text-center' style={{ backgroundColor: "skyblue", padding: "10px" }}>Education Details</h3> <hr />
                                            <label>Education Level:</label>
                                            <select name="edu" onChange={e => handleInputChangeedu(e, i)} value={value.edu} className='form-control'>
                                                <option >Select</option>
                                                <option value="10th">10th</option>
                                                <option value="12th">12th</option>
                                                <option value="Bachelor">Bachelor</option>
                                                <option value="Master">Master</option>
                                            </select><br />
                                            <label>University:</label>
                                            <input type="text" name="university" onChange={e => handleInputChangeedu(e, i)} value={value.university} className='form-control' /><br />
                                            <label>Degree:</label>
                                            <input type="text" name="degree" onChange={e => handleInputChangeedu(e, i)} value={value.degree} className='form-control' /><br />
                                            <label>StartDate:</label>
                                            <input type="date" name="sdateedu" onChange={e => handleInputChangeedu(e, i)} value={value.sdateedu} className='form-control' /><br />
                                            <label>EndDate:</label>
                                            <input type="date" name="enddateedu" onChange={e => handleInputChangeedu(e, i)} value={value.enddateedu} className='form-control' /><br />

                                            <div className="btn-box">
                                                {dataeducation.length !== 1 && <button
                                                    className="mr10 btn btn-outline-primary"
                                                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                                                {dataeducation.length - 1 === i && <button onClick={handleAddClick} className='btn btn-outline-primary'>Add More</button>}
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* <div  >{JSON.stringify(dataeducation)}</div> */}

                            </div>
                            <div className="col-md-6 mt-2">
                                {dataexper.map((value, i) => {
                                    return (
                                        <div key={i}>
                                            <h3 className='text-center' style={{ backgroundColor: "skyblue", padding: "10px" }}>Experience Details</h3><hr />

                                            <label>Company Name:</label>
                                            <input type="text" name="company" onChange={e => handleInputChangeexp(e, i)} value={value.company} className='form-control' /><br />
                                            <label>Designation:</label>
                                            <input type="text" name="designation" onChange={e => handleInputChangeexp(e, i)} value={value.designation} className='form-control' /><br />
                                            <label>StartDate:</label>
                                            <input type="date" name="sdateexp" onChange={e => handleInputChangeexp(e, i)} value={value.sdateexp} className='form-control' /><br />
                                            <label>EndDate:</label>
                                            <input type="date" name="enddateexp" onChange={e => handleInputChangeexp(e, i)} value={value.enddateexp} disabled={isDisable} className='form-control' /><br />
                                            <input type="checkbox" name="check" id="" onClick={handleInputChangeexp} value={value.check} />are you currently working in this company<br />

                                            <div className="btn-box ">
                                                {dataexper.length !== 1 && <button
                                                    className="mr10 btn btn-outline-primary"
                                                    onClick={() => handleRemoveClickexp(i)}>Remove</button>}
                                                {dataexper.length - 1 === i && <button onClick={AddExperience} className='btn btn-outline-primary '>Add More</button>}
                                            </div>
                                        </div>
                                    )

                                })}

                                {/* <div  >{JSON.stringify(dataexper)}</div> */}
                            </div>


                        </div>


                        <hr />

                        <div className='text-center'>
                            <input type="submit" onClick={Clearform} value="Save" className='btn btn-outline-primary px-5' />
                            <button onClick={Clearform} className='btn btn-outline-primary px-5'>Clear</button>
                        </div>
                    </form>
                </div>


            </div >
        </div >
    )
}
