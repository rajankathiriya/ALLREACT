import { React, useContext } from 'react'
import Language from './createContext';

export default function Header() {
    const { lan, setlan } = useContext(Language);

    const myHandler = (e) => {
        setlan(e.target.value)
    }
    return (
        <div>
            <select onChange={myHandler}>
                <option value="english">English</option>
                <option value="gujarati">Gujarati</option>
                <option value="Marathi">Marathi</option>
            </select>
        </div>
    )
}
