import { React, useState } from 'react';

const Formtest = () => {

    const [detail, setdetail] = useState({
        firstname: "",
        lastname: "",
        email: "",
        pwd: "",
        pwd2: "",
        country: "",
        birthdate: "",
        birthmonth: "",
        birthyear: "",
        checkvalue: '',
        checkvalue2: ''
    });

    const Handler = (e) => {


        if (e.target.type == "checkbox") {
            setdetail({ ...detail, [e.target.name]: e.target.checked })
        } else {
            setdetail({ ...detail, [e.target.name]: e.target.value })
        }



    }

    const submitdata = (e) => {
        e.preventDefault();
        console.log(detail);
    }

    return (
        <div className='formtestbody'>
            <form action="" style={{ width: "50%" }} onSubmit={submitdata} className='mx-auto formall'>
                <label>First Name:</label>
                <input type="text" name="firstname" onChange={Handler} className='form-control' /><br />
                <label>Last Name:</label>
                <input type="text" name="lastname" onChange={Handler} className='form-control' /><br />
                <label>Email:</label>
                <input type="email" name="email" onChange={Handler} className='form-control' /><br />
                <label>Password:</label>
                <input type="Password" name="pwd" onChange={Handler} className='form-control' /><br />
                <label>Confirm Password:</label>
                <input type="Password" name="pwd2" onChange={Handler} className='form-control' /><br />
                <label>Country:</label>
                <input type="text" name="country" onChange={Handler} className='form-control' /><br />

                <label>Birth date:</label><br />
                <select name="birthmonth" onChange={Handler} >
                    <option value="Month">Month</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
                <select name="birthdate" onChange={Handler}>
                    <option value="Day">Day</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <select name="birthyear" onChange={Handler}>
                    <option value="Year">Year</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select><br /><br />



                <input type="checkbox" name="checkvalue" onClick={Handler} />Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati porro quasi accusantium?<br />
                <input type="checkbox" name="checkvalue1" onClick={Handler} />Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.<br />

                <input type="submit" value="Next" className='form-control' />

            </form>
        </div >
    );
}

export default Formtest;
