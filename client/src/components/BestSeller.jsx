import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
  const {products} = useAppContext();
  return (
    <div className='mt-16'>
      <p className='text-2x1 md:text-3x1 font-medium'>Best Sellers</p>
      <div className='flex justify-center items-start flex-wrap gap-2 md:gap-4 mt-6 mx[-50px] lg:mx-[-80px]'>
        {products.filter((product) => product.inStock).slice(0,5).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        
      </div>
    </div>
    
  )
}

export default BestSeller
