'use client'; // Ensure this is a client component
import { useState } from 'react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination module styles
import 'swiper/css/autoplay'; // Autoplay module styles
import Image from 'next/image';

// Import Swiper and SwiperSlide components directly
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

export default function Home() {
  const slidesContent = [
    {
      title: "Discover and Share",
      description: "Welcome to AgroDaily, your all-in-one AI-powered agricultural app. Our integrated e-commerce platform allows farmers to easily buy and sell quality products.",
      buttonText: "Get started",
      image: "/assets/img/bg.jpg",
    },
    {
      title: "Connect with Experts",
      description: "Join a vibrant community of agricultural experts and farmers to share knowledge and get real-time advice to improve your farm practices.",
      buttonText: "Join the Forum",
      image: "/assets/img/bg2.jpg",
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage the power of AI to receive personalized insights and recommendations based on your farm data and environmental conditions.",
      buttonText: "Explore AI Tools",
      image: "/assets/img/bg3.jpg",
    },
    {
      title: "Shop and Sell",
      description: "Access an integrated marketplace to buy and sell agricultural products seamlessly. Reach a broader market with AgroDaily.",
      buttonText: "Visit Marketplace",
      image: "/assets/img/bg4.jpg",
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center home_section">
      {/* Text Section */}
      <div className="flex flex-col justify-center p-4">
        <h3 className="head_text text-left green_gradient">
          {slidesContent[activeSlideIndex].title}
        </h3>
        <p className="desc text-left">
          {slidesContent[activeSlideIndex].description}
        </p>
        <a href="#" className="button mt-4">{slidesContent[activeSlideIndex].buttonText}</a>
      </div>

      {/* Swiper Carousel */}
      <div className="flex justify-center p-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Enable autoplay
          pagination={{ clickable: true }} // Enable pagination
          onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
          modules={[Autoplay, Pagination]} // Register modules
        >
          {slidesContent.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                width={500}
                height={300}
                className="rounded-md bg_img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
