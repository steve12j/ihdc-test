import { useRef } from 'react'
import membershipOne from '@/assets/membership1.jpg'
import membershipTwo from '@/assets/membership2.jpg'
import imgOne from '@/assets/img01.jpg'
import imgTwo from '@/assets/img02.jpg'
import imgThree from '@/assets/img03.jpg'
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const swiperRef = useRef(null)

    const handleSlideNext = () => {
        swiperRef.current.swiper.slideNext()
    }
    const handleSlideBack = () => {
        swiperRef.current.swiper.slidePrev()
    }


    return (
        <section className='mt-[9rem]'>
            <div className='w-[90%] md:h-[70vh] mx-auto text-thin flex items-center flex-col md:flex-row  justify-center      '>

                {/* LEFT SIDE */}
                <div className='md:w-[35%] w-[90%]  flex  flex-col gap-8 '>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-4xl tracking-wide font-extralight text-black'>New Arrival</h2>
                        <div className='relative'>
                            <p className='text-sm font-bold uppercase text-black after:absolute after:h-1 after:w-8 after:bg-black after:-bottom-1.5 after:left-0  '>Join Today</p>
                        </div>
                    </div>
                    <div className='flex  flex-col items-center justify-center gap-16'>
                        <div className='flex flex-col gap-8 items-center'>
                            <img src={membershipOne} alt="community-membership" className='w-[250px]' />
                            <img src={membershipTwo} alt="community-membership" className='w-[250px]' />
                        </div>
                        <button
                          className='member-btn' 
                          onClick={() => {navigate("/register")}}
                          >
                            Join Now
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className='md:w-[60%] w-[100%] text-2xl mt-[60px] sm:py-0 py-10 flex flex-col justify-center gap-1 items-center tracking-wider'>
                    <div>
                        <p className='text-primary-500 text-center'>Unlock Premium Features Now</p>
                    </div>
                    <div className='w-[90%] h-[340px] flex gap-6  items-center justify-between'>
                        <button
                            className='hover:opacity-75'
                            onClick={handleSlideBack}
                        >
                            <ArrowLongLeftIcon className='h-6 w-6 text-primary-400' />
                        </button>
                        <Swiper
                            ref={swiperRef}
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                1060: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                1330: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide >
                                <div className='border border-primary-500 rounded-[12px] flex flex-col gap-4 items-center '>
                                    <img src={imgOne} alt="imageOne" className='rounded-t-[10px] h-[60%]' />
                                    <div className='  '>
                                        <p className='text-center  w-[150px] text-primary-500 font-semibold  leading-6 pb-2'>Lower Intrest Rate</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='border border-primary-500 rounded-[12px] flex flex-col gap-4 items-center '>
                                    <img src={imgTwo} alt="imageOne" className='rounded-t-[10px] h-[60%]' />
                                    <div className='  '>
                                        <p className='text-center w-[150px] text-primary-500 font-semibold leading-6 pb-2    '> Intrest Free Payments</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='border border-primary-500 rounded-[12px] flex flex-col gap-4 items-center '>
                                    <img src={imgThree} alt="imageOne" className='rounded-t-[10px] h-[60%]' />
                                    <div className='  '>
                                        <p className='text-center w-[150px] text-primary-500 font-semibold leading-6 pb-2   '> Discount On Materials</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='border border-primary-500 rounded-[12px] flex flex-col gap-4 items-center '>
                                    <img src={imgOne} alt="imageOne" className='rounded-t-[10px] h-[60%]' />
                                    <div className='  '>
                                        <p className='text-center  w-[150px] text-primary-500 font-semibold leading-6 pb-2'>Lower Intrest Rate</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='border border-primary-500 rounded-[12px] flex flex-col gap-4 items-center '>
                                    <img src={imgTwo} alt="imageOne" className='rounded-t-[10px] h-[60%]' />
                                    <div className='  '>
                                        <p className='text-center  w-[150px] text-primary-500 font-semibold leading-6 pb-2   '>Lower Intrest Rate</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='border border-primary-500 rounded-[12px] flex flex-col gap-4 items-center '>
                                    <img src={imgThree} alt="imageOne" className='rounded-t-[10px] h-[60%]' />
                                    <div className='  '>
                                        <p className='text-center w-[120px] text-primary-500 font-semibold leading-6 pb-2   '>Lower Intrest Rate</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <button
                            className='hover:opacity-75'
                            onClick={handleSlideNext}
                        >
                            <ArrowLongRightIcon className='h-6 w-6 text-primary-400' />
                        </button>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <button className='unlock-btn' >
                            Unlock Now
                        </button>
                        <button className='details-btn  ' >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home