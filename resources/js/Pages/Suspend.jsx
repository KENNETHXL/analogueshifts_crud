import Guest from '@/Layouts/GuestLayout'
import React, { Component } from 'react'

export default class Construction extends Component {
  render() {
    return (
      <Guest>
        <div className='grid justify-center items-center'>
          <span className='text-center'>sorry your account has been suspended, please contact the admistrator or</span>
          <a className='text-center underline' href='mailto: hello@analogueshifts.com'>mail: hello@analogueshifts.com</a>
        </div>
      </Guest>
    )
  }
}
