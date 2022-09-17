

function Companies() {
    return ( 
        <div className="grid justify-center p-5 md:p-20 bg-yellow-50 space-y-10">
            
            <p className="text-center text-3xl text-yellow-500 uppercase">
                Collaboration
            </p>

            <div className="companies flex justify-center gap-16 flex-wrap">
                <div className="grid gap-3 justify-center">
                    <img className="w-24 h-24" src="/images/ajolla.png" alt="" />
                    {/* <span className="flex justify-center items-end font-bold text-xl text-gray-700">Ajolla.com</span> */}
                </div>
                <div className="grid gap-1 justify-center">
                    <span className="flex items-center bold text-gray-500 text-5xl">charisol.</span>
                    {/* <span className="flex justify-center items-end font-bold text-xl text-gray-700">charisol.io</span> */}
                </div>
            </div>

        </div>
     );
}

export default Companies;