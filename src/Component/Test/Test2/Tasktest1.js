import axios from 'axios';
import { React, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import Tasktest2print from './Tasktest2print';


export default function Tasktest1() {
    const [data, setdata] = useState({
        id: "",
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
        },
        phone: "",
        website: "",
        company: {
            cname: "",
            catchPhrase: "",
            bs: ""
        }
    });
    const [item, setitem] = useState([]);

    const myDelete = (index) => {
        let maindata = [...item]
        maindata.splice(index, 1)
        setitem(maindata)
    }

    const myHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const mySubmit = (e) => {
        e.preventDefault()

        let maindata = [...item]
        maindata.push(data)
        setitem(maindata)

        axios.post("https://jsonplaceholder.typicode.com/users", data)
            .then(r => {
                console.log(r);
                toast("Data submit successfully..")
            })


    }
    return (
        <div>
            <form onSubmit={mySubmit} className='w-50 mx-auto p-3 border shadow-lg m-3 rounded-3'>
                <fieldset>
                    <legend className='text-center' style={{ backgroundColor: "#d0dbdf" }}>Details</legend>
                    <label>Id:</label>
                    <input type="text" name="id" onChange={myHandler} className='form-control' /><br />
                    <label>Name:</label>
                    <input type="text" name="name" onChange={myHandler} className='form-control' /><br />
                    <label>Username:</label>
                    <input type="text" name="username" onChange={myHandler} className='form-control' /><br />
                    <label>Email:</label>
                    <input type="email" name="email" onChange={myHandler} className='form-control' /><br />
                </fieldset>

                <fieldset>
                    <legend className='text-center' style={{ backgroundColor: "#d0dbdf" }}>Address</legend><br />
                    <label>Street:</label>
                    <input type="text" name="street" onChange={myHandler} className='form-control' /><br />
                    <label>Suite:</label>
                    <input type="text" name="suite" onChange={myHandler} className='form-control' /><br />
                    <label>City:</label>
                    <input type="text" name="city" onChange={myHandler} className='form-control' /><br />
                    <label>Zipcode:</label>
                    <input type="text" name="zipcode" onChange={myHandler} className='form-control' /><br />
                </fieldset>

                <fieldset >
                    <legend className='text-center' style={{ backgroundColor: "#d0dbdf" }}>Contact</legend>
                    <label>Phone:</label>
                    <input type="text" name="phone" onChange={myHandler} className='form-control' /><br />
                    <label>Website:</label>
                    <input type="text" name="website" onChange={myHandler} className='form-control' /><br />
                </fieldset>

                <fieldset>
                    <legend className='text-center' style={{ backgroundColor: "#d0dbdf" }}>Company</legend>
                    <label>Name:</label>
                    <input type="text" name="cname" onChange={myHandler} className='form-control' /><br />
                    <label>catchPhrase:</label>
                    <input type="text" name="catchPhrase" onChange={myHandler} className='form-control' /><br />
                    <label>Bs:</label>
                    <input type="text" name="bs" onChange={myHandler} className='form-control' /><br /><br />
                </fieldset>

                {/* <input type="submit" value="Save" className='form-control btn btn-outline-primary' /> */}
            </form>

            <Tasktest2print alldata={item} remove={myDelete} />
        </div>
    )
}
