import React from 'react';
import reviews from './Data';
import { useState } from 'react';
import './Styles.css'
 

export default function Scrollbar() {
    const [index, setIndex] = useState(0);

    const prev = () => { 
         if (index<=reviews.length-1) {
            setIndex(0)
         } else {
            setIndex(index-1)
         }
    }

    const next = () => {
        if (index>=reviews.length-1) {
            setIndex(0)
        } else {
            setIndex(index+1)
        }

    }
  return (
    <>
    <main>
                        <section className="container"> 
                            <article className="review">
                                <div className="img-container">
                                    <img src={reviews[index].img} id="person-img" alt="" />
                                </div>
                                <h4 id="author">${reviews[index].name} </h4>
                                <p id="job">${reviews[index].job}</p>
                                <p id="info">
                                    ${reviews[index].text}
                                </p>
                                <div className="button-container">
                                    <button className="prev-btn" onClick={prev} >
                                        <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                    </button>
                                    <button className="next-btn" onClick={next}>
                                        <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                    </button>
                                </div>
                                <button className="random-btn">surprise me</button>
                            </article>
                        </section>
                    </main>  
    </>
  )
}

 
