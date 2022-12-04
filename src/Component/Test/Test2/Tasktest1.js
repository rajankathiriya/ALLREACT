import axios from 'axios';
import { React, useState, useEffect } from 'react'

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
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
        }
    });

    const myHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const mySubmit = (e) => {
        e.preventDefault()

        axios.post("https://jsonplaceholder.typicode.com/users", data)
            .then(r => {
                console.log(r);
                toast("Data submit successfully..")
            })
    }
    return (
        <div>
            <form onSubmit={mySubmit}>
                <label>Id</label>
                <input type="text" name="id" onChange={myHandler} /><br />
                <label>Name</label>
                <input type="text" name="name" onChange={myHandler} /><br />
                <label>Username</label>
                <input type="text" name="username" onChange={myHandler} /><br />
                <label>Email</label>
                <input type="email" name="email" onChange={myHandler} /><br />


                <label>Address</label>
                <label>Street</label>
                <input type="text" name="street" onChange={myHandler} /><br />
                <label>Suite</label>
                <input type="text" name="suite" onChange={myHandler} /><br />
                <label>City</label>
                <input type="text" name="city" onChange={myHandler} /><br />
                <label>Zipcode</label>
                <input type="text" name="zipcode" onChange={myHandler} /><br />

                <label>geo</label>
                <label>lat</label>
                <input type="text" name="latid" onChange={myHandler} /><br />
                <label>lng</label>
                <input type="text" name="lng" onChange={myHandler} /><br />


                <label>Phone</label>
                <input type="text" name="phone" onChange={myHandler} /><br />
                <label>Website</label>
                <input type="text" name="website" onChange={myHandler} /><br />


                <label>Company</label>
                <label>Name</label>
                <input type="text" name="name" onChange={myHandler} /><br />
                <label>catchPhrase</label>
                <input type="text" name="catchPhrase" onChange={myHandler} /><br />
                <label>Bs</label>
                <input type="text" name="bs" onChange={myHandler} /><br /><br />

                <input type="submit" value="Save" />
            </form>
        </div>
    )
}
