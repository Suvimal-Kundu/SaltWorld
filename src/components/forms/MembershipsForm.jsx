import React from 'react'
function MembershipsForm() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 w-full'>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg'>
            <h2 className='text-2xl dark:text-teal-600 text-center font-extrabold'>MEMBERSHIPS</h2>
            <div className="grid mt-5 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Membership Name" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-400 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Service Package" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="text" placeholder="Service ID" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid mt-5 text-teal-600 text-sm font-bold">
            <textarea type="textarea" placeholder="Membership Description" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-5 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Session Type" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="number" placeholder="Number of Sessions" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="number" placeholder="Validity" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5 text-teal-600 text-sm font-bold">
                <input type="number" placeholder="Original Price" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="number" placeholder="Selling Price" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5 text-teal-600 text-sm font-bold">
                <input type="number" placeholder="Tax Rate" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="number" placeholder="Hsn Code" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <button className='w-full my-5 py-2 bg-teal-600  text-white font-semibold rounded-lg' type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default MembershipsForm
