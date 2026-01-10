import React from 'react';
import Image from './Image';
import { useDispatch } from 'react-redux';
import { addtocart } from '../slices/addToCartSlice';


const Products = ({ProductImg,productTitle,productPrice,productDiscount}) => {
  const dispatch = useDispatch();
  let handleAddToCart=()=>{
    
    dispatch(
      addtocart(
        {

        title: productTitle,
        img: ProductImg,
        price: productPrice,
        discount: productDiscount,
        quantity:1
      }
      )
    )
    
  }
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
                <button className='text-2xl font-bold bg-amber-100 w-full py-2 rounded-3xl my-2' onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Products
