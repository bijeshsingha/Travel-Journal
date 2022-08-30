import React from "react"

export default function Card(prop) {
    return (
        <div className="card-section" >
            <img src={prop.imageUrl} alt="Mount-Fiji" className="card-img" />
            <div className="card-details" >
                <div className="location-detail">
                <img src="./images/pin.svg" height="10px"/>
                    <span className="location" >{prop.location}</span>
                    <a href={prop.googleMapsUrl} className="map-link"><span>View on Google Maps</span></a>
                </div>
                <div className="text-content">
                    <h1 className="title">{prop.title}</h1>
                    <p className="dates" >{prop.startDate} - {prop.endDate}</p>
                    <p className="desc" >{prop.description}</p>
                </div>
            </div>
        </div>
    )
}