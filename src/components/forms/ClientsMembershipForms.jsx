import React from 'react'
function ClientsMembershipForms() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 w-full'>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg'>
            <h2 className='text-2xl dark:text-teal-600 text-center font-extrabold'>CLIENTS</h2>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Client Id" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="text" placeholder="Membership Id" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="date" placeholder="Membership Purchase Date" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="date" placeholder="Membership Start Date" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="date" placeholder="Membership Original End Date" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="date" placeholder="Membership Actual End Date" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="date" placeholder="Membership Pause Date" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="date" placeholder="Membership Resume Date" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-1 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Membership Status" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Branch Id" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="text" placeholder="Extension Count" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <button className='w-full my-3 py-2 bg-teal-600  text-white font-semibold rounded-lg' type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default ClientsMembershipForms
