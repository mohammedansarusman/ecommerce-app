import { ShoppingBagIcon } from 'lucide-react'
import React from 'react'

const ShoppingCartButton = () => {
  return (
    <div className='relative w-6 h-6'>
        <span className='absolute -top-3 -right-2 w-5 h-5 p-1 bg-red-400 text-white rounded-full flex items-center justify-center'>7</span>
        <ShoppingBagIcon className='cursor-pointer size-6'/>
    </div>
  )
}

export default ShoppingCartButton