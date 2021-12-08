import React from "react"

export default function Card(props){
    //console.log(props) - helps show properties3

    return(
    <>
        <div className="travel--card">
            <div class="card--photo">
                <img src={props.item.imageSrc} className="card--img" alt="" />
            </div>

            <div className="travel--details">
                <div className="location--info">
                    <span className="country">📍 {props.item.location.toUpperCase()}</span>
                    <span>{<a target="_blank" href={props.item.googleMapsUrl}>View on Google Maps</a>}</span>
                </div>
                <h1 className="place"> {props.item.title} </h1>
                <p className="date"> {props.item.startDate} - {props.item.endDate} </p>
                <p className="description"> {props.item.description}</p>
            </div>

        </div>
        <hr></hr>
    </>
    )
}