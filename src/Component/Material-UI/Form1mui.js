import { React, useState } from 'react'
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';

export default function Form1mui() {
    const [data, setdata] = useState({
        fname: "",
        lname: "",
        email: "",
        city: "",
        zip: "",
        state: ""
    });

    const myHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const mysubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }
    return (
        <form onSubmit={mysubmit}>
            <TextField
                label='First Name'
                variant='filled'
                onChange={myHandler}
                name='fname'>
            </TextField><br /><br />

            <TextField
                label='Last Name'
                required
                variant='filled'
                onChange={myHandler}
                name='lname'>
            </TextField><br /><br />

            <TextField
                label='Email'
                variant='filled'
                onChange={myHandler}
                name='email'>
            </TextField><br /><br />

            <TextField
                label='select'
                select
                variant='filled'
                helperText='Please Select your city'
                SelectProps={{
                    native: true
                }}
                onChange={myHandler}
                name='city'>
                <option>City</option>
                <option>Junagadh</option>
                <option>Baroda</option>
                <option>Surat</option>
                <option>Rajkot</option>
                <option>Amreli</option>
            </TextField><br /><br />

            <TextField
                label='Zip Code'
                variant='filled'
                onChange={myHandler}
                name='zip'>
            </TextField><br /><br />

            <TextField
                label='State'
                variant='filled'
                onChange={myHandler}
                name='state'>
            </TextField><br /><br />
            <input type="submit" value="Save" />
        </form>
    )
}
