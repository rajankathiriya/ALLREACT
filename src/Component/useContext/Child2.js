import { React, useContext } from 'react';
import Child3 from './Child3';
import Language from './createContext';

const Child2 = () => {
    const { lan } = useContext(Language)

    const Data = {
        "english": {
            firstname: "Firstname",
            lastname: "Lastname"
        },
        "gujarati": {
            firstname: "પ્રથમ નામ",
            lastname: "છેલ્લું નામ"
        },
        "Marathi": {
            firstname: "पहिले नाव",
            lastname: "आडनाव"
        }
    }
    return (
        <div>

            <form>
                <label>{Data[lan].firstname}</label>
                <input type="text" />
                <label>{Data[lan].lastname}</label>
                <input type="text" />
            </form>
            <Child3 />
        </div>
    );
}

export default Child2;

