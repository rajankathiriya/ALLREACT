import React, { useRef } from 'react'
import Audio from './Audio/dummy audio.mp3.mp3'
import './Style.css'

export default function AudioTask() {

    const myAudio = useRef()
    const buttond = useRef()

    const myClick = () => {
        if (!buttond.current.classList.contains('slide')) {
            buttond.current.classList.add("slide")
            myAudio.current.play()
        } else {
            buttond.current.classList.remove("slide")
            myAudio.current.pause()
        }
    }
    return (
        <header>
            <audio ref={myAudio} className='audio-container'   >
                <source src={Audio} type="audio/mp3" />
            </audio>
            <h1>Audio</h1>


            {/* <label class="switch" ref={button}>
                <input type="checkbox" checked onClick={myClick} />
                <span class="slider round"></span>
            </label> */}
            <button className="switch-btn " ref={buttond} onClick={myClick}>
                <span>
                    play
                </span>
                <span>
                    pause
                </span>
                <span className="switch"></span>
            </button>



        </header>
    )
}


//Example-2 in from

// import React, { useRef, useState } from 'react'

// export default function MyFormUncontroll() {


//     console.log("This is the rerender");

//     const [session,setSession] = useState('');
//    const data = useRef();

//    const displayValue = ()=> {

//     console.log(data.current.value);
//    }

//    const myHandle = (e)=> {

//     setSession(e.target.value);
//    }
//   return (
//     <div>

//         <input type="text" onChange={myHandle}/>
//         <input type="text" ref={data} />
//         <input type="button" value="save"  onClick={displayValue}/>
//     </div>
//   )
// }