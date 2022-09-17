import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div id='about' className="grid justify-center md:grid-cols-5 gap-5 bg-yellow-50 p-2 md:p-20">
          <div className='grid justify-center md:col-span-2 bg-yellow-50 rounded p-1 space-y-5 rounded cursor-pointer'>
            <img className='grid justify-center w-80 h-96 bg-yellow-50 rounded-lg p-1 space-y-5 cursor-pointer' src='images/pexel.jpg' alt='' />
          </div>
          <div className='grid justify-center md:col-span-3 gap-2'>
            <h4 className='grid justify-center text-3xl text-yellow-500'>About Us</h4>
            <span className='grid justify-center text-center text-xl text-gray-700'>
              Analogue Shifts is a Project Management and Talent Acquisition Company. 
              Our mission is to solve the problem of cost for Startups and Large scale companies abroad by sourcing the best talents for clients. 
              We are equipped with the most talented work force across the globe and we are ready to work 24/7.
            </span>
          </div>
        </div>
        <div className='grid gap-16 px-3 md:px-16 py-28'>
          <h3 className='grid justify-center text-2xl md:text-3xl text-yellow-700 font-bold'>Our Team</h3>
          <div className='grid md:grid-cols-3 gap-2'>
            <div className='grid justify-center bg-yellow-50 rounded p-2 space-y-3 cursor-pointer'>
              <div className='grid justify-center'>
                <img src='images/ceo.jpeg' className='bg-gray-300 h-80 w-80 rounded-lg' alt='' />
              </div>
              <div className='grid justify-center gap-1 text-xl font-bold text-gray-700'>
                <span className='flex justify-center'>Kenneth Malaka</span>
                <span className='flex justify-center'>CEO</span>
              </div>
            </div>
            <div className='grid justify-center bg-yellow-50 rounded p-2 space-y-3 cursor-pointer'>
              <div className='grid justify-center'>
                <img src='images/recruit.jpg' className='bg-gray-300 h-80 w-80 rounded-lg' alt='' />
              </div>
              <div className='grid justify-center gap-1 text-xl font-bold text-gray-700'>
                <span className='flex justify-center'>Regina Maduemezia</span>
                <span className='flex justify-center'>Technical Recruiter</span>
              </div>
            </div>
            <div className='grid justify-center bg-yellow-50 rounded p-2 space-y-3 cursor-pointer'>
              <div className='grid justify-center'>
                <img src='images/cto.jpg' className='bg-gray-300 h-80 w-80 rounded-lg' alt='' />
              </div>
              <div className='grid justify-center gap-1 text-xl font-bold text-gray-700'>
                <span className='flex justify-center'>Hussein Alamutu</span>
                <span className='flex justify-center'>CTO</span>
              </div>
            </div>
            <div className='grid justify-center bg-yellow-50 rounded p-2 space-y-3 cursor-pointer'>
              <div className='grid justify-center'>
                <img src='images/social.jpg' className='bg-gray-300 h-80 w-80 rounded-lg' alt='' />
              </div>
              <div className='grid justify-center gap-1 text-xl font-bold text-gray-700'>
                <span className='flex justify-center'>Temi Tori</span>
                <span className='flex justify-center'>Social media manager</span>
              </div>
            </div>
            <div className='grid justify-center bg-yellow-50 rounded p-2 space-y-3 cursor-pointer'>
              <div className='grid justify-center'>
                <img src='images/dev.jpg' className='bg-gray-300 h-80 w-80 rounded-lg' alt='' />
              </div>
              <div className='grid justify-center gap-1 text-xl font-bold text-gray-700'>
                <span className='flex justify-center'>Teslim Abdulwahab</span>
                <span className='flex justify-center'>Developer</span>
              </div>
            </div>
            <div className='grid justify-center bg-yellow-50 rounded p-2 space-y-3 cursor-pointer'>
              <div className='grid justify-center'>
                <img src='images/lawyer.jpeg' className='bg-gray-300 h-80 w-80 rounded-lg' alt='' />
              </div>
              <div className='grid justify-center gap-1 text-xl font-bold text-gray-700'>
                <span className='flex justify-center'>Nonye nwonsu</span>
                <span className='flex justify-center'>Lawyer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
