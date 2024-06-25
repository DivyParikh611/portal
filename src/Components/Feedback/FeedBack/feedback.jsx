import React from 'react'

export default function RatingSection() {
  return (
    <>
      <h1 className='text-xl py-3 items-center'>Helped in relating the content to my job context - covered practical aspects along with the theory</h1>
      <StarsRow/>
      <h1 className='text-xl py-2'>How was the pace of the training?</h1>
      <StarsRow/>
      <h1 className='text-xl py-2'>The speaker's resolution of the queries raised during the session</h1>
      <StarsRow/>
      <h1 className='text-xl py-2'>The speaker's interaction with the participant as and when required</h1>
      <StarsRow/>
      <h1 className='text-xl py-2'>Information was presented in a clear, logical and structured manner</h1>
      <StarsRow/>
      <h1 className='text-xl py-2'>Speaker's command over the topic and the presentation</h1>
      <StarsRow/>
      <h1 className='text-xl py-2'>Speaker's communication of the concepts</h1>
      <StarsRow/>
    </>
  )
}

const StarsRow = ({ item, image }) => {
  return (
    <div class="flex">
      <i class="fas fa-star text-gray-400 text-xl cursor-pointer star"></i>
      <i class="fas fa-star text-gray-400 text-xl cursor-pointer star"></i>
      <i class="fas fa-star text-gray-400 text-xl cursor-pointer star"></i>
      <i class="fas fa-star text-gray-400 text-xl cursor-pointer star"></i>
      <i class="fas fa-star text-gray-400 text-xl cursor-pointer star"></i>
    </div>
  );
}
