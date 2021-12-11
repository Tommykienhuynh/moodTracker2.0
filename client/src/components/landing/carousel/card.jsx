import React from 'react'
import "../landing.scss"

export default function Card({color, title, desc, picture}) {
    return (
        <div className="card shadow" style={{background: `${color}`}}>
        <div className="cardImgContainer ">
        <img className="cardImg" src={picture} alt="CardIMG" />
        </div>

             <div className="cardDesc" >
                
                 <h3> {title}</h3>
                 <p>
                     {desc}
                 </p>
             </div>
         </div>
    )
}
