import React from 'react'
import { useState } from 'react'

export default function Home() {

    // (1)------------------------------------------------------------
    // const [data,setData]=useState("10")

    // const changeValue = () =>{


    //     if (data==2) {
    //         setData(4)
    //     }
    //     else{  
    //          setData(data-1)
    //     }
    // }

    // const changeValueadd= () =>{
    //     setData (data+1)
    // }
    // const changeValuemult= () =>{
    //     setData (data*2)
    // }

    // (2)------------------------------------------------------------
    const [fname, setFname] = useState("Rajan");
    const [mname, setMname] = useState("Prakashbhai");
    const [lname, setlname] = useState("Kathiriya");
    const [fullname, setFullname] = useState("");

    const fullName = () => {
        setFullname(fname["0"] + '.' + mname["0"] + '.' + lname)
    }


    return (
        <>
            {/* (1)---------------------------------------------------------------------- */}
            {/* <h1>Curent value: {data}</h1>
        <button onClick={changeValue}>Change(-)</button> <br />
        <button onClick={changeValueadd}>Change(+)</button> <br />
        <button onClick={changeValuemult}>Change(*)</button>  */}

            {/* (2)---------------------------------------------------------------------- */}
            <h3>First Name :- {fname}</h3>
            <h3>Middle Name :- {mname}</h3>
            <h3>Last Name :- {lname}</h3>
            <h3>Full Name :- {fullname}</h3>
            <button onClick={fullName}>Joint Name</button>
        </>
    )
}
