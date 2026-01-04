import React from 'react';
import Image from './Image';


const Products = ({ProductImg,productTitle,productPrice,productDiscount}) => {
  return (
    <>
      <div className="rounded-2xl py-2 shadow-2xl px-2">
        <div className="">
            <Image ImgSrc={ProductImg}/>
        </div>
        <div className="">
            <h4 className='text-[18px] font-bold'>{productTitle}</h4>
            <div className="flex gap-x-5">
                <h5 className='font-medium'>Price : {productPrice}$</h5>
                <h6>Discount : {productDiscount}%</h6>
            </div>
            <div className="">
                <button className='text-2xl font-bold bg-amber-100 w-full py-2 rounded-3xl my-2'>Add to Cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Products
