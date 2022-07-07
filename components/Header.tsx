import Link from "next/link" // Dynamic routing
import { useState } from "react" // State management
import { MenuAlt2Icon } from "@heroicons/react/outline";
interface props{
    setDarkMode: void,
    setMobileMenuIsOpen: void,
}

export default function Header(props:any) {
    // const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const { setDarkMode, darkMode, setMobileMenuIsOpen} = props;
  return (
    <div className="flex justify-between md:justify-end items-center dark:bg-black">
        <button
            type="button"
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setMobileMenuIsOpen(true)}
        >
            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex">
            <div className="flex flex-row align-center md:flex md:flex-row justify-end md:mt-[24px] md:mr-[24px] gap-[16px] mx-4 mt-6 connect-buttion">
                <div className="mt-4">
                    <button type="button" className="bg-[#4E23A7] rounded-[14px]  w-[188px] md:w-[204px] h-[60px] v-btn v-btn--has-bg theme--light elevation-0 v-size--x-large" role="button" aria-haspopup="true" aria-expanded="false">
                        <span className="v-btn__content">
                            <div className="flex flex-row justify-center mx-[24px] normal-case">
                                <img src="/icons/wallet.svg" alt="" className="mr-[10px]" /> 
                                <span className="text-[14px] text-white py-[12px] font-semibold cursor-pointer">Connect Wallet</span>
                            </div>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}