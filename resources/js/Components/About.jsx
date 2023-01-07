import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div id='about' className='bg-black grid space-y-9 gap-5 px-3 md:px-20 py-28 relative'>
          <div className='flex justify-center md:h-[400px] md:w-[500px] md:justify-start'>
            <img className='h-80 w-80 md:h-[400px] md:w-[500px] rounded-lg' src='images/about.jpg' alt=''/>
          </div>
          <div className='flex flex-col gap-10 md:p-5 md:items-end md:absolute inset-y-20'>
            <div className='bg-white grid gap-5 md:w-3/5 rounded-lg shadow-lg p-4 md:p-9'>
              <h4 className='text-3xl text-yellow-500'>About Us</h4>
              <span className='text-2xl text-gray-700'>
                AnalogueShifts is a Project Management and Talent Acquisition Company. 
                Our mission is to solve the problem of cost for Startups and Large scale companies abroad by sourcing the best talents for clients. 
                We are equipped with the most talented work force across the globe and we are ready to work 24/7.
              </span>
            </div>
          </div>
        </div>

        <div className='grid gap-16 px-3 md:px-9 py-28'>
          <h3 className='flex justify-center text-2xl md:text-3xl text-yellow-700 font-bold'>Our Team</h3>
          <div className='grid justify-center'>
            <div className='grid justify-center md:grid-cols-3 gap-5'>
              <div className='grid justify-center rounded p-2 cursor-pointer relative'>
                <img src='images/ceo.jpeg' className='grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                <div className='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                  <span className='flex justify-center'>Kenneth Malaka</span>
                  <span className='flex justify-center text-yellow-500'>CEO</span>
                </div>
              </div>
              <div className='grid justify-center rounded p-2 cursor-pointer relative'>
                <img src='images/recruit.jpg' className='grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                <div className='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                  <span className='flex justify-center'>Regina Maduemezia</span>
                  <span className='flex justify-center text-yellow-500'>Technical Recruiter</span>
                </div>
              </div>
              <div className='grid justify-center rounded p-2 cursor-pointer relative'>
                <img src='images/cto.jpg' className='grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                <div className='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                  <span className='flex justify-center'>Hussein Alamutu</span>
                  <span className='flex justify-center text-yellow-500'>CTO</span>
                </div>
              </div>
              <div className='grid justify-center rounded p-2 cursor-pointer relative'>
                <img src='images/social.jpg' className='grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                <div className='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                  <span className='flex justify-center'>Temi Tori</span>
                  <span className='flex justify-center text-yellow-500'>Social media manager</span>
                </div>
              </div>
              <div className='grid justify-center rounded p-2 cursor-pointer relative'>
                <img src='images/dev.jpg' className='grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                <div className='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                  <span className='flex justify-center'>Teslim Abdulwahab</span>
                  <span className='flex justify-center text-yellow-500'>Developer</span>
                </div>
              </div>
              <div className='grid justify-center rounded p-2 cursor-pointer relative'>
                <img src='images/lawyer.jpeg' className='grid justify-center bg-gray-300 h-80 md:h-96 w-80 md:w-96 rounded-lg' alt='' />
                <div className='bg-white rounded-md grid justify-center py-3 px-2 gap-1 font-bold absolute inset-x-5 bottom-5'>
                  <span className='flex justify-center'>Nonye nwonsu</span>
                  <span className='flex justify-center text-yellow-500'>Lawyer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
