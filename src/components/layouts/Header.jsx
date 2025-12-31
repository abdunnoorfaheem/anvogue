import React from 'react';
import Container from '../Container';
import Image from '../Image';
import Logo from "/src/assets/logo.png";
import { Link } from 'react-router-dom';
import { CiSearch,CiUser,CiHeart   } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <section>
        <Container>
            <div className="flex justify-between items-center py-[16px]">
                <div className="">
                    <Image ImgSrc={Logo} className=""/>
                </div>
                <div className="">
                    <ul className='flex justify-between items-center gap-x-6'>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link>Demo</Link></li>
                        <li><Link>features</Link></li>
                        <li><Link to={"/shop"}>Shop</Link></li>
                        <li><Link>Product</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link to={""}>Pages</Link></li>
                    </ul>
                </div>
                <div className="">
                    <div className="flex gap-x-4 text-2xl">
                       <CiSearch/>
                       <CiUser />
                       <CiHeart />
                       <HiOutlineShoppingBag/>
                    </div>
                </div>
            </div>
        </Container>
      </section>
    </>
  )
}

export default Header
