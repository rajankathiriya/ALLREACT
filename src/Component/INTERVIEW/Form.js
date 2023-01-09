import React, { useState } from 'react';
import Form2 from './Form2';

const Form = () => {
    const [mdata, setmdata] = useState([])
    const [addit, setaddit] = useState(-1);
    const [data, setdata] = useState({
        title: "",
        name2: "",
        name3: "",
        name4: "",
        name5: "",
        hobbies: []
    })
    const [validation, setvalidation] = useState({
        title: "",
        name2: "",
        name3: "",
        name4: "",
        name5: ""
    });


    const [record, setRecord] = useState([])
    const [search, setsearch] = useState('');

    const myDelete = (index) => {
        let mainndata = [...mdata]
        mainndata.splice(index, 1)
        setmdata(mainndata)
    }

    const myHandler = (e) => {

        // if (e.target.name == "hobbies") {
        //     let data1 = data.hobbies

        //     if (e.target.checked) {
        //         data1.push(e.target.value)
        //         setdata({ ...data, hobbies: data1 })
        //     } else {
        //         let data2 = data1.filter((val) => {
        //             return (
        //                 val != e.target.value
        //             )
        //         })
        //         setdata({ ...data, hobbies: data2 })
        //     }
        // } else {
        //     if (e.target.value == "") {
        //         setvalidation({ ...validation, [e.target.name]: `${e.target.name}is req...` })
        //     } else {
        //         setvalidation({ ...validation, [e.target.name]: "" })
        //     }
        //     setdata({ ...data, [e.target.name]: e.target.value })
        // }
        setdata({ ...data, [e.target.name]: e.target.value })




    }

    const mySearch = (e) => {
        setsearch(e.target.value)
    }
    const add = (index) => {
        let mainndata = mdata[index]
        setdata(mainndata)
        setaddit(index)


    }

    const dataSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        // setRecord((e) => [...e, data]);
        // localStorage.setItem("user", JSON.stringify(record))
        // let newrecord = { ...data }
        // setvalidation([...record, newrecord])
        // setdata({ title: "", name2: "", name3: "", name4: "", name5: "" })
        // localStorage.setItem("user", JSON.stringify(data))
        if (addit >= 0) {
            let x = [...mdata]
            x[addit].title = data.title
            setmdata(x)


        } else {
            let maindata = [...mdata]
            maindata.push(data)
            setmdata(maindata)
        }
        setaddit(-1)


    }
    return (
        <div>
            <form onSubmit={dataSubmit}>
                <input type="text" name="title" onChange={myHandler} value={data.title} /><br /><span>{validation.title}</span><br />
                <input type="text" name="name2" onChange={myHandler} value={data.name2} /><br /><span>{validation.name2}</span><br />
                <input type="text" name="name3" onChange={myHandler} value={data.name3} /><br /><span>{validation.name3}</span><br />
                <input type="text" name="name4" onChange={myHandler} value={data.name4} /><br /><span>{validation.name4}</span><br />
                <input type="text" name="name5" onChange={myHandler} value={data.name5} /><br /><span>{validation.name5}</span><br />

                <label >Hobbies</label>
                <input type="checkbox" name="hobbies" id="" value="cricket" onClick={myHandler} />cricket
                <input type="checkbox" name="hobbies" id="" value="chess" onClick={myHandler} />chess

                <input type="submit" value="save" />
                <input type="search" value={search} onChange={mySearch} />
            </form>

            {/* <h5> {localStorage.getItem("user")}</h5> */}

            {/* {localStorage.getItem("user", data)} */}
            <Form2 alldata={mdata} remove={myDelete} find={search} add={add} />
        </div>
    );
}

export default Form;
