import React, { Component } from 'react'
import { AiFillPieChart } from 'react-icons/ai'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['A', 'B', 'C', 'D'],
  datasets: [
    {
      label: '#',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 3,
    },
  ],
};



export function PieData(){
    return <Pie data={data} />;   
} 

export default class Charts extends Component {

    componentDidMount(){

        const chartModal = document.querySelector('#chartModal')
        const chartOpen = document.querySelector('#chartOpen')
        const chartClose = document.querySelector('#chartClose')
        
        chartOpen.addEventListener('click', (e)=>{
            e.preventDefault();
            chartModal.classList.remove('hidden')
        })
        
        chartClose.addEventListener('click', (e)=>{
            e.preventDefault();
            chartModal.classList.add('hidden')
        })

        
    }
  render() {
    return (
      <div>  
        <button id='chartOpen' className='flex items-center text-white justify-center gap-1 bg-yellow-500 p-3 rounded-lg mt-5 absolute bottom-3 right-3 font-bold'>
            <AiFillPieChart className='h-7 w-7' />
            <span>Charts</span>                    
        </button>
        <div id="chartModal" className="hidden grid justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[100] w-full md:inset-0 h-modal md:h-full">
            <div className="relative w-96 max-w-7xl h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative grid items-center mt-32 md:mt-0 bg-white rounded-lg shadow">
                    {/* <!-- Modal header --> */}
                    <div className="flex justify-between items-start p-4 rounded-t border-b">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Full-Stack Developer 
                        </h3>
                        <button  id='chartClose' type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                            <span className="text-xl font-bold">X</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <div className="p-6 space-y-6">
                        <PieData />
                    </div>
                    {/* <!-- Modal footer --> */}
                    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200">
                        <button data-modal-toggle="defaultModal" type="button" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Print</button>
                        <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Share</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
