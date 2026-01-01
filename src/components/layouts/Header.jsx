import React from 'react';
import Container from '../Container';
import Image from '../Image';
import Logo from "/src/assets/logo.png";
import { Link } from 'react-router-dom';
import { CiSearch, CiUser, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slide from "/src/assets/slick.png"

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <section className='bg-[url("/src/assets/bgOne.png")] h-213 bg-no-repeat bg-center bg-cover'>
        <Container>
          <div className="flex justify-between items-center py-4">
            <div className="">
              <Image ImgSrc={Logo} className="" />
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
                <CiSearch />
                <CiUser />
                <CiHeart />
                <HiOutlineShoppingBag />
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <Link to={"/"}>
            <div className="slider-container pt-32">
              <Slider {...settings}>
                <div>
                  <Image ImgSrc={Slide} className={"py-30"} />
                </div>
                <div>
                  <Image ImgSrc={Slide} />
                </div>
                <div>
                  <Image ImgSrc={Slide} />
                </div>
                <div>
                  <Image ImgSrc={Slide} />
                </div>
                <div>
                  <Image ImgSrc={Slide} />
                </div>
                <div>
                  <Image ImgSrc={Slide} />
                </div>
              </Slider>
            </div>
          </Link>
        </Container>
      </section>
    </>
  )
}

export default Header
