import Guest from '@/Layouts/GuestLayout'
import React, { Component } from 'react'

export default class Construction extends Component {
  render() {
    return (
      <Guest>
        <div className='grid justify-center items-center uppercase'>
          <span className='text-center'>sorry this page is under Construction</span>
        </div>
      </Guest>
    )
  }
}
