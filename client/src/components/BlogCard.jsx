import React from 'react'
import { useNavigate } from 'react-router-dom';

export const BlogCard = ({blog}) => {

    const {title, description, category, image, _id, author} = blog;
    const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden 
    shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer'>
        <img src={image} alt="" className='aspect-video'/>
        <div className='flex items-center justify-between px-4 mt-4'>
            <span className='px-3 py-1 inline-block bg-primary/20 
            rounded-full text-primary text-xs'>{category}</span>
            <span className='text-xs text-gray-500 font-medium'>By {author}</span>
        </div>
        <div className='p-5'>
            <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
            <p className='mb-3 text-xs text-gray-600' dangerouslySetInnerHTML={{"__html": description.slice(0,80)}}></p>
        </div>
    </div>
  )
}
