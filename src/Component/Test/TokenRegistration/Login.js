import { AgGridReact } from 'ag-grid-react';
import axios from 'axios';
import { React, useState } from 'react'
import { toast } from 'react-toastify';
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { TextField } from '@mui/material';

export default function Login() {
    // =======================Login info====================    

    const [data, setdata] = useState({
        email: "",
        password: ""
    });

    // =======================Data Print====================    
    const [column, setcolumn] = useState([
        { field: "created", filter: 'agNumberColumnFilter' },
        { field: "email", filter: true, sortable: true },
        { field: "firstName", filter: true },
        { field: "id", filter: true },
        { field: "isVerified", filter: true },
        { field: "lastName", filter: true },
        { field: "role", filter: true },
        { field: "title", filter: true }

    ]);
    const [row, setrow] = useState([]);


    // =======================Input Hendler====================    
    const myHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    // ===================Fetch data print in console====================    
    const myLogin = (e) => {
        e.preventDefault()
        axios.post("http://localhost:4000/accounts/authenticate", data)
            .then(y => {
                console.log(y);

                localStorage.setItem("user", JSON.stringify(y.data))
                toast("Login Successfully.....")
            }).catch(() => {
                toast("Email and password invalid")
            })
    }

    // ==================Token===========================
    const Fetcdata = () => {
        let data = localStorage.getItem("user")
        let r = JSON.parse(data)
        axios.get("http://localhost:4000/accounts", {
            headers: {
                "Authorization": "Bearer " + r?.jwtToken
            }
        })
            .then(r => {
                setrow(r.data);//Data Print in Table
            }).catch(
                y => {
                    console.log(y);
                }
            )
    }
    return (
        <div>
            <form onSubmit={myLogin} className='w-50 mx-auto p-2 m-5'>
                <h3 className='text-center'>Login Form</h3>

                <TextField
                    type='email'
                    label='Email'
                    variant='filled'
                    fullWidth
                    onChange={myHandler}
                    name='email'>
                </TextField><br /><br />
                <TextField
                    type='password'
                    label='Password'
                    variant='filled'
                    fullWidth
                    onChange={myHandler}
                    name='password'>
                </TextField><br /><br />
                <input type="submit" value="Login" className='form-control btn btn-outline-primary' /><br /><br />
                <button onClick={Fetcdata} className='form-control btn btn-outline-danger'>Fetch</button>
            </form>

            <div className="ag-theme-alpine" style={{ width: "100 %", height: 600 }}>
                <AgGridReact rowData={row} columnDefs={column}></AgGridReact>
            </div>
        </div>
    )
}
