import React from 'react'

export default function RatingSection() {
  return (
    <>
      <ul style={{listStyleType:"disc"}}>
        <li className='py-3'>
          <div className="flex items-center justify-between">
            <h1 className='text-xl py-2 w-2/3'>Helped in relating the content to my job context - covered practical aspects along with the theory</h1>
            <StarsRow />
          </div>
        </li>
        <li className='py-3'>
          <div className="flex items-center justify-between">
            <h1 className='text-xl py-2 w-2/3'>How comfortable was the pace of the training?</h1>
            <StarsRow />
          </div>
        </li>
        <li className='py-3'>
          <div className="flex items-center justify-between">
            <h1 className='text-xl py-2 w-2/3'>Did the trainer resolve all queries timely during the session?</h1>
            <StarsRow />
          </div>
        </li>
        <li className='py-3'>
          <div className="flex items-center justify-between">
            <h1 className='text-xl py-2 w-2/3'>The trainer's interaction with you, as and when required?</h1>
            <StarsRow />
          </div>
        </li>
        <li className='py-3'>
          <div className="flex items-center justify-between">
            <h1 className='text-xl py-2 w-2/3'>Information was presented in a clear, logical and structured manner</h1>
            <StarsRow />
          </div>
        </li>
        <li className='py-3'>
          <div className="flex items-center justify-between">
            <h1 className='text-xl py-2 w-2/3'>Did you find the speaker to have competent skills, and command over the topic?</h1>
            <StarsRow />
          </div>
        </li>
      </ul>
    </>
  )
}

const StarsRow = ({}) => {
  return (
    <div class="flex">
      <i class="fas fa-star text-gray-300 text-xl cursor-pointer star"></i>
      <i class="fas fa-star text-gray-300 text-xl cursor-pointer star"></i>
      <i class="fas fa-star text-gray-300 text-xl cursor-pointer star"></i>
      <i class="fas fa-star text-gray-300 text-xl cursor-pointer star"></i>
      <i class="fas fa-star text-gray-300 text-xl cursor-pointer star"></i>
    </div>
  );
}
