import { React, useState } from 'react'

export default function DynamicForm() {
    const [data, setdata] = useState([{
        name: "",
        edu: "",
        startdate: "",
        enddate: "",
        degree: ""
    }]);

    const myHandler = (e) => {
        setdata([{ ...data, [e.target.name]: e.target.value }])
    }

    const dataSubmit = (e) => {
        e.preventDefault();
        console.log(data);



    }
    const AddButton = (e) => {
        let alldata = {
            name: "",
            edu: "",
            startdate: "",
            enddate: "",
            degree: ""
        }

        setdata([...data, alldata])
    }

    return (
        <div>
            <form onSubmit={dataSubmit}>
                {data?.map((val, index) => {
                    return (
                        <div key={index}>
                            <label>Full Name:</label>
                            <input type="text" name="name" id="" onChange={myHandler} value={val.name} /><br />
                            <label>Education:</label>
                            <input type="text" name="edu" id="" onChange={myHandler} value={val.edu} /><br />
                            <label>Start Date:</label>
                            <input type="date" name="startdate" id="" onChange={myHandler} value={val.startdate} /><br />
                            <label>End Date:</label>
                            <input type="date" name="enddate" id="" onChange={myHandler} value={val.enddate} /><br />
                            <label >Degree</label>
                            <input type="text" name="degree" id="" onChange={myHandler} value={val.degree} /><br />
                            <input type="submit" value="Save" /><br />

                            <button onClick={AddButton}>Add More...</button>
                        </div>
                    )
                })}
            </form>
        </div>
    )
}
