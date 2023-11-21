"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image'
import logo from "../../assets/school_logo.png"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { RxChevronDown } from "react-icons/rx";

const Header = () => {
  const pathname = usePathname()
  const isActiveLink = (href) => {
    return href === pathname;
  };
  return (
    <div className="bg-[#40282C]">
      <div className="w-9/12 mx-auto  text-white z-50 flex items-center justify-between gap-5 py-5 ">

        <Image alt="" src={logo} width={90} height={90} />

        <NavigationMenu.Root>
          <NavigationMenu.List className=' flex items-center gap-10 text-xl justify-end'>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/" className={isActiveLink('/') ? 'bg-white text-[#40282C] px-4 py-2 rounded-md' : ''}>
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/about" className={isActiveLink('/about') ? 'bg-white text-[#40282C] px-4 py-2 rounded-md' : ''}>
                About
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item className='relative z-50'>
              <NavigationMenu.Trigger className='flex items-center gap-2 group '>

                <span> Academic</span> <RxChevronDown className=" text-2xl font-bold transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className=' text-[#40282C] bg-white shadow-2xl   p-5  text-start  w-[250px] data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-14 left-0  '>
                <ul className="flex flex-col gap-5">
                  <li>
                    <NavigationMenu.Link className="text-xl" href="/">
                      Morning Shift
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link className="text-xl " href="/">
                      Evening  Shift
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link className="text-xl " href="/">
                      Calender
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link className="text-xl " href="/">
                      UpComing Events
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link className="text-xl " href="/">
                      Notice Board
                    </NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item className='relative z-50'>
              <NavigationMenu.Trigger className='flex items-center gap-2 group '>
                <span> Campus Life</span> <RxChevronDown className=" text-2xl font-bold transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className=' text-[#40282C] bg-white shadow-2xl   p-5  text-start absolute top-14 left-0 w-[250px]  '>
                <ul className="flex flex-col gap-5">
                  <li>
                    <NavigationMenu.Link className="text-xl" href="/">
                      Photo Gallary
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link className="text-xl " href="/">
                      Video Gallary
                    </NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/admission" className={isActiveLink('/admission') ? 'bg-white text-[#40282C] px-4 py-2 rounded-md' : ''}>
                Admission
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </div>
  );
};



export default Header;
