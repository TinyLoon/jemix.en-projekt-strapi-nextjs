"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Testimonial, TestimonialAttributes } from "@/../next/types";
import { useTestimonialsSlider } from "@/../hooks/useTestimonialsSlider";
import { useLanguageStore } from "@/../store/useLanguageStore";
import Image from "next/image";

const TestimonialsSlider = () => {
  const currentLanguage = useLanguageStore((state) => state.language);
  const { data: testimonials, isLoading, error: isError } = useTestimonialsSlider(currentLanguage) as {
    data: Testimonial[] | null;
    isLoading: boolean;
    error: boolean;
  };

  if (isLoading) return <p>Loading testimonials...</p>;
  if (isError || !testimonials) return <p>Testimonials could not be loaded.</p>;

  return (
    <div className="w-full py-12">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {(testimonials ?? []).map(({ id, attributes }: { id: string; attributes: TestimonialAttributes }) => {
          const { Name, Company, Quote, Avatar } = attributes;
          const imageUrl = Avatar?.data?.attributes?.url;

          return (
            <SwiperSlide key={id}>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={Name}
                    width={80}
                    height={80}
                    className="mx-auto rounded-full mb-4"
                  />
                )}
                <blockquote className="italic text-gray-700 mb-2">“{Quote}”</blockquote>
                <p className="font-semibold">{Name}</p>
                <p className="text-sm text-gray-500">{Company}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialsSlider;