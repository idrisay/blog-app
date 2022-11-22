import React from 'react'

const AddBlog = ({handleSubmit}) => {
   

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 flex-col items-center p-4 m-2 border-2 border-red-300'>
        <input required className='w-60 p-2'  type="text" placeholder='Blog Title' />
        <textarea required  className='w-60 p-2' type="text" placeholder='Blog Content' />
        <input required className='w-60 p-2'  type="text" placeholder='Name' />
        <input required className='w-60 p-2'  type="text" placeholder='Lastname' />
        <input required className='w-60 p-2'  type="text" placeholder='image url' />
        <button type='submit' className='bg-green-200 w-full p-2 rounded-lg'>Add Blog</button>
    </form>
  )
}

export default AddBlog