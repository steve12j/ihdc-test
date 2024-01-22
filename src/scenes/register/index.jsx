import React, { useRef } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import celebrateImg from '@/assets/celebrate.png'

const Register = () => {
    const formRef = useRef("")

    const handleSubmit = (e) => {
        e.preventDefault();
        formRef.current.reset()

    }

    return (
        <div className='mt-[9rem] md:w-[70%] mx-auto'>
            <div className='flex md:flex-row gap-y-20 flex-col-reverse justify-center items-center '>
                {/* LEFT SIDE */}
                <div className='w-[60%]'>
                    <p className='md:text-4xl sm:text-3xl text-2xl md:text-left text-center  font-bol tracking-wider text-secondary-600 md:whitespace-nowrap' >Unlock Exclusive Benefits</p>
                    <form onClick={handleSubmit} ref={formRef} className='flex flex-col justify-center md:w-[70%] md:pb-0 pb-16  gap-5 mt-8 '>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm ml-1 font-medium text-black tracking-wider">PHONE NUMBER</label>
                            <PhoneInput
                                country={'in'}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true
                                }}
                                inputStyle={{
                                    borderRadius: "40px 40px",
                                    width: "100%",
                                    border: "1px solid black"
                                }}

                                buttonStyle={{
                                    borderRadius: "40px 0px 0px 40px",
                                    border: "1px solid black"
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm ml-1 font-medium tracking-wider text-black   ">NAME</label>
                            <input
                                type="text"
                                id="name"
                                className="bg-white border rounded-full border-gray-700 text-gray-900 text-sm  focus:ring-secondary-500 focus:border-secondary-500 focus:outline-secondary-500 block w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm ml-1 font-medium tracking-wider text-black   ">EMAIL [OPTIONAL]</label>
                            <input
                                type="text"
                                name='email'
                                id="email"
                                className="bg-white border rounded-full border-gray-700 text-gray-900 text-sm  focus:ring-secondary-500 focus:border-secondary-500 focus:outline-secondary-500 block w-full p-2"
                                required
                            />
                        </div>
                        <div>
                            <button type='submit' className="text-white w-full bg-secondary-600 hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-bold tracking-wide rounded-full border border-gray-700 text-sm px-5 py-2 text-center   mt-8 mb-2">
                                CONTINUE
                            </button>
                            <p className='text-secondary-500 text-sm mt-2'>Get ready to recieve a secrect code (OTP) on phone</p>
                        </div>
                    </form>
                </div>

                {/* RIGHT SIDE */}
                <div className='md:w-1/2 md:px-0 px-10'>
                    <img src={celebrateImg} alt="festival-register" className='md:max-w-[410px] w-[400px]' />
                </div>
            </div >
        </div >
    )
}

export default Register