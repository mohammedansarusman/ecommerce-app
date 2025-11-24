import React from 'react'
import { fetchCategory } from '@/requests/request'

const Category = async() => {
    const result = await fetchCategory();
    console.log("result=>",result);
  return (
    <div>Category</div>
  )
}

export default Category