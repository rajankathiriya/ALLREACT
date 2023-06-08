import { React, useState } from 'react';
import Select from 'react-select';

const Formcollage = () => {

    const [data, setdata] = useState({
        name: "",
        degree: "",
        collage: ""
    });

    const Degreedata = [
        { value: "B.Com", label: "B.Com" },
        { value: "BCA", label: "BCA" },
        { value: "BBA", label: "BBA" },
        { value: "MCom", label: "MCom" },
        { value: "MBA", label: "MBA" },
        { value: "MCA", label: "MCA" }
    ]
    const Collagedata = [
        { value: "MSU", label: "MSU" },
        { value: "Parul", label: "Parul" },
        { value: "Nirma", label: "Nirma" },
        { value: "IIM", label: "IIM" },
        { value: "IIT", label: "IIT" },
        { value: "Gujarat", label: "Gujarat" }
    ]

    const inputHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const Datasubmit = (e) => {
        e.preventDefault();
        console.log(data);

    }
    return (
        <div>
            <form onSubmit={Datasubmit}>
                <label htmlFor="">Name:</label>
                <input type="text" name="name" id="" onChange={inputHandler} /><br />

                <label htmlFor="">Degree:</label>
                <Select
                    options={Degreedata}
                    name="degree"
                    onChange={(e) => {
                        inputHandler({ target: { name: "degree", value: e.value } })
                    }} />

                <label htmlFor="">Collage</label>
                <Select
                    options={Collagedata}
                    name="collage"
                    onChange={(e) => {
                        inputHandler({ target: { name: "collage", value: e.value } })
                    }} />

                <input type="submit" value='submit' />
            </form>
        </div>
    );
}

export default Formcollage;



