

function Companies() {
    return ( 
        <div className="grid justify-center p-5 md:p-20 bg-white space-y-10">
            
            <p className="text-center text-2xl md:text-3xl text-yellow-500 uppercase">
                In Collaboration with
            </p>

            <div className="companies flex justify-center gap-16 flex-wrap">
                <div className="bg-yellow-200 grid gap-3 justify-center py-5 px-9 rounded-md shadow-2xl shadow-yellow-900">
                    <div className="bg-yellow-200 grid gap-3 justify-center py-5 px-9 rounded-md shadow-2xl shadow-yellow-900">
                        <img className="w-24 h-24" src="/images/ajolla.png" alt="" />
                    </div>
                    <span className="flex justify-center items-end font-bold text-xl text-yellow-900 pt-1">Ajolla</span>
                </div>
                <div className="bg-yellow-200 grid gap-1 justify-center py-5 px-9 rounded-md shadow-2xl shadow-yellow-900">
                    <div className="bg-yellow-200 grid gap-1 justify-center py-5 px-9 rounded-md shadow-2xl shadow-yellow-900">
                        <span className="flex items-center bold text-gray-500 text-5xl">charisol</span>
                    </div>
                    <span className="flex justify-center items-end font-bold text-xl text-yellow-900 pt-1">charisol</span>
                </div>
            </div>

        </div>
     );
}

export default Companies;