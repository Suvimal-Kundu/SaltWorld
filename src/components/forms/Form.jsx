import React from 'react'
function Form() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-1 w-full'>
      <div className='flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-white p-8 px-8 rounded-lg'>
            <h2 className='text-2xl dark:text-teal-600 text-center'>NEW CUSTOMER</h2>
            <div className='flex flex-col text-teal-600 py-2' type={"text"} >
                <label>First Name</label>
                <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:bg-gray-300 focus:outline-teal-600' required/>
            </div>
            <div className='flex flex-col text-teal-600 py-2' type={"text"} >
                <label>Last Name</label><textarea></textarea>
            </div>
            <div className='flex flex-col text-teal-600 py-2' type={"email"} >
                <label>Email</label>
                <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:bg-gray-300 focus:outline-teal-600' required/>
            </div>
            <div className='flex flex-col text-teal-600 py-2' type={"text"} >
                <label>Address</label>
                <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:bg-gray-300 focus:outline-teal-600' required/>
            </div>
            <button className='w-full my-5 py-2 bg-teal-600  text-white font-semibold rounded-lg' type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Form
