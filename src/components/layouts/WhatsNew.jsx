import React, { useState } from 'react'
import Container from '../Container'
import Products from '../Products'
import axios from 'axios';

const WhatsNew = () => {
    let [product,setProduct]=useState([]);

    async function viewData(){
      let data =await axios.get("https://dummyjson.com/products");
      setProduct(data.data.products);
         
    }
    viewData();
    return (
        <>
            <section>
                <Container>
                    <div className="text-center">
                        <h3 className='text-[#1F1F1F] text-2xl font-bold text-center pt-6'>What's new</h3>
                        <div className="">
                            <ul className='flex justify-center gap-x-6 py-3 text-[#696C70]'>
                                <li>Tops</li>
                                <li>Accessories</li>
                                <li>Dress</li>
                                <li>Short</li>
                                <li>Shirt</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-y-6 gap-x-2">
                        {
                            product.map((item)=>(
                                <div className="">
                                    <Products key={item.id} ProductImg={item.thumbnail} productTitle={item.title} productPrice={item.price} productDiscount={item.discountPercentage}/>
                                </div>
                            ))
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}

export default WhatsNew
