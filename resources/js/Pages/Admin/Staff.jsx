import Guest from '@/Layouts/GuestLayout'
import React, { Component } from 'react'

export default class Construction extends Component {
  render() {
    return (
      <Guest>
        <div className='grid gap-3 justify-center items-center uppercase'>
          <span className='text-center'>sorry you do not have access to this page, contact the admin for more details</span>
        </div>
      </Guest>
    )
  }
}
