import React, { useState } from 'react'
import bgphoto from '../assets/bgphoto.jpeg'
import bphoto from '../assets/bphoto.jpeg'
import { BsArrowRight } from 'react-icons/Bs';
const Test = () => {
    const [card, setCard] = useState(1);
    const card1 = () => {
        setCard(1)
    }
    const card2 = () => {
        setCard(2)
    }
    const card3 = () => {
        setCard(3)
    }
    return (
        <>

            <div style={{ backgroundImage: `url(${bgphoto})` }} className='bg-cover bg-center h-[500px] w-full ' >
                <div className='grid grid-cols-2 '>
                    <div className=' font-bold text-xl sm:text-center sm:mr-72 sm1:text-right sm1:mr-16 mt-2 '>xtreme.</div>
                    <div className='flex  justify-center items-center '>
                        <div><ul className=' flex justify-center items-center gap-3 mt-2 cursor-pointer font-medium '>
                            <li className='hover:text-blue-600'>home</li>
                            <li className='hover:text-blue-600'>About</li>
                            <li className='xsm:hidden sm:block hover:text-blue-600'>Service</li>
                            <li className='xsm:hidden sm:block hover:text-blue-600'>News</li>
                            <li className='xsm:hidden sm:block hover:text-blue-600'>Contact</li></ul></div>
                    </div>
                </div>
                <div className=' grid grid-cols-1 sm:grid-cols-2 '>
                    <div className=' w-full h-[350px] justify-center items-center flex pl-5'>

                        <div>

                            <div className=' font-serif text-4xl font-semibold text-start'>
                                <p>Digital Agencey</p>
                                <p>Business Make</p>
                                <p> Big Deal.</p>
                            </div>

                            <div className=' text-base font-semibold ml- 20' >
                                <h1>
                                    Grow your business & boost up scale with best online
                                </h1>
                                <h1>
                                    agencies with us caled xtreme services.
                                </h1>
                            </div>
                            <div className='space-x-4 mt-5 font-semibold'>
                                <button className=' text-base pl-5 pr-5 h-8 border-1 border-gray-500 rounded-3xl shadow-sm shadow-black'>More About Us </button>
                                <button className=' text-base'>SEE LIVE DEMO</button>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full'>
                     
                    </div>
                </div>
            </div>

            {/* //card div */}

            <div className=' grid sm:grid-cols-3 sm1:grid-cols-1 sm:gap-3 sm:pl-36 sm:pr-40 sm1:px-10 sm1:space-y-3 sm:space-y-0 -mt-16'>

                <div class="w-full max-w-sm bg-white border border-gray-200 cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={card1}>
                    <div class="flex flex-col items-center ">
                        <div className='w-12 h-12  mt-10 rounded-full shadow-md bg-amber-100 flex justify-center items-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-yellow-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                        </svg></div>
                        <h5 class="mb-1 mt-2 text-sm text-gray-500  dark:text-white"> Market Research</h5>
                        <span class=" text-base font-medium text-gray-900 dark:text-gray-400">Market static growth & <br />Advanced Analysis.</span>
                        <h1 className='text-xl font-extrabold mt-3 mb-2'><BsArrowRight /></h1>
                    </div>
                </div>
                <div class="w-full cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={card2}>
                    <div class="flex flex-col items-center ">
                        <div className='w-12 h-12  mt-10 rounded-full shadow-md bg-green-200 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                            </svg></div>
                        <h5 class="mb-1 mt-2 text-sm text-gray-500  dark:text-white">financial Services</h5>
                        <span class=" text-base font-medium text-gray-900 dark:text-gray-400">Free Consulation & <br /> Bank Loan</span>
                        <h1 className='text-xl font-extrabold mt-3 mb-1'><BsArrowRight /></h1>
                    </div>
                </div>
                <div class="w-full cursor-pointer max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" onClick={card3}>
                    <div class="flex flex-col items-center ">
                        <div className='w-12 h-12  mt-10 rounded-full shadow-md bg-pink-100 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-pink-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                            </svg></div>
                        <h5 class="mb-1 mt-2 text-sm text-gray-500 dark:text-gray-400">Online Marketing </h5>
                        <span class=" mb-1 text-base font-medium text-gray-900">target Audience & <br />Alexa Rank</span>
                        <h1 className='text-xl font-extrabold mt-3 mb-1 pb-2'><BsArrowRight /></h1>
                    </div>
                </div>
            </div>

            {/* // last div */}

            <div className='grid sm1:grid-cols-1 sm:grid-cols-2'>
                <div className='items-center justify-center flex'>
                    <div className='p-6 sm:pl-10 '><img src={bphoto} alt="" /></div>
                </div>
                {card == 1 && <><div className=' p-3 '>

                    <button className='text-yellow-500 font mt-2 font-extrabold'>about Us</button>
                    <h1 className='text-4xl font-serif'>Best online Agency <br />with Best rating</h1>
                    <div className='sm1:w-[100%] sm:w-[50%]'> <h1 className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit illo fugiat maiores temporibus. Libero, cum voluptatem quis atque agnam mollitia deleniti atque!</h1></div> <br />
                    <div className='sm1:w-[100%] sm:w-[50%]'> <h1 className='text-sm font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit illo fugiat</h1></div>

                    <button className='bg-yellow-500 border-2 border-white h-10 rounded-3xl text-white pl-4 pr-4'>Learn More</button>
                </div></>}
                {card == 2 && <>
                    <div className='p-3 '>

                        <button className='text-red-500 font mt-2 font-extrabold'>about Us</button>
                        <h1 className='text-4xl font-serif'>Best online Agency <br />with Best rating</h1>
                        <div className='sm1:w-[100%] sm:w-[50%]'> <h1 className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit illo fugiat maiores temporibus. Libero, cum voluptatem quis atque agnam mollitia deleniti atque!</h1></div> <br />
                        <div className='sm1:w-[100%] sm:w-[50%] '> <h1 className='text-sm font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit illo fugiat</h1></div>

                        <button className='bg-red-500 border-2 border-white h-10 rounded-3xl text-white pl-4 pr-4'>Learn More</button>
                    </div>
                </>}
                {card == 3 && <>
                    <div className='p-3 '>

                        <button className='text-pink-500 font-extrabold mt-2'>about Us</button>
                        <h1 className='text-4xl font-serif'>Best online Agency <br />with Best rating</h1>
                        <div className='sm1:w-[100%] sm:w-[50%] '> <h1 className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit illo fugiat maiores temporibus. Libero, cum voluptatem quis atque agnam mollitia deleniti atque!</h1></div> <br />
                        <div className='sm1:w-[100%] sm:w-[50%]'> <h1 className='text-sm font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit illo fugiat</h1></div>

                        <button className='bg-pink-500 border-2 border-white h-10 rounded-3xl text-white pl-4 pr-4'>Learn More</button>
                    </div>
                </>}



            </div>
           

        </>
    )
}

export default Test
