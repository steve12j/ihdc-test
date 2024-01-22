import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import mainIcon from "@/assets/main-icon.png"
import useMediaQuery from '@/hooks/useMediaQuery'
import { useEffect, useState } from "react";
import Link from "@/scenes/navbar/Link";
import { UserIcon } from "@heroicons/react/24/outline"
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const flexBetween = 'flex justify-between  items-center'
    const [selectedPage, setSelectedPage] = useState("home");
    const [isMenuToggled, setIsMenuToggled] = useState(true);

    useEffect(()=>{
        setIsMenuToggled(true)
    },[pathname])


    return <nav>
        <div className={`fixed top-2 z-30 w-full py-1 bg-gray-50`}>
            <div
                className={`${flexBetween} mx-auto sm:w-[70%]  w-[90%]`}
            >
                <div
                    onClick={()=>navigate("/home")}
                    className="cursor-pointer"
                >
                    <img src={mainIcon} className=' w-20  mix-blend-darken object-contain  ' />
                </div>

                <div className='w-[58%] flex sm:justify-between justify-end items-center ' >
                    <p className='uppercase hidden sm:block text-lg '>
                        Xyz Systems llp.
                    </p>
                    {!(pathname === "/register") && <button
                        className="rounded-full md:hidden  bg-secondary-500 p-1"
                        onClick={() => { setIsMenuToggled(prev => !prev) }}
                    >
                        <Bars3Icon className="h-6 w-6 text-black" />
                    </button>}
                </div>
            </div>
        </div>

        {/* DESKTOP MENU */}
        {
            isAboveMediumScreens && !(pathname === "/register")  ? <div className='flex justify-center  items-center fixed top-16  z-30 w-full py-4 '>
                <div className=' flex justify-between gap-8 items-start w-[90%] self-start mx-auto   '>
                    <div className=" w-full  flex justify-center  gap-8 items-center " >
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Dashboard"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Products"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Transactions"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Journal"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />

                    </div>
                    <div className="flex flex-col cursor-pointer absolute right-20 mr-[5px] items-center justify-center hover:opacity-80  ">
                        <button>
                            <UserIcon className="h-6 w-6" />
                        </button>
                        <p className="font-medium ">Joseph Lazer</p>
                    </div>
                </div>
            </div> : undefined
        }

        {/* MOBILE-MENU-MODAL */}
        {
            !isAboveMediumScreens && !isMenuToggled &&  !(pathname === "/register") && <div className="fixed top-0 right-0 bottom-0 z-40 h-full w-[300px]  bg-primary-100 drop-shadow-xl">

                {/* CLOSE ICON */}
                <div className="flex justify-end p-10">
                    <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-black" />
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className=" ml-[10%] flex flex-col w-full  gap-5 text-2xl ">
                    <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Dashboard"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Products"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Transactions"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Journal"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
                <div className="flex absolute bottom-0 w-full py-10 gap-4 cursor-pointer  mr-[5px] items-center justify-center hover:opacity-80 ">
                    <button>
                        <UserIcon className="h-6 w-6" />
                    </button>
                    <p className="font-medium  ">Joseph Lazer</p>
                </div>
            </div>
        }
    </nav >
}

export default Navbar