import React from 'react'
import { Product } from '@/typing'
import Image from 'next/image'

type Props = {
    product: Product
}
const ProductCard = ({product}: Props) => {
    const num = Math.round(product.rating.rate)
    const ratingArray = new Array(num).fill(0);

  return (
    <div className='p-4'>
        <div className='w-[200px] h-[150px] flex flex-col justify-center items-center'>
            <Image src={product.image} alt="product" width={0} height={0} sizes={"100vh"} className='w-[80%] h-[80%] object-contain'  />
            <p className='mt-5 text-xs capitalize text-gray-600'>{product.category}</p>
            
        </div>
    </div>
  )
}

export default ProductCard