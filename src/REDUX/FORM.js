// import React, { useState } from 'react';

// const FORM = () => {
//     const [dataprint, setdataprint] = useState([]);
//     const [data, setdata] = useState({
//         name1: "",
//         name2: "",
//         name3: "",
//         name4: "",
//         name5: "",
//         name6: "",
//         name7: ""
//     });
//     const [search, setsearch] = useState("");
//     const [add, setadd] = useState(-1);



//     const handler = (e) => {
//         setdata({ ...data, [e.target.name]: e.target.value })
//     }
//     const dataDelete = (index) => {
//         let maindata = [...dataprint]
//         maindata.splice(index, 1)
//         setdataprint(maindata)
//     }


//     const Search = (e) => {
//         setsearch(e.target.value)
//     }
//     const EditData = (index) => {
//         let maindata = dataprint[index]
//         setdata(maindata)
//         setadd(index)
//     }

//     const Submit = (e) => {
//         e.preventDefault();
//         if (add >= 0) {
//             let r = [...dataprint]
//             r[add].name1 = data.name1;
//             r[add].name2 = data.name2;
//             r[add].name3 = data.name3;
//             r[add].name4 = data.name4;
//             r[add].name5 = data.name5;
//             r[add].name6 = data.name6;
//             r[add].name7 = data.name7;
//             setdataprint(r)
//         } else {
//             let alldata = [...dataprint];
//             alldata.push(data);
//             setdataprint(alldata)
//         }
//         setadd(-1)
//     }
//     return (
//         <div>
//             <form onSubmit={Submit}>
//                 <label htmlFor="">name</label>
//                 <input type="text" name="name1" onChange={handler} />
//                 <label htmlFor="">name</label>
//                 <input type="text" name="name2" onChange={handler} />
//                 <label htmlFor="">name</label>
//                 <input type="text" name="name3" onChange={handler} />
//                 <label htmlFor="">name</label>
//                 <input type="text" name="name4" onChange={handler} />
//                 <label htmlFor="">name</label>
//                 <input type="text" name="name5" onChange={handler} />
//                 <label htmlFor="">name</label>
//                 <input type="text" name="name6" onChange={handler} />
//                 <label htmlFor="">name</label>
//                 <input type="text" name="name7" onChange={handler} />

//                 <input type="submit" value="Save" />
//             </form>
//             <input type="search" value={search} onChange={Search} />

//             {dataprint.filter((val) => {
//                 return (
//                     val.name1.toUpperCase().indexOf(search.toUpperCase()) >= 0
//                 )
//             }).map((val) => {
//                 return (
//                     <>
//                         <table>
//                             <td>{val.name1}</td>
//                             <td>{val.name2}</td>
//                             <td>{val.name3}</td>
//                             <td>{val.name4}</td>
//                             <td>{val.name5}</td>
//                             <td>{val.name6}</td>
//                             <td>{val.name7}</td>
//                             <td><button onClick={dataDelete}>DELETE</button></td>
//                             <td><button onClick={EditData}>Edit</button></td>
//                         </table>
//                     </>
//                 )
//             })}
//         </div>
//     );
// }

// export default FORM;



























import React, { useState } from 'react';

const FORM = () => {

    const [data, setdata] = useState({
        name1: "",
        name2: "",
        name3: ""
    });
    const [print, setprint] = useState([]);

    const Delete = (index) => {
        let maindata = [...print]
        maindata.splice(index, 1)
        setprint(maindata)
    }
    const Handler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }


    const Submit = (e) => {
        e.preventDefault()
        let alldata = [...print]
        alldata.push(data)
        setprint(alldata)
    }
    return (
        <div>
            <form onSubmit={Submit}>
                <input type="text" name="name1" onChange={Handler} /><br />
                <input type="text" name="name2" onChange={Handler} /><br />
                <input type="text" name="name3" onChange={Handler} /><br />

                <input type="submit" value="Save" />
            </form>

            {print.map((val) => {
                return (
                    <>
                        <table>
                            <td>{val.name1}</td>
                            <td>{val.name2}</td>
                            <td>{val.name3}</td>
                            <td><button onClick={Delete}>DELETE</button></td>
                        </table>
                    </>
                )
            })}
        </div>
    );
}

export default FORM;
