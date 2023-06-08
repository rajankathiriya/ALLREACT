import { React, useState } from 'react';

const Employeedatail = () => {
    const [Detail, setDetail] = useState({
        firstname: "",
        lastname: "",
        email: "",
        mobileNo: "",
        city: "",
        state: "",
        age: "",
        gender: "",
        hobbies: []
    });
    const [validation, setvalidation] = useState({
        firstname: "",
        lastname: "",
        city: "",
        state: "",
        age: ""
    });


    const myHandler = (e) => {

        if (e.target.name == "hobbies") {

            let mydata = Detail.hobbies;

            if (e.target.checked) {
                mydata.push(e.target.value);
                setDetail({ ...Detail, hobbies: mydata })
            } else {
                let mydata1 = mydata.filter((val) => {
                    return (
                        val != e.target.value
                    )
                })
                setDetail({ ...Detail, hobbies: mydata1 })
            }
        } else {

            if (e.target.value == "") {
                setvalidation({ ...validation, [e.target.name]: `*${e.target.name} is required` })
            } else if (/^[A-Za-z]+$/.test(e.target.value) == false && e.target.name == e.target.name) {
                setvalidation({ ...validation, [e.target.name]: `*${e.target.name} is invalid` })
            } else {
                setvalidation({ ...validation, [e.target.name]: "" })
            }
            setDetail({ ...Detail, [e.target.name]: e.target.value })
        }
    }

    const Datasubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("form", JSON.stringify(Detail))
        console.log(Detail);
        setDetail({ firstname: "", lastname: "", email: "", mobileNo: "", city: "", state: "", age: "", gender: "", hobbies: "" })
    }
    return (
        <div>
            <form onSubmit={Datasubmit}>

                Firstname:<input type="text" name="firstname" onChange={myHandler} />
                <span style={{ color: "red" }}>{validation.firstname}</span><br />
                Lastname:<input type="text" name="lastname" onChange={myHandler} />
                <span style={{ color: "red" }}>{validation.lastname}</span><br />
                Email:<input type="email" name="email" onChange={myHandler} /><br />
                Mobile No:<input type="text" name="mobileNo" onChange={myHandler} /><br />
                City:<input type="text" name="city" onChange={myHandler} />
                <span style={{ color: "red" }}>{validation.city}</span><br />
                State:<input type="text" name="state" onChange={myHandler} />
                <span style={{ color: "red" }}>{validation.state}</span><br />
                Age:<input type="text" name="age" onChange={myHandler} />
                <span style={{ color: "red" }}>{validation.age}</span><br />

                <label>Gender:</label>
                <label>Male</label>
                <input type="radio" name="gender" value='male' onClick={myHandler} />
                <label>Female</label>
                <input type="radio" name="gender" value='female' onClick={myHandler} /><br />

                <label>Hobbies:</label>
                <label>Cricket</label>
                <input type="checkbox" name="hobbies" value='cricket' onClick={myHandler} />
                <label>Read Books</label>
                <input type="checkbox" name="hobbies" value='readbooks' onClick={myHandler} /><br />

                <input type="submit" value="Submit" />

                <div>{localStorage.getItem("form", JSON.stringify(Detail))}</div>
            </form>

        </div>
    );
}

export default Employeedatail;
