
import { React, useMemo, useState } from 'react'

export default function Reactusememo(props) {
    const [show, setshow] = useState(false);

    const truevalue = useMemo(() => {
        console.log("Data Displeyed...");
        return props.text.slice(0, 30).concat('...')
    }, [])
    return (
        <div>
            <p onClick={() => { setshow(!show) }}>
                {show ? props.text : truevalue}
            </p>
        </div>
    )
}
