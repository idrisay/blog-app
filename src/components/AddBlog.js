import React from 'react'

const AddBlog = () => {
  return (
    <div className='flex gap-2 flex-col items-center m-2 border-2 border-red-300'>
        <input className='w-60 p-2'  type="text" placeholder='Blog Title' />
        <textarea  className='w-60 p-2' type="text" placeholder='Blog Content' />
        <input className='w-60 p-2'  type="text" placeholder='Name' />
        <input className='w-60 p-2'  type="text" placeholder='Lastname' />
        <button>Add Blog</button>
    </div>
  )
}

export default AddBlog