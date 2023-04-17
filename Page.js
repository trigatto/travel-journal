import React from 'react'
import Header from './Header'
import Main from './Main'
import data from './data'

export default function Page(){
    const places = data.map(place =>{
        return (
            <Main
                key={place.id}
                {...place}
            />
        )
        
    })
    console.log(places)
    return (
        <div className='page'>
            <Header/>
            <section>
                {places}
            </section>
        </div>)
}
