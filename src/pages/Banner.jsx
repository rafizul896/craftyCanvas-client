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
                    { delay: 2000 }
                }
            >
                <SwiperSlide>
                    <div className='h-[88vh] md:h-[84vh] rounded-xl'>
                        <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.1)),url('https://i.imghippo.com/files/LChgw1714436085.avif')] h-full bg-cover bg-no-repeat flex flex-col justify-center items-center space-y-5 rounded-xl">
                            <h1 className='text-3xl md:text-4xl text-center lg:text-5xl font-bold text-white'>Buy original paintings</h1>
                            <p className='text-white md:text-xl md:w-[80%] lg:w-[50%] text-center'>
                                Let your walls do the talking with unique, real and original paintings for sale online and direct from the worlds most talented independent painters.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[88vh] md:h-[84vh] rounded-xl'>
                        <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.4)),url('https://i.imghippo.com/files/lRJSS1714437049.jpg')] h-full bg-cover bg-no-repeat flex flex-col justify-center items-center space-y-5 rounded-xl">
                            <h1 className='text-3xl md:text-4xl text-center lg:text-5xl font-bold text-white'>High Quality Fine Art Prints</h1>
                            <p className='text-white md:text-xl md:w-[80%] lg:w-[50%] text-center'>
                                Available in select sizes and printed on canvas or premium archival paper. Our artists offer beautifully reproduced prints of their original art at a fraction of the price of the original.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[88vh] md:h-[84vh] rounded-xl'>
                        <div className="bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url('https://i.imghippo.com/files/594y01714436669.jpg')] h-full bg-cover bg-no-repeat flex flex-col justify-center items-center space-y-5 rounded-xl">
                            <h1 className='text-3xl md:text-4xl text-center lg:text-5xl font-bold text-white'>Wake Up Your Walls!</h1>
                            <p className='text-white md:text-xl md:w-[80%] lg:w-[50%] text-center'>
                                Original Paintings and Photography - buy directly from the artists and save.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}