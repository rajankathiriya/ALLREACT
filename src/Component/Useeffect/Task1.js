import React from 'react'
import { useEffect, useState } from 'react';
import './Task1.css'

export default function Task() {

  const [data, setdata] = useState([]);
  const [search, setsearch] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((r) => { setdata(r) })
  }, []);

  const Handler = (e) => {
    setsearch(e.target.value)
  }

  return (
    <div>
      <input type="text" className='search' onChange={Handler} value={search} /> <br /><br />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((value) => {
            return (value.name.toUpperCase().indexOf(search.toUpperCase()) >= 0);
          }).map((value) => {
            return (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.username}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.website}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

// import {React,useState,useEffect} from 'react'

// export default function Task() {
//   const [data, setdata] = useState([]);
//   const [search, setsearch] = useState();

//   useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then((r)=>r.json())
//         .then((r)=>{setdata(r)})
//   }, []);

//   const Handler =()=>{

//   }
//   return (
//     <div>Task1</div>
//   )
// }
