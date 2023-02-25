import React from 'react'
function ServicePackagesForm() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 w-full'>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg'>
            <h2 className='text-2xl dark:text-teal-600 text-center font-extrabold'>SERVICE PACKAGES</h2>
            <div className="grid mt-5 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Package Name" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-400 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid mt-5 text-teal-600 text-sm font-bold">
            <textarea type="textarea" placeholder="Package Description" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid mt-5 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Service ID" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <button className='w-full my-5 py-2 bg-teal-600  text-white font-semibold rounded-lg' type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default ServicePackagesForm
