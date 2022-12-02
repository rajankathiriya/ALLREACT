import { React, useState } from 'react';
import Task1empsec from './Task1empsec';

const Task1empmain = () => {
    const [data, setdata] = useState([]);
    const [item, setitem] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        city: "",
        univ: ""
    });

    const [add, setadd] = useState(-1);
    const [search, setsearch] = useState('');

    const Mydelete = (index) => {
        let maindata = [...data]
        maindata.splice(index, 1)
        setdata(maindata)
    }

    const myHandler = (e) => {
        setitem({ ...item, [e.target.name]: e.target.value })
    }

    const mySearch = (e) => {
        setsearch(e.target.value)
    }

    const Myedit = (index) => {
        let maindata = data[index]
        setitem(maindata);
        setadd(index);
    }
    const Mysubmit = (s) => {
        s.preventDefault();

        if (add >= 0) {
            let r = [...data]
            r[add].fname = item.fname;
            r[add].lname = item.lname;
            r[add].email = item.email;
            r[add].mobile = item.mobile;
            r[add].city = item.city;
            r[add].univ = item.univ;
            setdata(r)
        } else {
            let maindata = [...data]
            maindata.push(item)
            setdata(maindata)
        }
        setadd(-1)
    }
    return (
        <div className='m-2'>
            <form onSubmit={Mysubmit} className='w-50 mx-auto p-4 rounded-3' style={{ backgroundColor: "rgb(206 193 193 / 41%)" }}>
                <label>First name: </label>
                <input type="text" name="fname" onChange={myHandler} className='form-control bg-white' value={item.fname} placeholder='Your first name' /><br />

                <label>Last name: </label>
                <input type="text" name="lname" onChange={myHandler} className='form-control bg-white' value={item.lname} placeholder='Your last name' /><br />

                <label>Email: </label>
                <input type="email" name="email" onChange={myHandler} className='form-control bg-white' value={item.email} placeholder='Your Email' /><br />

                <label>Mobile No: </label>
                <input type="text" name="mobile" onChange={myHandler} className='form-control bg-white' value={item.mobile} placeholder='Your Number' /><br />

                <label>City: </label>
                <input type="text" name="city" onChange={myHandler} className='form-control bg-white' value={item.city} placeholder='Your city' /><br />

                <label>University: </label>
                <input type="text" name="univ" onChange={myHandler} className='form-control bg-white' value={item.univ} placeholder='Your University' /><br />

                <input type="submit" value="Save" className='form-control btn btn-outline-primary' /><br /><br />

                <input type="text" onChange={mySearch} value={search} className='form-control bg-white' placeholder='Search Here....' />

            </form><br />
            <Task1empsec mydata={data} remove={Mydelete} edit={Myedit} find={search} />
        </div>
    );
}

export default Task1empmain;

// import { React, useState } from 'react'
// import Task1empsec from './Task1empsec';


// export default function Task1empmain() {
//     const [data, setdata] = useState([]);
//     const [item, setitem] = useState({
//         fname: "",
//         lname: ""
//     });

//     const [add, setadd] = useState(-1);
//     const myDelete = (index) => {
//         let maindata = [...data]
//         maindata.splice(index, 1)
//         setdata(maindata)
//     }

//     const myHandler = (e) => {
//         setitem({ ...item, [e.target.name]: e.target.value })
//     }

//     const myEdit = (index) => {
//         let maindata = data[index]
//         setitem(maindata);
//         setadd(index)
//     }

//     const mySubmit = (t) => {
//         t.preventDefault();

//         if (add >= 0) {
//             let d = [...data]
//             d[add].fname = item.fname
//             d[add].lname = item.lname
//             setdata(d)
//         } else {
//             let maindata = [...data]
//             maindata.push(item);
//             setdata(maindata)

//         }
//     }
//     return (
//         <div>
//             <form onSubmit={mySubmit}>
//                 <input type="text" name="fname" onChange={myHandler} value={item.fname} />
//                 <input type="text" name="lname" onChange={myHandler} value={item.lname} />
//                 <input type="submit" value="save" />
//             </form>

//             <Task1empsec mydata={data} edit={myEdit} delete={myDelete} />
//         </div>
//     )
// }
