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
    <div className="bg-[#40282C] sticky top-0  z-50">
      <div className="w-9/12 mx-auto  text-white z-50 flex items-center justify-between gap-5 py-5 ">

        <Image alt="" src={logo} width={70} height={70} />

        <NavigationMenu.Root>
          <NavigationMenu.List className=' flex items-center flex-wrap gap-10 text-xl justify-end'>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link href="/" className={isActiveLink('/') ? 'bg-white text-[#40282C] px-4 py-2 rounded-md' : ''}>Home</Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild >
                <Link href="/about" className={isActiveLink('/about') ? 'bg-white text-[#40282C] px-4 py-2 rounded-md' : ''} >About</Link>
              </NavigationMenu.Link >
            </NavigationMenu.Item>
            <NavigationMenu.Item className='relative z-50'>
              <NavigationMenu.Trigger >

                <Link href="/academic" className='flex items-center gap-2 group '>
                  <span> Academic</span> <RxChevronDown className=" text-2xl font-bold transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden />
                </Link>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className=' text-[#40282C] bg-white shadow-2xl   p-5  text-start  w-[250px] data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-14 left-0  '>
                <ul className="flex flex-col gap-5">
                  <li>
                    <NavigationMenu.Link asChild >
                      <Link href="/academic#SchoolMorningShift"  >Morning Shift</Link>
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link asChild >
                      <Link href="/academic#SchoolEveningShift" > Evening  Shift</Link>
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link asChild>
                      <Link href="/"> Calender</Link>
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link asChild  >
                      <Link href="/academic#UpComingEvents" >UpComing Events</Link>
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link asChild>
                      <Link href="/academic#NoticeBoard" >Notice Board</Link>
                    </NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item className='relative z-50'>
              <NavigationMenu.Trigger >
                <Link href="/campus-life" className='flex items-center gap-2 group '>
                  <span> Campus Life</span> <RxChevronDown className=" text-2xl font-bold transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180" aria-hidden /></Link>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className=' text-[#40282C] bg-white shadow-2xl   p-5  text-start absolute top-14 left-0 w-[250px]  '>
                <ul className="flex flex-col gap-5">
                  <li>
                    <NavigationMenu.Link asChild>
                      <Link href="/campus-life#PhotoGallary"> Photo Gallary</Link>
                    </NavigationMenu.Link>
                  </li>
                  <li>
                    <NavigationMenu.Link asChild>
                      <Link href="/campus-life#VideoGallary">Video Gallary</Link>
                    </NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild >
                <Link href="/contact" className={isActiveLink('/contact') ? 'bg-white text-[#40282C] px-4 py-2 rounded-md' : ''}>Contact</Link>

              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild >
                <Link href="/admission" className={isActiveLink('/admission') ? 'bg-white text-[#40282C] px-4 py-2 rounded-md' : ''}>
                  Admission
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </div>
    </div>
  );
};



export default Header;
