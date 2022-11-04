import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Error = () => {
  return <main className='row mx-0 my-3 align-items-center' style={{height:'60vh'}}>
    <div className='col-12 col-sm-6'>
        <code className='text-primary'>404 error</code>
        <h2>We can't find that page</h2>
        <p>Sorry, the page you are looking for doesn't exist</p>
        <div className="buttons d-flex flex-column flex-sm-row">
            <button className='goBack-btn btn btn-light'><BiArrowBack /> Go back</button>
            <Link to='/' className='goHome-btn btn btn-primary '>Take me home</Link>
        </div>
    </div>
  </main>
}

export default Error