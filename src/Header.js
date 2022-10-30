import React, {useState} from 'react'
import {SlOptions} from 'react-icons/sl'
import {RiShareForwardLine} from 'react-icons/ri'

const Header = () => {
    const [slack, setSlack] = useState(false)
  return <>
    <header className="row px-5 pt-5">
        <nav className="header-data col-12 d-flex flex-column justify-content-center align-items-center position-relative">
            <img id='profile__img' className='rounded-circle img-fluid shadow-lg mb-3' src="./Assets/profile.jpg" alt="Flovian" style={{width:'8rem', height:'8rem', objectFit:'cover'}} />
            <p id='twitter' className='fs-3 text-dark fw-bold mb-0 pb-0'>FlovianOwiti</p>
            <p id='slack' type='button' className='fs-3 text-dark d-none' onClick={() => setSlack(!slack)}>{slack ? '*******' : 'FlovianOwiti'}</p>
            <SlOptions className='fs-1 d-sm-none p-1 rounded-circle text-muted position-absolute top-0 start-100 translate-middle' style={{marginTop:'2rem',marginLeft:'-8%', border:'0.1rem dotted rgba(0,0,0,0.2)'}}/>
            <RiShareForwardLine className='share-bar fs-1 d-none d-sm-block position-absolute top-0 start-100 translate-middle border p-2 rounded-5' style={{marginTop:'2rem',marginLeft:'-20%'}}/>
        </nav>
    </header>
  </>
}

export default Header