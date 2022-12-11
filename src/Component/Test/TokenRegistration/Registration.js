import { TextField } from '@mui/material';
import axios from 'axios';
import { React, useState } from 'react'
import { toast } from 'react-toastify';


export default function Registration2() {

    const [data, setdata] = useState({
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: "true"
    });

    const myHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const mySubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:4000/accounts/register", data).then(y => {
            console.log(y.data);
            toast("Done")
        })
    }
    return (
        <div>
            <form onSubmit={mySubmit} className='w-50 mx-auto p-2 m-5'>
                <h3 className='text-center'>Registration Form</h3>

                <TextField
                    label='Title'
                    variant='filled'
                    onChange={myHandler}
                    name='title'
                    fullWidth>
                </TextField><br /><br />
                <TextField
                    label='Firstname'
                    variant='filled'
                    onChange={myHandler}
                    name='firstName'
                    fullWidth>
                </TextField><br /><br />
                <TextField
                    label='Lastname'
                    variant='filled'
                    onChange={myHandler}
                    name='lastName'
                    fullWidth>
                </TextField><br /><br />
                <TextField
                    label='Email'
                    variant='filled'
                    onChange={myHandler}
                    name='email'
                    fullWidth
                    type='email'>
                </TextField><br /><br />
                <TextField
                    label='Password'
                    variant='filled'
                    onChange={myHandler}
                    name='password'
                    fullWidth
                    type='password'>
                </TextField><br /><br />
                <TextField
                    label='Confirm password'
                    variant='filled'
                    onChange={myHandler}
                    name='confirmPassword'
                    fullWidth
                    type='password'>
                </TextField><br /><br />

                <input type="submit" value="Register" className='form-control btn btn-outline-primary' />
            </form>
        </div>

    )
}
