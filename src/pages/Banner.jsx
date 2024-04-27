import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Banner() {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                navigation={false}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={
                    {delay:2000}
                }
            >
                <SwiperSlide>
                    <div className='h-[88vh] md:h-[84vh]'>
                        <div className="bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('https://i.ibb.co/pnLhf4g/img-3.jpg')] h-full bg-cover bg-no-repeat flex flex-col justify-center items-center space-y-5 rounded-xl">
                            <h1 className='text-3xl md:text-4xl text-center lg:text-5xl font-bold text-white'>Lets hunt for your dream residence</h1>
                            <p className='text-white md:text-xl md:w-[80%] lg:w-[50%] text-center'>
                                Explore our range of beautiful properties with the addition of
                                separate accommodation suitable for you.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[88vh] md:h-[84vh]'>
                        <div className="bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('https://i.ibb.co/hc62VWP/img2.jpg')] h-full bg-cover bg-no-repeat flex flex-col justify-center items-center space-y-5 rounded-xl">
                            <h1 className='text-3xl md:text-4xl text-center lg:text-5xl font-bold text-white'>Lets hunt for your dream residence</h1>
                            <p className='text-white md:text-xl md:w-[80%] lg:w-[50%] text-center'>
                                Explore our range of beautiful properties with the addition of
                                separate accommodation suitable for you.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[88vh] md:h-[84vh]'>
                        <div className="bg-[linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('https://i.ibb.co/dcNpb2q/img1.jpg')] h-full bg-cover bg-no-repeat flex flex-col justify-center items-center space-y-5 rounded-xl">
                            <h1 className='text-3xl md:text-4xl text-center lg:text-5xl font-bold text-white'>Lets hunt for your dream residence</h1>
                            <p className='text-white md:text-xl md:w-[80%] lg:w-[50%] text-center'>
                                Explore our range of beautiful properties with the addition of
                                separate accommodation suitable for you.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}