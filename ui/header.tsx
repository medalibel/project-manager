import Link from "next/link"
import { mulish } from "./fonts"
import Image from "next/image"

export default function Header(){
  return(
    <header className=" z-10  fixed top-0 left-0 right-0 p-3">
      <div className=" flex justify-between items-center px-8 h-16 container mx-auto shadow-md bg-white">
        <Link className={`${mulish.className}`} href='/'>
          <p className="text-lg">ToDo</p>
        </Link>
        <h2 className=" text-lg">
          Project 1
        </h2>
        <Image
          className=" rounded-full"
          width={36}
          height={36}
          src='/dev.png'
          alt='profile image'
        />
      </div>
    </header>
    
  )
}