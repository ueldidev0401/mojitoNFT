import Link from "next/link"; // Dynamic routing
import Router from "next/router"
import Image from "next/image"; // Images
import { useEffect, useState } from "react"; // State management
import cn from "classnames"
import { XIcon } from "@heroicons/react/outline";

import styles from "styles/components/Header.module.scss"; // Component styles

interface props{
  mobileMenuIsOpen: boolean
  setMobileMenuIsOpen: void
}


/**
 * Links to render in action menu
 * @dev Does not render any links where url is undefined, allowing conditional rendering
 */
const actionMenuLinks: {
  name: string;
  icon: string;
  url: string | undefined;
}[] = [
  {
    name: "About",
    icon: "/icons/info.svg",
    url: process.env.NEXT_PUBLIC_ARTICLE,
  },
  {
    name: "Discord",
    icon: "/icons/discord.svg",
    url: process.env.NEXT_PUBLIC_DISCORD,
  },
  {
    name: "Twitter",
    icon: "/icons/twitter.svg",
    url: process.env.NEXT_PUBLIC_TWITTER,
  },
  {
    name: "GitHub",
    icon: "/icons/github.svg",
    url: process.env.NEXT_PUBLIC_GITHUB,
  },
];

export default function Nav(props:any) {
  // Global state
    const { mobileMenuIsOpen, setMobileMenuIsOpen } = props;

  const [pathname, setPathname] = useState('')
  useEffect(() => {
    setPathname(Router.asPath)
  })

  return (
      <nav className={cn(mobileMenuIsOpen?"translate-x-0":"-translate-x-full md:translate-x-0","block transition ease-in-out duration-500 transform md:block w-full md:w-[244px] z-[1] h-[100%] fixed overflow-hidden dark:bg-[#0F0A0D]")} 
        style={{height: "100vh", top: "0px", maxHeight: "calc(100% - 0px)"}}
      >
        <div className="absolute top-0 right-0 pt-2  md:hidden">
          <button
            type="button"
            className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => setMobileMenuIsOpen(false)}
          >
            <XIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex flex-col items-center">
                <div className="flex flex-row justify-center mt-[44px] mb-[60px] md:mb-[60px]">
                  <Image src="/img/logo-white.png" alt="logo" width={"140px"} height={"30px"} />
                </div>
                {[
                  { title: "Overview", route: "/"},
                  { title: "My Nodes", route: "/mynodes"},
                  { title: "Mint Nodes", route: "/mintnodes"},
                  { title: "Docs", route: "https://mojito-capital.gitbook.io/untitled-2/docs"},
                ].map(({ route, title }) => (
                  <Link href={route} passHref key={title}>
                    <a className={cn("flex m-auto hover:bg-[#4E23A7] w-[188px] h-[46px] rounded-[10px] mx-[28px] mb-[14px] md:mb-[10px]", pathname == route?"bg-[#4E23A7]": "bg-transparent dark:bg-[#0F0A0D]")}>
                      <div className="my-auto">
                        <div className="text-[14px] text-gray-900 dark:text-gray-100 ml-[50px]">{title}</div>
                      </div>
                    </a>
                  </Link>
                ))}
                {[
                  { title: "Home", route: "#"}
                ].map(({ route, title }) => (
                  <Link href={route} passHref key={title}>
                      <a className={cn("flex hover:bg-[#4E23A7] w-[188px] h-[46px] rounded-[10px] mx-[28px] mb-[14px] md:mb-[10px] mt-[50px]", pathname == route?"bg-[#4E23A7]": "bg-transparent dark:bg-[#0F0A0D]")}>
                        <div className="my-auto">
                          <div className="text-[14px] text-gray-900 dark:text-gray-100 ml-[50px]">{title}</div>
                        </div>
                      </a>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mb-6 flex flex-col items-center">
                <div className="mb-[14px] md:mb-[28px]">
                  <ul className="nav-social">
                  {[
                    { route: "https://twitter.com/", icon:"/icons/twitter.svg"},
                    { route: "https://discord.gg", icon:"/icons/telegram.svg" },
                    { route: "https://snapshot.org/", icon:"/icons/medium.png" },
                    { route: "https://snapshot.org/", icon:"/icons/github.svg" },
                    { route: "https://snapshot.org/", icon:"/icons/dextools.png" },
                  ].map(({ route, icon }) => (
                    <li>
                      <a href={route} target="_blank">
                        {/* <div className="flex flex-row mx-[41.5px]"> */}
                          <img src={icon} alt="" className="mr-[10px] w-[24px] h-[24px]" /> 
                        {/* </div> */}
                      </a>
                    </li> 
                  ))}
                  </ul>
                </div>
            </div>
        </div>
      </nav>
  );
}
