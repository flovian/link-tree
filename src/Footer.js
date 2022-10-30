import React from 'react'

const Footer = () => {
  return <>
    <footer className='row mx-0 border-top border-secondary p-2' style={{marginTop:'5rem'}}>
        <section className='col-10 w-100 pt-3 d-flex flex-column flex-sm-row justify-content-around align-items-center'>
            <div className='fs-5 col-12 col-sm-4 fw-bold flex-shrink-1'>Zuri<span className='fs-3 text-danger rounded-circle'>.</span>Internship</div>
            <code className='col-12 col-sm-6 fs-8 text-start text-sm-center flex-grow-1 ms-2 mb-2 text-secondary'>HNG Internship 9 Frontend Task</code>
            <div className='col-12 col-sm-3 d-flex align-items-center justify-content-start justify-content-sm-end h-100 flex-shrink-1'>
                <img src="https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1" alt="ingressive" style={{width:'8rem'}} />
            </div>
        </section>
    </footer>
  </>
}

export default Footer