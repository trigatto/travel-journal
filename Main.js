import React from 'react'

export default function Main(props){
    return(
        <main>
                <div className='container'>
                    <img src={props.imageUrl} className='location-image'/>
                    <div className='info-block'>
                        <div className='info-text'>
                            <img src='./img/location.png' className='location-icon'/>
                            <h3 className='location-title'>{props.location}</h3>
                            <a className='location-title google-link' href={props.googleMapsUrl}>View on Google Maps</a>
                        </div>
                    
                    <h1>{props.title}</h1>
                    <h3 className='dates'>{props.startDate} - {props.endDate}</h3>
                    <p>{props.description}</p>
                    </div>
                </div>
        </main>
    )
}