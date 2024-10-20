'use client'; // Ensure this is a client component
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Pagination module styles
import 'swiper/css/autoplay'; // Autoplay module styles

// Import Swiper and SwiperSlide components directly
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

export default function Home() {
  const slidesContent = [
    {
      title: "Discover and Share",
      description: "Welcome to AgroDaily, your all-in-one AI-powered agricultural app. Our integrated e-commerce platform allows farmers to easily buy and sell quality products.",
      buttonText: "Get started",
    },
    {
      title: "Connect with Experts",
      description: "Join a vibrant community of agricultural experts and farmers to share knowledge and get real-time advice to improve your farm practices.",
      buttonText: "Join the Forum",
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage the power of AI to receive personalized insights and recommendations based on your farm data and environmental conditions.",
      buttonText: "Explore AI Tools",
    },
    {
      title: "Shop and Sell",
      description: "Access an integrated marketplace to buy and sell agricultural products seamlessly. Reach a broader market with AgroDaily.",
      buttonText: "Visit Marketplace",
    },
  ];

  return (
    <section className="flex justify-center items-center p-4 h-screen home_section">
      {/* Swiper Carousel */}
      <div className="w-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination', // Custom class for pagination dots
          }}
          modules={[Autoplay, Pagination]}
        >
          {slidesContent.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center h-full">
                <h3 className="head_text green_gradient mb-4">{slide.title}</h3>
                <p className="desc mb-4">{slide.description}</p>
                <a href="#" className="button mt-4">{slide.buttonText}</a>
              </div>
            </SwiperSlide>
          ))}
          {/* Custom pagination */}
          <div className="swiper-pagination mt-10"></div>
        </Swiper>
      </div>
    </section>
  );
}
