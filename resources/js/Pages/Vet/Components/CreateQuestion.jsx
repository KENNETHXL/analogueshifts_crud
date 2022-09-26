import React, { Component } from 'react'


export function CreateButton(){

  return(
      <div className='flex justify-end'>
        <button id='createBtn' className="flex justify-end item-end bg-yellow-300 text-gray-800 p-3 rounded font-semibold">
          Add Question
        </button>   
      </div>
  )
}


export default class CreateQuestion extends Component {

  componentDidMount(){

    const createBtn = document.querySelector('#createBtn')
    const createModal = document.querySelector('#createModal')
    const createCls = document.querySelector('#createCls')
    
    createBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      createModal.classList.remove('hidden')
    })
    
    createCls.addEventListener('click', (e)=>{
      e.preventDefault();
      createModal.classList.add('hidden')
    })

  }
  render() {
    return (
      <>  

        {/* <!-- Main modal --> */}
        <div id="createModal" className="hidden bg-gray-300 grid justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 bottom-0 right-0 left-0 z-[100] w-full md:inset-0 h-full">
          <div className="grid justify-center items-center relative p-4 w-full max-w-7xl h-full md:h-auto">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 py-9 px-2 md:px-16">
              <button id='createCls' type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                <span className="">X</span>
              </button>
              <form className=''>
                <input className="ml-2 p-2 outline-none border-b border-yellow-500 text-sm font-medium text-gray-700 w-80 md:w-[500px]" placeholder='Write Your Question Here and select the option with the correct answer' />
                <div className='grid gap-3 p-3'>
                  <div className="flex items-center mb-4">
                      <input id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <input className="ml-2 p-2 outline-none border-b border-yellow-500 text-sm font-medium text-gray-700" placeholder='option A' />
                  </div>
                  <div className="flex items-center mb-4">
                      <input id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <input className="ml-2 p-2 outline-none border-b border-yellow-500 text-sm font-medium text-gray-700" placeholder='option B' />
                  </div>
                  <div className="flex items-center mb-4">
                      <input id="disabled-radio-1" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-500 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <input className="ml-2 p-2 outline-none border-b border-yellow-500 text-sm font-medium text-gray-700" placeholder='option C' />
                  </div>
                  <div className="flex items-center mb-4">
                      <input id="disabled-radio-2" type="radio" value="" name="disabled-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <input className="ml-2 p-2 outline-none border-b border-yellow-500 text-sm font-medium text-gray-700" placeholder='option D' />
                  </div>
                </div>
                <div className='flex gap-3 justify-end'>
                   <button className='bg-yellow-300 p-3 rounded-lg'>submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </>
    )
  }
}

