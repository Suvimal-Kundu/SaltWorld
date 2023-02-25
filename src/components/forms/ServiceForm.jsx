import React from 'react'
function ServiceForm() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 w-full'>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg'>
            <h2 className='text-2xl dark:text-teal-600 text-center font-extrabold'>SERVICES</h2>
            <div className="grid mt-5 text-teal-600 text-sm font-bold">
                <input type="text" placeholder="Name" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-400 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5 text-teal-600 text-sm font-bold">
                <select className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required>
                <option>Resource Type</option>
                <option>Salt Cave</option>
                <option>Float</option>
                <option>Red Light</option>
                <option>Sauna</option>
                </select>
                <input type="time" placeholder="Duration" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid mt-5 text-teal-600 text-sm font-bold">
            <textarea type="textarea" placeholder="Description" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5 text-teal-600 text-sm font-bold">
                <input type="number" placeholder="Service Cost" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="number" placeholder="Selling Cost" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-5 text-teal-600 text-sm font-bold">
                <input type="number" placeholder="Tax Rate" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
                <input type="number" placeholder="Hsn Code" className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required/>
            </div>
            <div className="flex flex-cols-2 gap-5 justify-between mt-5 text-teal-600 text-sm font-bold">
                <select className='shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-teal-600 mb-3 leading-tight focus:outline-none focus:shadow-outline' required>
                <option>Resource Type</option>
                <option>Salt Cave</option>
                <option>Float</option>
                </select>
                <input class="mr-2 leading-tight" type="checkbox"/>
                <label>Include Tax</label>
            </div>
            <button className='w-full my-5 py-2 bg-teal-600  text-white font-semibold rounded-lg' type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default ServiceForm
