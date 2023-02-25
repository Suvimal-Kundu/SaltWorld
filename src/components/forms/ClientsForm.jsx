import React from 'react'
function ClientsForm() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 w-full'>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg'>
            <h2 className='text-2xl dark:text-teal-600 text-center font-extrabold'>CLIENTS</h2>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="First Name" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="text" placeholder="Last Name" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Gender" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="date" placeholder="Date Of Birth" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="number" placeholder="Mobile Number" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="email" placeholder="Email" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="date" placeholder="Anniversary" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="text" placeholder="Occupation" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Client Source" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="text" placeholder="Client Type" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="PAN" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="text" placeholder="GST" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Company Legal Name" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="text" placeholder="Company Trade Name" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-3 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Billing Address" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="text" placeholder="Shipping Address" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="flex flex-cols-2 gap-2 mt-3 text-teal-600 text-sm font-semibold">
                <input class="mr-2 leading-tight" type="checkbox"/>
                <label>Email Notification</label>
                <input class="mr-2 leading-tight" type="checkbox"/>
                <label>Email Marketing Notification</label>
            </div>
            <button className='w-full my-3 py-2 bg-teal-600  text-white font-semibold rounded-lg' type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default ClientsForm
