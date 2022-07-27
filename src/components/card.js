import React from 'react'
import loca from '../images/loca.svg'

export default function Card(props){

    return (
        <div className='container col-6  mt-4 d-flex justify-content-center align-items-center'>
        <div className='border-0 row align-items-center h-100'>
            <div className='col-4 '>
            <img src={props.item.photo} className='img rounded' height={280} width='100%' alt='alt txt'></img>
            </div>
            <div className='col ms-3  h-100'>
                <div className='row align-baseline'>
                    <div className='col-auto'>
                    <img src={loca} alt='location' className='img' height={15} width={15}></img>
                    <span className='col-auto text-uppercase' style={{'letter-spacing': '3px'}}> {props.item.location}</span>
                    </div>
                    <span className='col-auto text-light text-underline'>
                        <a href={props.item.gMap} className='link-secondary'>View on Google Maps</a>
                    </span>
                </div>
                <div className='col-auto'>
                <div className=' text-start '>
                    <span className='fw-bold fs-2'> {props.item.title}</span>
                </div>
                <div className=' text-start'>
                    <span className='fw-bold fs-6 pt-2'> {props.item.start_date + ' - ' + props.item.end_date}</span>
                </div>
                <div className='text-start'>
                    <p className='fs-6' style={{'maxWidth': '80%'}}> {props.item.description}</p>
                </div>
                </div>
                </div>
                <div className='pt-3'>
                <hr size="1px" color='#F5F5F5' ></hr>
                </div>
            </div>
            </div>

    )
}