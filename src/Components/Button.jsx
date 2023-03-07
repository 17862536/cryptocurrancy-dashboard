import React from 'react'

function button() {
  const  daySet =['day','W','M','3M','Y']



  return (
    <div>
        <div className=' pl-20 grid grid-cols-2   justify-centre   space-x-6 lg:space-12 xl:px-12 py-5 uppercase '>
          <div className='grid  grid-cols-5 xl:ml-[40%]'>
          {daySet.map((day)=>{
            return(<div className=' mx-20 grid justify-centre text-xl text-items-centre h-10 w-10 bg-red-700 rounded-lg shadow-x1 hover:bg-black hover:text-white '><button>{day}</button></div>)
          })}
        </div>
        <div className='flex flex-wrap'>
        <div>list</div>
        <div>list</div>

        </div>
        </div>
      
    </div>
  )
}

export default button

