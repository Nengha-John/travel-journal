import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import svg from '../images/earth.svg'

export default function Header(){
    return (    
        <div>
            <nav className='p-3' style={{ backgroundColor: '#F55A5A'}}>
                <div className=' row d-flex justify-content-center align-items-center'>
                    <img src={svg} alt='Earth logo' className='img col-auto' height={20} width={20}></img>
                    <span className='col-auto text-white fw-bold'>My Travel Journal</span>
                </div>
            </nav>
        </div>
    )
}