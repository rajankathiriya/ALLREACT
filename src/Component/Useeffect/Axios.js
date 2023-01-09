// import { React, useState, useEffect } from 'react'
// import axios from 'axios'

// export default function DataAxios() {
//     const [data, setdata] = useState({});

//     useEffect(() => {
//         axios.get("https://api.rootnet.in/covid19-in/stats/testing/history")
//             .then((r) => { setdata(r.data) })
//     }, []);
//     return (
//         <div>
//             <h1>Covid Data</h1>  
//             <table >
//                 <tbody>
//                     <th>Day</th>
//                     <th>totalSamplesTested</th>
//                     <th>totalIndividualsTested</th>
//                     <th>totalPositiveCases</th>
//                     <th>source</th>
//                 </tbody>
//                 <tbody>
//                     {data?.data?.map((val) => {
//                         return (
//                             <tr>
//                                 <td>{val.day}</td>
//                                 <td>{val.totalSamplesTested}</td>
//                                 <td>{val.totalIndividualsTested}</td>
//                                 <td>{val.totalPositiveCases}</td>
//                                 <td><link href={val.source} /></td>
//                             </tr>
//                         )
//                     })
//                     }

//                 </tbody>
//             </table>

//         </div>
//     )
// }


// const DataAxios = () => {

//     const [data, setdata] = useState([]);

//     useEffect(() => {
//        axios.get("https://jsonplaceholder.typicode.com/comments")
//        .then((r)=>{
//         setdata(r.data)
//        })
//     }, []);
//     return (
//         <div>
//             <h1>Second API call</h1>
//             <table>
//                 <thead>
//                     <th>postId</th>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Body</th>
//                 </thead>
//                 <tbody>
//                     {data.map((R)=>{
//                         return(
//                             <tr>
//                                 <td>{R.postId}</td>
//                                 <td>{R.id}</td>
//                                 <td>{R.name}</td>
//                                 <td>{R.email}</td>
//                                 <td>{R.body}</td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default DataAxios;

import axios from 'axios';
import { React, useState, useEffect } from 'react';

const DataAxios = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments").then(y => y.json()).then((y) => { setdata(y) })
    }, []);
    return (
        <div>
            {data?.map((val) => {
                return (
                    <>
                        {val.name}
                    </>
                )
            })}
        </div>
    );
}

export default DataAxios;
